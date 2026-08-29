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

// src/app/features/settings/notification-settings-page/notification-settings-page.ts
var NotificationSettingsPage = class _NotificationSettingsPage {
  static \u0275fac = function NotificationSettingsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationSettingsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationSettingsPage, selectors: [["app-notification-settings-page"]], decls: 5, vars: 0, consts: [[1, "notification-settings-page"]], template: function NotificationSettingsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Notification settings");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Notification preferences will be configurable here.");
      \u0275\u0275domElementEnd()();
    }
  }, styles: ["\n\n.notification-settings-page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=notification-settings-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationSettingsPage, [{
    type: Component,
    args: [{ selector: "app-notification-settings-page", imports: [], template: '<section class="notification-settings-page">\n  <h1>Notification settings</h1>\n  <p>Notification preferences will be configurable here.</p>\n</section>\n', styles: ["/* src/app/features/settings/notification-settings-page/notification-settings-page.scss */\n.notification-settings-page {\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=notification-settings-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationSettingsPage, { className: "NotificationSettingsPage", filePath: "src/app/features/settings/notification-settings-page/notification-settings-page.ts", lineNumber: 9 });
})();
export {
  NotificationSettingsPage
};
//# sourceMappingURL=chunk-4HSA45PL.js.map
