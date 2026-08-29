import { MsalGuardConfiguration } from '@azure/msal-angular';
import { BrowserCacheLocation, InteractionType, IPublicClientApplication, LogLevel, PublicClientApplication } from '@azure/msal-browser';
import { RuntimeConfig } from './core/models/runtime-config.model';

function loggerCallback(_level: LogLevel, message: string): void {
  console.log(message);
}

export function buildMsalInstance(config: RuntimeConfig): IPublicClientApplication {

  return new PublicClientApplication({
    auth: {
      clientId: config.auth.clientId,
      authority: config.auth.authority,
      redirectUri: config.auth.redirectUri,
      postLogoutRedirectUri: config.auth.postLogoutRedirectUri
    },
    cache: {
      cacheLocation: BrowserCacheLocation.SessionStorage
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Warning,
        piiLoggingEnabled: false
      }
    }
  });
}

export function buildMsalGuardConfig(config: RuntimeConfig): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: { scopes: config.auth.apiScopes }
  };
}

