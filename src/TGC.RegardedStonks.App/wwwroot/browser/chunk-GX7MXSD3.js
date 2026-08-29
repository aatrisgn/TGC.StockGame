import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-4ENSGPG6.js";
import "./chunk-DRAPPDPY.js";

// src/app/features/admin/admin-matches-page/admin-matches-page.ts
var AdminMatchesPage = class _AdminMatchesPage {
  static \u0275fac = function AdminMatchesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminMatchesPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminMatchesPage, selectors: [["app-admin-matches-page"]], decls: 5, vars: 0, consts: [[1, "admin-page"]], template: function AdminMatchesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "All matches");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Every match in the system will be listed here for admin management.");
      \u0275\u0275domElementEnd()();
    }
  }, styles: ["\n\n.admin-page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=admin-matches-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminMatchesPage, [{
    type: Component,
    args: [{ selector: "app-admin-matches-page", imports: [], template: '<section class="admin-page">\n  <h1>All matches</h1>\n  <p>Every match in the system will be listed here for admin management.</p>\n</section>\n', styles: ["/* src/app/features/admin/admin-matches-page/admin-matches-page.scss */\n.admin-page {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=admin-matches-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminMatchesPage, { className: "AdminMatchesPage", filePath: "src/app/features/admin/admin-matches-page/admin-matches-page.ts", lineNumber: 9 });
})();
export {
  AdminMatchesPage
};
//# sourceMappingURL=chunk-GX7MXSD3.js.map
