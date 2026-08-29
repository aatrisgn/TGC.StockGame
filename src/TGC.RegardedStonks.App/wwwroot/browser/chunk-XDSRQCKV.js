import {
  RUNTIME_CONFIG
} from "./chunk-6W2UWXVH.js";
import {
  MsalService
} from "./chunk-3SQQMRC2.js";
import "./chunk-QIYUTIXR.js";
import "./chunk-6FRRGS6Y.js";
import "./chunk-TZKSD2K5.js";
import {
  Component,
  computed,
  firstValueFrom,
  inject,
  resource,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ENSGPG6.js";
import "./chunk-DRAPPDPY.js";

// src/app/core/utils/jwt-decode.ts
function decodeJwtPayload(token) {
  const segments = token.split(".");
  if (segments.length < 2) {
    throw new Error("Token does not look like a JWT.");
  }
  const base64 = segments[1].replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  const json = new TextDecoder("utf-8").decode(bytes);
  return JSON.parse(json);
}

// src/app/features/settings/access-token-page/access-token-page.ts
var _forTrack0 = ($index, $item) => $item.claim;
var _forTrack1 = ($index, $item) => $item[0];
function AccessTokenPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "Requesting tokens\u2026");
    \u0275\u0275domElementEnd();
  }
}
function AccessTokenPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Could not acquire tokens: ", ctx, ". Refresh the page to try again. ");
  }
}
function AccessTokenPage_Conditional_7_Conditional_9_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "dt");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "dd", 6);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r1[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatClaimValue(entry_r1[1]));
  }
}
function AccessTokenPage_Conditional_7_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "dl", 5);
    \u0275\u0275repeaterCreate(1, AccessTokenPage_Conditional_7_Conditional_9_Conditional_0_For_2_Template, 4, 2, null, null, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.claimEntries(ctx));
  }
}
function AccessTokenPage_Conditional_7_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const view_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(view_r3.decodeError);
  }
}
function AccessTokenPage_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AccessTokenPage_Conditional_7_Conditional_9_Conditional_0_Template, 3, 0, "dl", 5)(1, AccessTokenPage_Conditional_7_Conditional_9_Conditional_1_Template, 2, 1, "p", 1);
  }
  if (rf & 2) {
    let tmp_3_0;
    \u0275\u0275conditional((tmp_3_0 = ctx.decoded) ? 0 : 1, tmp_3_0);
  }
}
function AccessTokenPage_Conditional_7_Conditional_19_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "dt");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "dd", 6);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r4[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatClaimValue(entry_r4[1]));
  }
}
function AccessTokenPage_Conditional_7_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "dl", 5);
    \u0275\u0275repeaterCreate(1, AccessTokenPage_Conditional_7_Conditional_19_Conditional_0_For_2_Template, 4, 2, null, null, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.claimEntries(ctx));
  }
}
function AccessTokenPage_Conditional_7_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const view_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(view_r5.decodeError);
  }
}
function AccessTokenPage_Conditional_7_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AccessTokenPage_Conditional_7_Conditional_19_Conditional_0_Template, 3, 0, "dl", 5)(1, AccessTokenPage_Conditional_7_Conditional_19_Conditional_1_Template, 2, 1, "p", 1);
  }
  if (rf & 2) {
    let tmp_3_0;
    \u0275\u0275conditional((tmp_3_0 = ctx.decoded) ? 0 : 1, tmp_3_0);
  }
}
function AccessTokenPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 3)(1, "h2");
    \u0275\u0275text(2, "Access token");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h3");
    \u0275\u0275text(4, "Encoded");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre", 4);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "h3");
    \u0275\u0275text(8, "Decoded claims");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, AccessTokenPage_Conditional_7_Conditional_9_Template, 2, 1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "section", 3)(11, "h2");
    \u0275\u0275text(12, "Identity token");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "h3");
    \u0275\u0275text(14, "Encoded");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "pre", 4);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "h3");
    \u0275\u0275text(18, "Decoded claims");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(19, AccessTokenPage_Conditional_7_Conditional_19_Template, 2, 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.accessTokenView()) == null ? null : tmp_1_0.encoded);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.accessTokenView()) ? 9 : -1, tmp_2_0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.identityTokenView()) == null ? null : tmp_3_0.encoded);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.identityTokenView()) ? 19 : -1, tmp_4_0);
  }
}
function AccessTokenPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "dt");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "dd");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r6.claim);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r6.description);
  }
}
var JWT_CLAIM_GLOSSARY = [
  { claim: "iss", description: "Issuer \u2014 the identity provider that issued the token." },
  { claim: "aud", description: "Audience \u2014 the intended recipient of the token (e.g. the API or client ID)." },
  { claim: "exp", description: "Expiration time \u2014 unix timestamp after which the token is no longer valid." },
  { claim: "nbf", description: "Not before \u2014 unix timestamp before which the token must not be accepted." },
  { claim: "iat", description: "Issued at \u2014 unix timestamp when the token was issued." },
  { claim: "sub", description: "Subject \u2014 the unique identifier of the user the token represents." },
  { claim: "oid", description: "Object ID \u2014 the user's immutable identifier in the Entra directory." },
  { claim: "tid", description: "Tenant ID \u2014 the Entra directory the user belongs to." },
  { claim: "ver", description: "Version \u2014 the token format version." },
  { claim: "name", description: "The user's display name." },
  { claim: "preferred_username", description: "The user's preferred username, typically an email or UPN." },
  { claim: "roles", description: "App roles assigned to the user (see runtime config rolesClaimName)." },
  { claim: "scp / scope", description: "The delegated permissions (scopes) granted to the access token." },
  { claim: "azp / appid", description: "Authorized party \u2014 the client application the token was issued to." },
  { claim: "nonce", description: "A value used to mitigate replay attacks during token issuance." }
];
var AccessTokenPage = class _AccessTokenPage {
  msal = inject(MsalService);
  runtimeConfig = inject(RUNTIME_CONFIG);
  glossary = JWT_CLAIM_GLOSSARY;
  tokenResource = resource({
    loader: () => firstValueFrom(this.msal.acquireTokenSilent({ scopes: this.runtimeConfig.auth.apiScopes }))
  });
  accessTokenView = computed(() => {
    const result = this.tokenResource.value();
    return result ? this.buildTokenView(result.accessToken) : void 0;
  }, ...ngDevMode ? [{ debugName: "accessTokenView" }] : []);
  identityTokenView = computed(() => {
    const result = this.tokenResource.value();
    return result ? this.buildTokenView(result.idToken) : void 0;
  }, ...ngDevMode ? [{ debugName: "identityTokenView" }] : []);
  buildTokenView(token) {
    try {
      return { encoded: token, decoded: decodeJwtPayload(token) };
    } catch (error) {
      return { encoded: token, decodeError: error instanceof Error ? error.message : "Failed to decode token." };
    }
  }
  claimEntries(decoded) {
    return Object.entries(decoded);
  }
  formatClaimValue(value) {
    return typeof value === "object" && value !== null ? JSON.stringify(value) : String(value);
  }
  static \u0275fac = function AccessTokenPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccessTokenPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessTokenPage, selectors: [["app-access-token-page"]], decls: 14, vars: 1, consts: [[1, "access-token-page"], [1, "access-token-page__error"], [1, "access-token-page__section", "access-token-page__glossary"], [1, "access-token-page__section"], [1, "access-token-page__pre"], [1, "access-token-page__claims"], [1, "tgc-mono-numeric"]], template: function AccessTokenPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Access token");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Inspect the access and identity tokens issued to your account, for debugging authentication issues.");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(5, AccessTokenPage_Conditional_5_Template, 2, 0, "p")(6, AccessTokenPage_Conditional_6_Template, 2, 1, "p", 1)(7, AccessTokenPage_Conditional_7_Template, 20, 4);
      \u0275\u0275domElementStart(8, "section", 2)(9, "h2");
      \u0275\u0275text(10, "JWT claim glossary");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "dl");
      \u0275\u0275repeaterCreate(12, AccessTokenPage_For_13_Template, 4, 2, null, null, _forTrack0);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.tokenResource.isLoading() ? 5 : (tmp_0_0 = ctx.tokenResource.error()) ? 6 : 7, tmp_0_0);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.glossary);
    }
  }, styles: ['\n\n.access-token-page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 48rem;\n}\n.access-token-page__section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.access-token-page__pre[_ngcontent-%COMP%] {\n  background: rgba(128, 128, 128, 0.1);\n  padding: 0.75rem;\n  border-radius: 4px;\n  overflow-x: auto;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8rem;\n}\n.access-token-page__claims[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: 0.75rem;\n  row-gap: 0.25rem;\n  font-size: 0.85rem;\n}\n.access-token-page__claims[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  opacity: 0.7;\n}\n.access-token-page__claims[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n.access-token-page__glossary[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: 0.75rem;\n  row-gap: 0.5rem;\n  font-size: 0.85rem;\n}\n.access-token-page__glossary[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  opacity: 0.7;\n}\n.access-token-page__glossary[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.access-token-page__error[_ngcontent-%COMP%] {\n  color: var(--mat-sys-error, #b3261e);\n}\n/*# sourceMappingURL=access-token-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessTokenPage, [{
    type: Component,
    args: [{ selector: "app-access-token-page", imports: [], template: '<section class="access-token-page">\n  <h1>Access token</h1>\n  <p>Inspect the access and identity tokens issued to your account, for debugging authentication issues.</p>\n\n  @if (tokenResource.isLoading()) {\n    <p>Requesting tokens&hellip;</p>\n  } @else if (tokenResource.error(); as error) {\n    <p class="access-token-page__error">\n      Could not acquire tokens: {{ error }}. Refresh the page to try again.\n    </p>\n  } @else {\n    <section class="access-token-page__section">\n      <h2>Access token</h2>\n\n      <h3>Encoded</h3>\n      <pre class="access-token-page__pre">{{ accessTokenView()?.encoded }}</pre>\n\n      <h3>Decoded claims</h3>\n      @if (accessTokenView(); as view) {\n        @if (view.decoded; as decoded) {\n          <dl class="access-token-page__claims">\n            @for (entry of claimEntries(decoded); track entry[0]) {\n              <dt>{{ entry[0] }}</dt>\n              <dd class="tgc-mono-numeric">{{ formatClaimValue(entry[1]) }}</dd>\n            }\n          </dl>\n        } @else {\n          <p class="access-token-page__error">{{ view.decodeError }}</p>\n        }\n      }\n    </section>\n\n    <section class="access-token-page__section">\n      <h2>Identity token</h2>\n\n      <h3>Encoded</h3>\n      <pre class="access-token-page__pre">{{ identityTokenView()?.encoded }}</pre>\n\n      <h3>Decoded claims</h3>\n      @if (identityTokenView(); as view) {\n        @if (view.decoded; as decoded) {\n          <dl class="access-token-page__claims">\n            @for (entry of claimEntries(decoded); track entry[0]) {\n              <dt>{{ entry[0] }}</dt>\n              <dd class="tgc-mono-numeric">{{ formatClaimValue(entry[1]) }}</dd>\n            }\n          </dl>\n        } @else {\n          <p class="access-token-page__error">{{ view.decodeError }}</p>\n        }\n      }\n    </section>\n  }\n\n  <section class="access-token-page__section access-token-page__glossary">\n    <h2>JWT claim glossary</h2>\n    <dl>\n      @for (entry of glossary; track entry.claim) {\n        <dt>{{ entry.claim }}</dt>\n        <dd>{{ entry.description }}</dd>\n      }\n    </dl>\n  </section>\n</section>\n', styles: ['/* src/app/features/settings/access-token-page/access-token-page.scss */\n.access-token-page {\n  padding: 1.5rem;\n  max-width: 48rem;\n}\n.access-token-page__section {\n  margin-top: 2rem;\n}\n.access-token-page__pre {\n  background: rgba(128, 128, 128, 0.1);\n  padding: 0.75rem;\n  border-radius: 4px;\n  overflow-x: auto;\n  overflow-wrap: anywhere;\n  white-space: pre-wrap;\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.8rem;\n}\n.access-token-page__claims {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: 0.75rem;\n  row-gap: 0.25rem;\n  font-size: 0.85rem;\n}\n.access-token-page__claims dt {\n  font-weight: 600;\n  opacity: 0.7;\n}\n.access-token-page__claims dd {\n  margin: 0;\n  overflow-wrap: anywhere;\n}\n.access-token-page__glossary dl {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: 0.75rem;\n  row-gap: 0.5rem;\n  font-size: 0.85rem;\n}\n.access-token-page__glossary dt {\n  font-weight: 600;\n  opacity: 0.7;\n}\n.access-token-page__glossary dd {\n  margin: 0;\n}\n.access-token-page__error {\n  color: var(--mat-sys-error, #b3261e);\n}\n/*# sourceMappingURL=access-token-page.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessTokenPage, { className: "AccessTokenPage", filePath: "src/app/features/settings/access-token-page/access-token-page.ts", lineNumber: 42 });
})();
export {
  AccessTokenPage
};
//# sourceMappingURL=chunk-XDSRQCKV.js.map
