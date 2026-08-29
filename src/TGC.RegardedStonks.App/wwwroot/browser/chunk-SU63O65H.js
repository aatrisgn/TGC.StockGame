import {
  AuthState
} from "./chunk-SQFG36WU.js";
import "./chunk-FYGX6LEM.js";
import "./chunk-6W2UWXVH.js";
import "./chunk-3SQQMRC2.js";
import "./chunk-QIYUTIXR.js";
import "./chunk-HTA2VT4H.js";
import "./chunk-KNZGUDUB.js";
import "./chunk-6FRRGS6Y.js";
import "./chunk-TZKSD2K5.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4ENSGPG6.js";
import "./chunk-DRAPPDPY.js";

// src/app/features/overview/overview-page/overview-page.ts
var OverviewPage = class _OverviewPage {
  authState = inject(AuthState);
  static \u0275fac = function OverviewPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverviewPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverviewPage, selectors: [["app-overview-page"]], decls: 5, vars: 1, consts: [[1, "overview-page"]], template: function OverviewPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Overview");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Welcome back", ((tmp_0_0 = ctx.authState.account()) == null ? null : tmp_0_0.name) ? ", " + ((tmp_0_0 = ctx.authState.account()) == null ? null : tmp_0_0.name) : "", ". Your current matches and portfolio summary will show up here. ");
    }
  }, styles: ["\n\n.overview-page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=overview-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverviewPage, [{
    type: Component,
    args: [{ selector: "app-overview-page", imports: [], template: `<section class="overview-page">
  <h1>Overview</h1>
  <p>
    Welcome back{{ authState.account()?.name ? ', ' + authState.account()?.name : '' }}. Your current matches and portfolio summary will
    show up here.
  </p>
</section>
`, styles: ["/* src/app/features/overview/overview-page/overview-page.scss */\n.overview-page {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=overview-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverviewPage, { className: "OverviewPage", filePath: "src/app/features/overview/overview-page/overview-page.ts", lineNumber: 10 });
})();
export {
  OverviewPage
};
//# sourceMappingURL=chunk-SU63O65H.js.map
