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

// src/app/features/tutorial/tutorial-page/tutorial-page.ts
var TutorialPage = class _TutorialPage {
  static \u0275fac = function TutorialPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TutorialPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TutorialPage, selectors: [["app-tutorial-page"]], decls: 5, vars: 0, consts: [[1, "tutorial-page"]], template: function TutorialPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Tutorial");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Documentation and descriptions of how the game works will live here.");
      \u0275\u0275domElementEnd()();
    }
  }, styles: ["\n\n.tutorial-page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=tutorial-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TutorialPage, [{
    type: Component,
    args: [{ selector: "app-tutorial-page", imports: [], template: '<section class="tutorial-page">\n  <h1>Tutorial</h1>\n  <p>Documentation and descriptions of how the game works will live here.</p>\n</section>\n', styles: ["/* src/app/features/tutorial/tutorial-page/tutorial-page.scss */\n.tutorial-page {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=tutorial-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TutorialPage, { className: "TutorialPage", filePath: "src/app/features/tutorial/tutorial-page/tutorial-page.ts", lineNumber: 9 });
})();
export {
  TutorialPage
};
//# sourceMappingURL=chunk-OO2OHWOA.js.map
