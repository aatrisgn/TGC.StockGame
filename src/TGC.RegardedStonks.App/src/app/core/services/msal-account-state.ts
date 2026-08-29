import { computed, Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AccountInfo, AuthenticationResult, EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';

/**
 * Tracks the active MSAL account and whether MSAL interaction (redirect handling, token
 * acquisition, login/logout) is currently in progress. Consumers that need to make API calls
 * on behalf of the user (see PlayerApiService) must wait for `interactionSettled()` before
 * reading `account()` - reading it too early races the redirect flow completing, since that
 * requires a network round trip and `account()` starts out `null`.
 */
@Injectable({
  providedIn: 'root'
})
export class MsalAccountState {
  private readonly msal = inject(MsalService);
  private readonly msalBroadcastService = inject(MsalBroadcastService);

  private readonly interactionStatus = toSignal(this.msalBroadcastService.inProgress$, {
    initialValue: InteractionStatus.Startup
  });

  readonly interactionSettled = computed(() => this.interactionStatus() === InteractionStatus.None);

  private readonly accountSignal = signal<AccountInfo | null>(this.msal.instance.getActiveAccount());
  readonly account = this.accountSignal.asReadonly();

  constructor() {
    // Completes the redirect flow (processes the auth response in the URL, if any) and
    // fires LOGIN_SUCCESS below - required once per app load, before any other MSAL API use.
    this.msal.handleRedirectObservable().subscribe();

    this.msal.instance.addEventCallback((message: EventMessage) => {
      if (message.eventType === EventType.LOGIN_SUCCESS || message.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) {
        const result = message.payload as AuthenticationResult;
        if (result.account) {
          this.msal.instance.setActiveAccount(result.account);
          this.accountSignal.set(result.account);
        }
      }

      if (message.eventType === EventType.LOGOUT_SUCCESS) {
        this.accountSignal.set(null);
      }
    });
  }
}
