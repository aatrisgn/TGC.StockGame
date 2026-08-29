import { InjectionToken } from '@angular/core';
import type { ApiClient } from '../../auto_generated/client/apiClient';

/**
 * Authenticated ApiClient instance, built at bootstrap from RuntimeConfig and the MSAL instance.
 * Kept separate from auto_generated/ so regenerating the Kiota client never clobbers this token.
 */
export const API_CLIENT = new InjectionToken<ApiClient>('API_CLIENT');
