
---
name: Reacting to match events
description: Feature describing how new match_events rows are recorded via API and reacted to elsewhere in the system using Postgres LISTEN/NOTIFY as a change-data-capture mechanism
---

# Overview

This document describes how match events get created and how the rest of the system reacts to them. A match event (`MatchEvent` — see `Building-datamodel.md`) is a record of something that happened during a match: a stock price move, a purchase or sale, a market crash, insider trading, etc. Today the `match_events` table and its entity/config exist, but nothing writes to it and nothing reacts to it.

Two things are needed:

1. **Recording an event**: a POST endpoint that accepts an event type and a payload, and persists it to `match_events`.
2. **Reacting to an event**: once a row lands in `match_events`, other parts of the system should be able to react to it (e.g. update a portfolio, notify a client, apply a market effect) without the code that inserted the row having to know who's reacting.

## Recording an event

`POST matches/{id}/events` accepts an event type (`MatchEventType`) and a free-form payload, and stores a new `match_events` row via the existing repository/command pattern (mirrors `POST matches` → `CreateMatchCommand`). This is the only producer path in scope for this feature; it does not itself decide what the payload should contain for each event type — that's up to whatever future feature raises a given kind of event.

## Reacting to an event: Change Data Capture via Postgres LISTEN/NOTIFY

Reactions are driven off the database, not off the write path in-process. A Postgres trigger fires `pg_notify` on every `INSERT` into `match_events`, and a background listener in the API process holds a `LISTEN` connection open and dispatches to whatever reaction logic is registered for that event's type.

This is intentionally DB-level capture rather than an in-process event raised by the command handler: the trigger fires regardless of what inserted the row — the API, a script, a future second service — not only when this specific code path runs. It also keeps "recording an event" and "reacting to an event" decoupled: new reactions can be added later without touching the write path at all.

**Tradeoff, stated explicitly**: `NOTIFY` is fire-and-forget. If nothing is listening at the moment of insert (API down, mid-deploy), that notification is lost — there is no queue or redelivery. This is acceptable for now; if guaranteed at-least-once delivery is needed later, that calls for a different pattern (e.g. an outbox table with a polling publisher) rather than this one.

Reaction logic itself is pluggable: something in the system can register to "react when a `stockPriceIncrease` event happens" (for example) without needing to know how the notification arrived. What each reaction actually *does* is out of scope for this feature — only the plumbing that lets a reaction be registered and invoked is being built now. A single logging-only reaction is included to prove the wiring works end-to-end.

## Clarifications (resolved during review)

- **CDC mechanism**: considered four options — full Debezium/Kafka CDC, Postgres trigger + `LISTEN`/`NOTIFY`, an outbox table with a polling publisher, and a simple in-process domain event published by the command handler after `SaveChanges`. Chose Postgres trigger + `LISTEN`/`NOTIFY`: it's genuine DB-level capture (unlike the in-process option, which only fires for inserts made through this exact code path) without requiring new infrastructure (unlike Debezium/Kafka, which needs its own containers and replication-slot setup, disproportionate for a single-API/single-Postgres stack with no broker today).
- **Delivery guarantee**: explicitly accepted as fire-and-forget/at-most-once for now (see tradeoff above), not upgraded to an outbox/polling approach.
- **Notification payload**: the trigger sends only the new row's `Id` through `pg_notify` (not the full event), since `pg_notify` payloads are capped at 8000 bytes and the `Payload` column is unbounded `jsonb`. The listener re-fetches the full row by id once notified.
- **Scope boundary**: what a reaction actually does (updating a portfolio, pushing a client notification, etc.) is not part of this feature. This feature only builds the endpoint to record an event and the plumbing to let something react to one; concrete reactions are future features layered on top of the extension point this establishes.
