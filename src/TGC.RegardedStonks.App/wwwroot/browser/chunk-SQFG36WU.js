import {
  MsalAccountState,
  PlayerApiService
} from "./chunk-FYGX6LEM.js";
import {
  RUNTIME_CONFIG
} from "./chunk-6W2UWXVH.js";
import {
  EventType,
  MsalService
} from "./chunk-3SQQMRC2.js";
import {
  Router
} from "./chunk-6FRRGS6Y.js";
import {
  Injectable,
  computed,
  effect,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4ENSGPG6.js";

// src/app/core/services/auth-state.ts
var ADMIN_ROLE_VALUE = "MatchAdmin";
var AuthState = class _AuthState {
  msal = inject(MsalService);
  router = inject(Router);
  runtimeConfig = inject(RUNTIME_CONFIG);
  accountState = inject(MsalAccountState);
  playerApiService = inject(PlayerApiService);
  account = this.accountState.account;
  isAuthenticated = computed(() => this.accountState.account() !== null, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  isAdmin = computed(() => this.playerApiService.roles().includes(ADMIN_ROLE_VALUE), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  constructor() {
    effect(() => {
      const account = this.accountState.account();
      if (account) {
        this.playerApiService.ensurePlayerProvisioned(account.homeAccountId);
      }
    });
    this.msal.instance.addEventCallback((message) => {
      if (message.eventType === EventType.LOGIN_SUCCESS) {
        this.router.navigateByUrl("/overview");
      }
    });
  }
  login() {
    this.msal.loginRedirect({ scopes: this.runtimeConfig.auth.apiScopes });
  }
  logout() {
    this.msal.logoutRedirect();
  }
  static \u0275fac = function AuthState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthState, factory: _AuthState.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  AuthState
};
//# sourceMappingURL=chunk-SQFG36WU.js.map
