import { IPublicClientApplication } from '@azure/msal-browser';
import {
  AllowedHostsValidator,
  BaseBearerTokenAuthenticationProvider,
  type AccessTokenProvider,
  type AuthenticationProvider
} from '@microsoft/kiota-abstractions';
import { DefaultRequestAdapter } from '@microsoft/kiota-bundle';
import { createApiClient, type ApiClient } from './auto_generated/client/apiClient';
import { RuntimeConfig } from './core/models/runtime-config.model';

/**
 * DefaultRequestAdapter issues requests via fetch() directly, bypassing Angular's HttpClient
 * and therefore MsalInterceptor. Tokens must be attached here instead.
 */
export function buildKiotaAuthenticationProvider(
  config: RuntimeConfig,
  msalInstance: IPublicClientApplication
): AuthenticationProvider {
  const allowedHostsValidator = new AllowedHostsValidator(new Set([new URL(config.apiBaseUrl).host]));

  const accessTokenProvider: AccessTokenProvider = {
    getAuthorizationToken: async (): Promise<string> => {
      const account = msalInstance.getActiveAccount();
      if (!account) {
        throw new Error('No active MSAL account to acquire an API token for.');
      }
      const result = await msalInstance.acquireTokenSilent({
        scopes: config.auth.apiScopes,
        account
      });
      return result.accessToken;
    },
    getAllowedHostsValidator: () => allowedHostsValidator
  };

  return new BaseBearerTokenAuthenticationProvider(accessTokenProvider);
}

export function buildApiClient(config: RuntimeConfig, msalInstance: IPublicClientApplication): ApiClient {
  const authenticationProvider = buildKiotaAuthenticationProvider(config, msalInstance);
  const requestAdapter = new DefaultRequestAdapter(authenticationProvider);
  requestAdapter.baseUrl = config.apiBaseUrl;
  return withoutFrameworkPropertyProbing(createApiClient(requestAdapter));
}

const KIOTA_UNKNOWN_NAVIGATION_PROPERTY_MESSAGE = "couldn't find navigation property";

/**
 * The Kiota client is a Proxy whose get-trap throws on any property name it doesn't recognize
 * as an API route segment, instead of returning undefined like a normal object would. Angular's
 * DI internals duck-type-probe every injected value for framework-owned property names it has
 * no way of knowing about up front (observed so far: `ngOnDestroy`, checked when the root
 * injector registers destroy hooks; `name`, checked by `inject()`'s "not found" detection) —
 * each probe hits the trap and crashes instead of getting `undefined`. Rather than allowlisting
 * property names one crash at a time, catch specifically the Kiota "unknown navigation property"
 * error and resolve to `undefined`, which is what a plain object would have returned anyway.
 * Real Kiota usage errors (e.g. a missing path parameter) throw a different message and still
 * propagate normally.
 */
function withoutFrameworkPropertyProbing<T extends object>(client: T): T {
  return new Proxy(client, {
    get(target, property, receiver) {
      try {
        return Reflect.get(target, property, receiver);
      } catch (error) {
        if (error instanceof Error && error.message.startsWith(KIOTA_UNKNOWN_NAVIGATION_PROPERTY_MESSAGE)) {
          return undefined;
        }
        throw error;
      }
    }
  });
}
