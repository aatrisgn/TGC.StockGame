---
name: Debug access token page
description: Feature describing a debug page under User Settings that fetches and decodes the access and identity tokens
---

# Implement debug page to fetch access token and decode token

Under the "User Settings" menu item add a new sub-menu point called access token. On this page, the app should request an access- and identity token for the specified scope and visualize it in the user interface. There should be two dialog boxes: One for showing the encoded token and one for the decoded token.

At the bottom a definition of what the different values inside the JWT token is, should be explained.

This menu point should be visible for all users. However, only if a specific runtime setting is enabled.

The runtime setting is a new setting and should be called "debugMode". This does not currently exist and should be introduced the same way as existing auth settings in runtime.configuration.json files.

The purpose of this feature is to easier debug authentication issues.

## Clarifications (resolved during review)

- **Scope**: reuse the existing `auth.apiScopes` from `runtime.configuration.json` (the same scopes used for login) rather than letting the user type an arbitrary scope.
- **Dialog layout**: the access token and identity token each get their own encoded/decoded pair (4 views total), e.g. via tabs or two side-by-side sections — not a single pair with a token selector.
- **Config placement**: `debugMode` is a nested object, e.g. `debug: { enabled: boolean }`, not a flat top-level boolean, to leave room for future debug-only settings.
- **Env defaults**: `debugMode` (`debug.enabled`) defaults to `true` in `local.runtime.configuration.json` and `dev.runtime.configuration.json`, and `false` in `prd.runtime.configuration.json` and the base `runtime.configuration.json`.