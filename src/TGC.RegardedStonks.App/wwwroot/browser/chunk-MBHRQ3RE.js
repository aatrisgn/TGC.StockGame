import {
  AuthState
} from "./chunk-SQFG36WU.js";
import "./chunk-FYGX6LEM.js";
import "./chunk-6W2UWXVH.js";
import "./chunk-3SQQMRC2.js";
import "./chunk-QIYUTIXR.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-C3SXUWUH.js";
import "./chunk-HTA2VT4H.js";
import "./chunk-KNZGUDUB.js";
import "./chunk-6FRRGS6Y.js";
import "./chunk-TZKSD2K5.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-4ENSGPG6.js";
import "./chunk-DRAPPDPY.js";

// src/app/features/landing/landing-page/landing-page.ts
var LandingPage = class _LandingPage {
  authState = inject(AuthState);
  login() {
    this.authState.login();
  }
  static \u0275fac = function LandingPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingPage, selectors: [["app-landing-page"]], decls: 7, vars: 0, consts: [[1, "landing-page"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function LandingPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "RegardedStonks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, " Trade fictional stocks against other players in fast-moving matches. Build a portfolio, react to market events, and climb the leaderboard. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 1);
      \u0275\u0275listener("click", function LandingPage_Template_button_click_5_listener() {
        return ctx.login();
      });
      \u0275\u0275text(6, "Log in / Create account");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [MatButtonModule, MatButton], styles: ["\n\n.landing-page[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  margin: 4rem auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=landing-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingPage, [{
    type: Component,
    args: [{ selector: "app-landing-page", imports: [MatButtonModule], template: '<section class="landing-page">\n  <h1>RegardedStonks</h1>\n  <p>\n    Trade fictional stocks against other players in fast-moving matches. Build a portfolio, react to market events, and climb the\n    leaderboard.\n  </p>\n  <button mat-flat-button color="primary" (click)="login()">Log in / Create account</button>\n</section>\n', styles: ["/* src/app/features/landing/landing-page/landing-page.scss */\n.landing-page {\n  max-width: 40rem;\n  margin: 4rem auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=landing-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingPage, { className: "LandingPage", filePath: "src/app/features/landing/landing-page/landing-page.ts", lineNumber: 11 });
})();
export {
  LandingPage
};
//# sourceMappingURL=chunk-MBHRQ3RE.js.map
