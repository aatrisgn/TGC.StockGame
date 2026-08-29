import {
  EventType,
  InteractionStatus,
  MsalBroadcastService,
  MsalService
} from "./chunk-3SQQMRC2.js";
import {
  API_CLIENT
} from "./chunk-HTA2VT4H.js";
import {
  toSignal
} from "./chunk-KNZGUDUB.js";
import {
  Injectable,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-4ENSGPG6.js";
import {
  __async
} from "./chunk-DRAPPDPY.js";

// src/app/core/services/msal-account-state.ts
var MsalAccountState = class _MsalAccountState {
  msal = inject(MsalService);
  msalBroadcastService = inject(MsalBroadcastService);
  interactionStatus = toSignal(this.msalBroadcastService.inProgress$, {
    initialValue: InteractionStatus.Startup
  });
  interactionSettled = computed(() => this.interactionStatus() === InteractionStatus.None, ...ngDevMode ? [{ debugName: "interactionSettled" }] : []);
  accountSignal = signal(this.msal.instance.getActiveAccount(), ...ngDevMode ? [{ debugName: "accountSignal" }] : []);
  account = this.accountSignal.asReadonly();
  constructor() {
    this.msal.handleRedirectObservable().subscribe();
    this.msal.instance.addEventCallback((message) => {
      if (message.eventType === EventType.LOGIN_SUCCESS || message.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) {
        const result = message.payload;
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
  static \u0275fac = function MsalAccountState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsalAccountState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MsalAccountState, factory: _MsalAccountState.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsalAccountState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/core/services/api-wrappers/player-api.service.ts
var PLAYER_PROVISIONED_STORAGE_KEY_PREFIX = "tgc-regarded-stonks:playerProvisioned:";
function isApiErrorWithStatus(err, status) {
  return typeof err === "object" && err !== null && err.responseStatusCode === status;
}
var PlayerApiService = class _PlayerApiService {
  apiClient = inject(API_CLIENT);
  accountState = inject(MsalAccountState);
  provisioningInFlight = /* @__PURE__ */ new Set();
  /**
   * Gates rolesResource/selfResource so their loaders never fire until MSAL interaction
   * (redirect handling, token acquisition) has settled and the active account is known - firing
   * earlier races the redirect flow completing and yields an unauthenticated request. Returning
   * `undefined` here keeps the resource from loading (per the `params` contract of `resource()`);
   * a changed return value re-triggers it, so login/logout/account-switch re-fetch automatically
   * without any manual .reload() calls.
   */
  readyAccountId = computed(() => this.accountState.interactionSettled() ? this.accountState.account()?.homeAccountId : void 0, ...ngDevMode ? [{ debugName: "readyAccountId" }] : []);
  GetPlayerRoles() {
    return this.apiClient.api.player.roles.get();
  }
  rolesResource = resource({
    params: this.readyAccountId,
    loader: () => this.apiClient.api.player.roles.get()
  });
  roles = computed(() => {
    const roles = this.rolesResource.value()?.roles;
    if (!roles) {
      return [];
    }
    return roles;
  }, ...ngDevMode ? [{ debugName: "roles" }] : []);
  hasRoles = computed(() => this.roles().length > 0, ...ngDevMode ? [{ debugName: "hasRoles" }] : []);
  selfResource = resource({
    params: this.readyAccountId,
    loader: () => __async(this, null, function* () {
      try {
        return yield this.apiClient.api.player.self.get();
      } catch (err) {
        if (isApiErrorWithStatus(err, 404)) {
          return void 0;
        }
        throw err;
      }
    })
  });
  username = computed(() => this.selfResource.value()?.username ?? "", ...ngDevMode ? [{ debugName: "username" }] : []);
  /**
   * Ensures a player row exists for the given MSAL account, calling POST /player/self at most
   * once per account per browser (cached in localStorage, since player rows are never deleted).
   * Never throws - this is called from the auth flow and must not block login/navigation.
   */
  ensurePlayerProvisioned(accountId) {
    return __async(this, null, function* () {
      const storageKey = PLAYER_PROVISIONED_STORAGE_KEY_PREFIX + accountId;
      if (localStorage.getItem(storageKey) === "true" || this.provisioningInFlight.has(accountId)) {
        return;
      }
      this.provisioningInFlight.add(accountId);
      try {
        yield this.apiClient.api.player.self.post();
      } catch (err) {
        if (!isApiErrorWithStatus(err, 409)) {
          console.error("Failed to provision player for current account", err);
          this.provisioningInFlight.delete(accountId);
          return;
        }
      }
      localStorage.setItem(storageKey, "true");
      this.selfResource.reload();
    });
  }
  updateUsername(username) {
    return __async(this, null, function* () {
      yield this.apiClient.api.player.self.username.put({ username });
      this.selfResource.reload();
    });
  }
  static \u0275fac = function PlayerApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlayerApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlayerApiService, factory: _PlayerApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlayerApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  MsalAccountState,
  PlayerApiService
};
//# sourceMappingURL=chunk-FYGX6LEM.js.map
