import { computed, inject, Injectable, resource } from "@angular/core";
import { ApiError } from "@microsoft/kiota-abstractions";
import { GetPlayerRolesQueryResponse } from "../../../auto_generated/client/models";
import { API_CLIENT } from "../../models/api-client.token";
import { MsalAccountState } from "../msal-account-state";

const PLAYER_PROVISIONED_STORAGE_KEY_PREFIX = 'tgc-regarded-stonks:playerProvisioned:';

function isApiErrorWithStatus(err: unknown, status: number): boolean {
  return typeof err === 'object' && err !== null && (err as ApiError).responseStatusCode === status;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {
  protected readonly apiClient = inject(API_CLIENT);
  private readonly accountState = inject(MsalAccountState);

  private readonly provisioningInFlight = new Set<string>();

  /**
   * Gates rolesResource/selfResource so their loaders never fire until MSAL interaction
   * (redirect handling, token acquisition) has settled and the active account is known - firing
   * earlier races the redirect flow completing and yields an unauthenticated request. Returning
   * `undefined` here keeps the resource from loading (per the `params` contract of `resource()`);
   * a changed return value re-triggers it, so login/logout/account-switch re-fetch automatically
   * without any manual .reload() calls.
   */
  private readonly readyAccountId = computed(() =>
    this.accountState.interactionSettled() ? this.accountState.account()?.homeAccountId : undefined
  );

  public GetPlayerRoles() : Promise<GetPlayerRolesQueryResponse | undefined> {
    return this.apiClient.api.player.roles.get();
  }

  protected readonly rolesResource = resource({
      params: this.readyAccountId,
      loader: () => this.apiClient.api.player.roles.get()
  });

  readonly roles = computed<string[]>(() => {
      const roles = this.rolesResource.value()?.roles;
      if (!roles) {
        return [];
      }
      return roles;
  });

  readonly hasRoles = computed(() => this.roles().length > 0);

  private readonly selfResource = resource({
    params: this.readyAccountId,
    loader: async () => {
      try {
        return await this.apiClient.api.player.self.get();
      } catch (err) {
        if (isApiErrorWithStatus(err, 404)) {
          return undefined;
        }
        throw err;
      }
    }
  });

  readonly username = computed(() => this.selfResource.value()?.username ?? '');

  /**
   * Ensures a player row exists for the given MSAL account, calling POST /player/self at most
   * once per account per browser (cached in localStorage, since player rows are never deleted).
   * Never throws - this is called from the auth flow and must not block login/navigation.
   */
  async ensurePlayerProvisioned(accountId: string): Promise<void> {
    const storageKey = PLAYER_PROVISIONED_STORAGE_KEY_PREFIX + accountId;
    if (localStorage.getItem(storageKey) === 'true' || this.provisioningInFlight.has(accountId)) {
      return;
    }

    this.provisioningInFlight.add(accountId);

    try {
      await this.apiClient.api.player.self.post();
    } catch (err) {
      if (!isApiErrorWithStatus(err, 409)) {
        console.error('Failed to provision player for current account', err);
        this.provisioningInFlight.delete(accountId);
        return;
      }
    }

    localStorage.setItem(storageKey, 'true');
    this.selfResource.reload();
  }

  async updateUsername(username: string): Promise<void> {
    await this.apiClient.api.player.self.username.put({ username });
    this.selfResource.reload();
  }
}
