import {
  toSignal
} from "./chunk-KNZGUDUB.js";
import {
  ActivatedRoute
} from "./chunk-6FRRGS6Y.js";
import "./chunk-TZKSD2K5.js";
import {
  Component,
  inject,
  map,
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

// src/app/features/matches/match-detail-page/match-detail-page.ts
var MatchDetailPage = class _MatchDetailPage {
  route = inject(ActivatedRoute);
  matchId = toSignal(this.route.paramMap.pipe(map((params) => params.get("id"))), {
    initialValue: null
  });
  static \u0275fac = function MatchDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatchDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchDetailPage, selectors: [["app-match-detail-page"]], decls: 5, vars: 1, consts: [[1, "match-detail-page"]], template: function MatchDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Match details, portfolio, and available stocks will show up here.");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Match ", ctx.matchId());
    }
  }, styles: ["\n\n.match-detail-page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=match-detail-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchDetailPage, [{
    type: Component,
    args: [{ selector: "app-match-detail-page", imports: [], template: '<section class="match-detail-page">\n  <h1>Match {{ matchId() }}</h1>\n  <p>Match details, portfolio, and available stocks will show up here.</p>\n</section>\n', styles: ["/* src/app/features/matches/match-detail-page/match-detail-page.scss */\n.match-detail-page {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=match-detail-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchDetailPage, { className: "MatchDetailPage", filePath: "src/app/features/matches/match-detail-page/match-detail-page.ts", lineNumber: 12 });
})();
export {
  MatchDetailPage
};
//# sourceMappingURL=chunk-EDWYFI3J.js.map
