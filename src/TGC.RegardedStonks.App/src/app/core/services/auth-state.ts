import { Injectable, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { EventMessage, EventType } from '@azure/msal-browser';
import { RUNTIME_CONFIG } from '../models/runtime-config.model';
import { PlayerApiService } from './api-wrappers/player-api.service';
import { MsalAccountState } from './msal-account-state';

/** Placeholder until the real Entra External ID app roles are finalized. */
const ADMIN_ROLE_VALUE = 'MatchAdmin';

@Injectable({
  providedIn: 'root'
})
export class AuthState {
  private readonly msal = inject(MsalService);
  private readonly router = inject(Router);
  private readonly runtimeConfig = inject(RUNTIME_CONFIG);
  private readonly accountState = inject(MsalAccountState);
  private readonly playerApiService = inject(PlayerApiService);

  readonly account = this.accountState.account;
  readonly isAuthenticated = computed(() => this.accountState.account() !== null);

  readonly isAdmin = computed(() => this.playerApiService.roles().includes(ADMIN_ROLE_VALUE));

  constructor() {
    // Provisions the player row for whichever account is active, whenever it changes. This also
    // covers a cached session already present at construction time, since effects run once
    // immediately with current signal values - no separate "initial account" case needed.
    effect(() => {
      const account = this.accountState.account();
      if (account) {
        this.playerApiService.ensurePlayerProvisioned(account.homeAccountId);
      }
    });

    // Navigating to /overview is a one-off side effect tied to the actual LOGIN_SUCCESS event,
    // not just "an account is present" - a returning user with a cached session should not be
    // redirected to /overview on every page load.
    this.msal.instance.addEventCallback((message: EventMessage) => {
      if (message.eventType === EventType.LOGIN_SUCCESS) {
        this.router.navigateByUrl('/overview');
      }
    });
  }

  login(): void {
    this.msal.loginRedirect({ scopes: this.runtimeConfig.auth.apiScopes });
  }

  logout(): void {
    this.msal.logoutRedirect();
  }
}
