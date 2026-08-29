import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalBroadcastService, MsalGuard, MsalService } from '@azure/msal-angular';
import { buildApiClient } from './app.api-client.config';
import { buildMsalGuardConfig, buildMsalInstance } from './app.auth.config';
import { routes } from './app.routes';
import { API_BASE_URL } from './core/models/api-base-url.token';
import { API_CLIENT } from './core/models/api-client.token';
import { RUNTIME_CONFIG, RuntimeConfig } from './core/models/runtime-config.model';
import { tracingInterceptor } from './core/interceptors/tracing-interceptor';

export async function buildAppConfig(config: RuntimeConfig): Promise<ApplicationConfig> {
  const msalInstance = buildMsalInstance(config);

  // MSAL browser requires initialize() to resolve before any other instance method is called.
  // AuthState reads msal.instance.getActiveAccount() synchronously as a field initializer as
  // soon as it's constructed, so this must complete before bootstrapApplication runs rather
  // than via a post-bootstrap APP_INITIALIZER.
  await msalInstance.initialize();

  return {
    providers: [
      { provide: RUNTIME_CONFIG, useValue: config },
      { provide: API_BASE_URL, useValue: config.apiBaseUrl },
      { provide: API_CLIENT, useValue: buildApiClient(config, msalInstance) },
      provideBrowserGlobalErrorListeners(),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideAnimationsAsync(),
      provideHttpClient(withInterceptors([tracingInterceptor]), withInterceptorsFromDi()),
      { provide: MSAL_INSTANCE, useValue: msalInstance },
      { provide: MSAL_GUARD_CONFIG, useValue: buildMsalGuardConfig(config) },
      MsalService,
      MsalGuard,
      MsalBroadcastService
    ]
  };
}
