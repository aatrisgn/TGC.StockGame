import { InjectionToken } from '@angular/core';

export interface RuntimeConfigAuth {
  clientId: string;
  authority: string;
  tenantId: string;
  redirectUri: string;
  postLogoutRedirectUri: string;
  apiScopes: string[];
}

export interface RuntimeConfigDebug {
  enabled: boolean;
}

export interface RuntimeConfig {
  environmentName: string;
  apiBaseUrl: string;
  rolesClaimName: string;
  auth: RuntimeConfigAuth;
  debug: RuntimeConfigDebug;
}

export const RUNTIME_CONFIG = new InjectionToken<RuntimeConfig>('RUNTIME_CONFIG');
