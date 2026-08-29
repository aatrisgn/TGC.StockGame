---
name: auto-generated-clients
description: This repository uses auto-generated http clients for the backend API. This skill describes how to generate and use them. They are generated via Kiota based on an Open API specification in the .Net backend. The clients are automatically created and updated on build of TGC.RegardedStonks.Api.
---

# Auto-generated clients

This skill describes how the auto-generated clients are generated and how they should be used inside the Angular frontend application.

## Kiota Configuration
Inside TGC.RegardedStonks.Api there is a C# project file (TGC.RegardedStonks.Api.csproj) which has the configuration for automatically generating the auto-generated clients. The following snippets are relevant:

```xml
<PropertyGroup>
  ...
  <OpenApiFile>TGC.RegardedStonks.Api.json</OpenApiFile>
  <buildAngularClient>true</buildAngularClient>
</PropertyGroup>
```
The settings above are simple variables for the sake of readability inside the .csproj file. They are being used as input for the Kiota build.


```xml
<PropertyGroup>
    <OpenApiGenerateDocuments>true</OpenApiGenerateDocuments>
    <OpenApiDocumentsDirectory>$(ProjectDir)openapi</OpenApiDocumentsDirectory>
</PropertyGroup>
```

The part above generates an open API specification in the openapi folder inside the project. This is done on build of the project. It is called TGC.RegardedStonks.Api.openapi.json. This file is used as input for the Kiota generator to generate the clients.

```xml
<Target Name="Kiota" Condition="'$(buildAngularClient)' == 'true'" AfterTargets="Build">
    <Exec Command="kiota generate --openapi $(ProjectDir)openapi/$(OpenApiFile) --language typescript --output ./../../TGC.RegardedStonks.App/src/app/auto_generated/client --exclude-backward-compatible"  />
</Target>
```

The commands above are executed after the build of the project. It uses the openapi specification generated in the previous step and generates a typescript client inside TGC.RegardedStonks.App/src/app/auto_generated/client. The --exclude-backward-compatible flag is used to avoid generating deprecated methods.

The functionality is being provided by the NuGet package `Kiota.MSBuild`.

The generated output inside `TGC.RegardedStonks.App/src/app/auto_generated/client` is committed to git, not gitignored. This keeps the working tree buildable without having to run the .NET codegen step first (e.g. for a clean checkout or CI cache miss). It's still fully regenerated and overwritten on every build of `TGC.RegardedStonks.Api`, so don't rely on manual edits surviving.

## Consumation of the auto-generated clients in Angular
The auto-generated clients are being generated inside TGC.RegardedStonks.App/src/app/auto_generated/client. The main entry point is apiClient.ts, which exports an `ApiClient` interface and a `createApiClient(requestAdapter: RequestAdapter)` factory function — there is no injectable class to instantiate directly.

### Registering ApiClient for dependency injection
`ApiClient` is registered via a factory provider, not `useClass`, since it's built by `createApiClient()`. The wiring lives in `app.api-client.config.ts` and `app.config.ts`:

- `buildApiClient(config, msalInstance)` (in `app.api-client.config.ts`) builds a `DefaultRequestAdapter` (from `@microsoft/kiota-bundle`), sets its `.baseUrl` from `RuntimeConfig.apiBaseUrl`, and calls `createApiClient(requestAdapter)`.
- **The MsalInterceptor gotcha**: `DefaultRequestAdapter` issues requests via `fetch()` directly, bypassing Angular's `HttpClient` — so the app's `MsalInterceptor` (which attaches bearer tokens to `HttpClient` requests) never sees these requests. Auth has to be attached inside Kiota's own pipeline instead: `buildKiotaAuthenticationProvider(config, msalInstance)` implements an `AccessTokenProvider` that calls `msalInstance.acquireTokenSilent({ scopes: config.auth.apiScopes, account })` (same scopes used by `AuthState.login()` and `buildMsalGuardConfig`), wrapped in a `BaseBearerTokenAuthenticationProvider` from `@microsoft/kiota-abstractions`.
- `app.config.ts` builds a single MSAL instance and reuses it for both the existing `MSAL_INSTANCE` provider and `buildApiClient`, then registers the result as `{ provide: API_CLIENT, useValue: ... }`. `API_CLIENT` is an `InjectionToken<ApiClient>` defined in `core/models/api-client.token.ts` (mirroring `API_BASE_URL` in `core/models/api-base-url.token.ts`).

Any consumption of the auto-generated clients should be done by injecting `API_CLIENT`.

The ApiClient should be wrapped inside a service layer for each domain type (e.g. players or matches), living in `src/app/core/services/` alongside the existing services there (`admin-mode.ts`, `auth-state.ts`, `theme.ts`) — not colocated in feature folders. This service layer should be responsible for handling any business logic and mapping the data from the auto-generated clients to the domain models used in the Angular app. An Angular component or page should therefore never reference ApiClient directly, but instead use the service layer for the relevant domain type.

## Making changes to auto-generated clients
You should never make any changes to the auto-generated clients. If you need to make changes, you should make them in the backend API and let the clients be generated automatically. If you need to add custom functionality, you should create a new service inside the Angular app and use the auto-generated clients as a dependency.