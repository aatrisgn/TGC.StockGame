---
name: application-architecture-backend
description: This skill provides guidelines and best practices for designing and implementing application architecture for the .Net backend
license: MIT
compatibility: Requires node, npm, and access to the internet
metadata:
  author: Angular Team @ Google
  version: '1.0'
---

# Application Architecture for .Net Backend

## Architecture style

### Clean Architecture with CQRS and Mediator pattern

### Repository pattern
This application uses Postgres Entity Framework for the database access.

No service should directly access the DBContext from the Entity Framework. Instead, a repository layer should be used to abstract the database access and provide a clean interface for the application layer to interact with the database. For each entity, a read-only and write repository should be created. Query handlers should use the read-only repository and command handlers are allowed use the write repository. The repositories should be injected into the handlers via constructor injection.

### SOLID principles
The backend architecture should follow the SOLID principles.

## API-Layer

### Endpoint/controller size
Methods inside API Controllers should be kept small and focused on a single responsibility. If a method is getting too large, it should be refactored into smaller methods or moved to a service layer.

Ideally, there should only happen three things in the API layer:
1. Validate the request
2. Create the Query/Command object and send to the Mediator layer
3. Return the response. If any of these steps are getting too large, they should be refactored into smaller methods or moved to a service layer.

*Note: Validation layer has not been implemented yet.*

### Cancellation tokens
All API endpoints should accept a cancellation token as a parameter and pass it down to the Mediator layer. Each handler should accept a cancellation token as a parameter and pass it down to the repository layer. The repository layer should accept a cancellation token as a parameter and pass it down to the Entity Framework methods. This allows for graceful cancellation of requests and prevents unnecessary work from being done.

Any place where a method from a library accepts a cancellation token, it should be passed down to that method. This includes but is not limited to Entity Framework methods, HttpClient methods, and any other library methods that accept a cancellation token.

### Request Models
The backend uses request models for each endpoint which is not able to derive its information from the route paramters. The request models are used to encapsulate the request data and are passed to the Mediator layer for processing via a command or query. The request models should not be used for multiple endpoints.

### Mediator-layer and CQRS
The backend uses a self-developed Mediator layer for handling requests and responses. The Mediator layer is responsible for coordinating the flow of data between the API layer and the application layer. It uses CQRS (Command Query Responsibility Segregation) pattern to separate read and write operations. That means, each API-endpoint needs to have a Command/Query, Command-/QueryHandler and a Command-/QueryResponse. The Command/Query is responsible for encapsulating the request data, the Command-/QueryHandler is responsible for processing the request and returning a response, and the Command-/QueryResponse is responsible for encapsulating the response data.

### Full example

## Application project and service layer

## Repository-Layer
