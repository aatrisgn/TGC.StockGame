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

// src/app/features/unauthorized/unauthorized-page/unauthorized-page.ts
var UnauthorizedPage = class _UnauthorizedPage {
  authState = inject(AuthState);
  login() {
    this.authState.login();
  }
  static \u0275fac = function UnauthorizedPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedPage, selectors: [["app-unauthorized-page"]], decls: 7, vars: 0, consts: [[1, "status-page"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function UnauthorizedPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "uh, oh.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "We don't know you, so you cannot access this.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 1);
      \u0275\u0275listener("click", function UnauthorizedPage_Template_button_click_5_listener() {
        return ctx.login();
      });
      \u0275\u0275text(6, "Create an account / log in");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [MatButtonModule, MatButton], styles: ["\n\n.status-page[_ngcontent-%COMP%] {\n  max-width: 32rem;\n  margin: 4rem auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=unauthorized-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedPage, [{
    type: Component,
    args: [{ selector: "app-unauthorized-page", imports: [MatButtonModule], template: `<section class="status-page">
  <h1>uh, oh.</h1>
  <p>We don't know you, so you cannot access this.</p>
  <button mat-flat-button color="primary" (click)="login()">Create an account / log in</button>
</section>
`, styles: ["/* src/app/features/unauthorized/unauthorized-page/unauthorized-page.scss */\n.status-page {\n  max-width: 32rem;\n  margin: 4rem auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=unauthorized-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedPage, { className: "UnauthorizedPage", filePath: "src/app/features/unauthorized/unauthorized-page/unauthorized-page.ts", lineNumber: 11 });
})();
export {
  UnauthorizedPage
};
//# sourceMappingURL=chunk-6LK7JN5K.js.map
