
---
name: Frontend scaffolding
description: Feature describing initial setup of the frontend application for backend API (TGC.RegardedStonks.Api)
---

# Frontend scaffolding feature

I want to have the following Angular Frontend application creted inside the src folder. It should be called  TGC.RegardedStonks.App

Please install 'npx skills add angular/skills' and use that for context.

Prefer Angular packages and default functionality over any external library. Do not add any external library without explicit approval.

## Angular Version & setup
- Use newest version available of Angular
- Use standalone components
- Distinguish between Services, Components, Pipes and middleware

Make components as small and re-usable as possible so it is easy to adjust.

## Docker

The Angular app should be containerized and run in a docker container via nginx. As part of the docker build, the configuration files should be adjusted accordingly. See section about configuration

## Configuration

The frontend should have a configuration file called runtime.configuration.json. It should be part of its assets and be publicly available for the app to fetch like any other resources from the app. It will not contain secrets.

There should be the following files:
- prd.runtime.configuration.json
- dev.runtime.configuration.json
- local.runtime.configuration.json
- runtime.configuration.json

When running the docker container an environment variable should determine which configuration file should be taken and overwrite the default runtime.configurations.json. If none is defined, none should be overwritten.

## Authorization & Authentication
Setup with Microsoft Entra External ID. Users will have one or more claims stating whether they are only a normal "user" or both "user" and "admin".

Only a landing page describing the app should be accessible without logging in. This also means, if you access a page you are not authorized for, it should return you to an "unauthorized" page stating, "uh, oh. We don't know you, so you cannot access this." and then have a link for creating a user and logging in.

Once logged in, you should be navigated to an "overview" page.

If you login as an admin, you should be redirected to the same "overview" page, but there should be a slider to enable admin view in the top nav bar. This will show additional menu points.

The backend will also be protected, so any call to the backend needs to request and append a JWT token for a given resouce.

For the configuration a config file for the app will exist. It will be called runtime.configurations.json. This should always have the relevant info such as ClientId and such.

The values will be provided later. Keep placeholders for now.

## Tracing
I want to IDs to be added as custom headers to each request: TraceId and SessionId. TraceId is pr. request. SessionID should be for the whole session (Until a user closes the tab/browser). If any error occurs on calling the backend api (Meaning a non 2xx-response) a pop-up should be presented to the user with these IDs and the error message from the request making it easier to track issues.

## Navbar

There should be a navbar at the top. It should have the following top-menu points:
- Overview (and overview of a players current matches and such)
- Matches (where all the matches a user has available is located)
- Tutorial - Documentation and descriptions of how the game works
- Admin panel (Only visible in admin mode)
    - All matches
    - All players
    - All events
- User settings
    - A menu point for logging out
    - A menu point for settings (such as color scheme and profile image)
    - A menu point for adjusting notification settings

The navbar should be mobile friendly

The navbar should be fixed position, so always visible at the top.

## Theme
Since this frontend is for a game about trading stocks and other valuables, the game should look like a trading platform. Think bloomberg terminal. Preferably with a Material design twist. There should be both a dark and light theme. This should be toggle-able via user settings and simply stored in local storage of the browser. No need for user settings yet.