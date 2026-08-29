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

// src/app/features/admin/admin-events-page/admin-events-page.ts
var AdminEventsPage = class _AdminEventsPage {
  static \u0275fac = function AdminEventsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminEventsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminEventsPage, selectors: [["app-admin-events-page"]], decls: 5, vars: 0, consts: [[1, "admin-page"]], template: function AdminEventsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "All events");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Every stock/market event across matches will be listed here for admin management.");
      \u0275\u0275domElementEnd()();
    }
  }, styles: ["\n\n.admin-page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=admin-events-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminEventsPage, [{
    type: Component,
    args: [{ selector: "app-admin-events-page", imports: [], template: '<section class="admin-page">\n  <h1>All events</h1>\n  <p>Every stock/market event across matches will be listed here for admin management.</p>\n</section>\n', styles: ["/* src/app/features/admin/admin-events-page/admin-events-page.scss */\n.admin-page {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=admin-events-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminEventsPage, { className: "AdminEventsPage", filePath: "src/app/features/admin/admin-events-page/admin-events-page.ts", lineNumber: 9 });
})();
export {
  AdminEventsPage
};
//# sourceMappingURL=chunk-Z6XLUHUF.js.map
