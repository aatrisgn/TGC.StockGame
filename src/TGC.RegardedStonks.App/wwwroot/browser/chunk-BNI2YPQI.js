import {
  MatButton,
  MatButtonModule
} from "./chunk-C3SXUWUH.js";
import {
  RouterLink
} from "./chunk-6FRRGS6Y.js";
import "./chunk-TZKSD2K5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-4ENSGPG6.js";
import "./chunk-DRAPPDPY.js";

// src/app/features/forbidden/forbidden-page/forbidden-page.ts
var ForbiddenPage = class _ForbiddenPage {
  static \u0275fac = function ForbiddenPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForbiddenPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForbiddenPage, selectors: [["app-forbidden-page"]], decls: 7, vars: 0, consts: [[1, "status-page"], ["mat-flat-button", "", "color", "primary", "routerLink", "/overview"]], template: function ForbiddenPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "You don't have access to this.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Your account doesn't have permission to view this page.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 1);
      \u0275\u0275text(6, "Back to Overview");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [MatButtonModule, MatButton, RouterLink], styles: ["\n\n.status-page[_ngcontent-%COMP%] {\n  max-width: 32rem;\n  margin: 4rem auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=forbidden-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForbiddenPage, [{
    type: Component,
    args: [{ selector: "app-forbidden-page", imports: [MatButtonModule, RouterLink], template: `<section class="status-page">
  <h1>You don't have access to this.</h1>
  <p>Your account doesn't have permission to view this page.</p>
  <a mat-flat-button color="primary" routerLink="/overview">Back to Overview</a>
</section>
`, styles: ["/* src/app/features/forbidden/forbidden-page/forbidden-page.scss */\n.status-page {\n  max-width: 32rem;\n  margin: 4rem auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=forbidden-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForbiddenPage, { className: "ForbiddenPage", filePath: "src/app/features/forbidden/forbidden-page/forbidden-page.ts", lineNumber: 11 });
})();
export {
  ForbiddenPage
};
//# sourceMappingURL=chunk-BNI2YPQI.js.map
