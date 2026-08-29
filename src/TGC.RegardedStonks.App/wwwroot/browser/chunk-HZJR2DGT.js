import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-CUVLGA24.js";
import {
  PlayerApiService
} from "./chunk-FYGX6LEM.js";
import "./chunk-3SQQMRC2.js";
import "./chunk-QIYUTIXR.js";
import {
  FormDialog
} from "./chunk-MA2UHM4Z.js";
import {
  MatDialog
} from "./chunk-TFNXWNWG.js";
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
  Injectable,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ENSGPG6.js";
import "./chunk-DRAPPDPY.js";

// src/app/core/services/theme.ts
var THEME_STORAGE_KEY = "tgc-regarded-stonks:theme";
var Theme = class _Theme {
  mode = signal(this.resolveInitialMode(), ...ngDevMode ? [{ debugName: "mode" }] : []);
  constructor() {
    effect(() => {
      const mode = this.mode();
      document.documentElement.classList.toggle("theme-dark", mode === "dark");
      document.documentElement.classList.toggle("theme-light", mode === "light");
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    });
  }
  toggle() {
    this.mode.update((mode) => mode === "dark" ? "light" : "dark");
  }
  setMode(mode) {
    this.mode.set(mode);
  }
  resolveInitialMode() {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  static \u0275fac = function Theme_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Theme)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Theme, factory: _Theme.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Theme, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/settings/settings-page/settings-page.ts
function SettingsPage_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r1);
  }
}
function SettingsPage_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h2");
    \u0275\u0275text(2, "Privileges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 6);
    \u0275\u0275repeaterCreate(4, SettingsPage_Conditional_17_For_5_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.playerApi.roles());
  }
}
var SettingsPage = class _SettingsPage {
  theme = inject(Theme);
  playerApi = inject(PlayerApiService);
  dialog = inject(MatDialog);
  toggleTheme() {
    this.theme.toggle();
  }
  openChangeUsernameDialog() {
    const data = {
      title: "Change username",
      submitLabel: "Save",
      fields: [{ key: "username", label: "Username", type: "text", required: true }],
      submit: (value) => this.playerApi.updateUsername(value.username)
    };
    this.dialog.open(FormDialog, { data, width: "420px" });
  }
  static \u0275fac = function SettingsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsPage, selectors: [["app-settings-page"]], decls: 18, vars: 3, consts: [[1, "settings-page"], [1, "settings-page__row"], ["mat-button", "", 3, "click"], [3, "change", "checked"], [1, "settings-page__hint"], [1, "settings-page__section"], [1, "settings-page__privileges"]], template: function SettingsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 2);
      \u0275\u0275listener("click", function SettingsPage_Template_button_click_6_listener() {
        return ctx.openChangeUsernameDialog();
      });
      \u0275\u0275text(7, "Change");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 1)(9, "span");
      \u0275\u0275text(10, "Dark theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "mat-slide-toggle", 3);
      \u0275\u0275listener("change", function SettingsPage_Template_mat_slide_toggle_change_11_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 1)(13, "span");
      \u0275\u0275text(14, "Profile image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 4);
      \u0275\u0275text(16, "Coming soon.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, SettingsPage_Conditional_17_Template, 6, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Username: ", ctx.playerApi.username());
      \u0275\u0275advance(6);
      \u0275\u0275property("checked", ctx.theme.mode() === "dark");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.playerApi.hasRoles() ? 17 : -1);
    }
  }, dependencies: [MatButtonModule, MatButton, MatSlideToggleModule, MatSlideToggle], styles: ["\n\n.settings-page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 30rem;\n}\n.settings-page__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.2);\n}\n.settings-page__hint[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  margin: 0;\n}\n.settings-page__section[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.settings-page__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n}\n.settings-page__privileges[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.25rem;\n}\n.settings-page__privileges[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n}\n/*# sourceMappingURL=settings-page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsPage, [{
    type: Component,
    args: [{ selector: "app-settings-page", imports: [MatButtonModule, MatSlideToggleModule], template: `<section class="settings-page">
  <h1>Settings</h1>

  <div class="settings-page__row">
    <span>Username: {{ playerApi.username() }}</span>
    <button mat-button (click)="openChangeUsernameDialog()">Change</button>
  </div>

  <div class="settings-page__row">
    <span>Dark theme</span>
    <mat-slide-toggle [checked]="theme.mode() === 'dark'" (change)="toggleTheme()"></mat-slide-toggle>
  </div>

  <div class="settings-page__row">
    <span>Profile image</span>
    <p class="settings-page__hint">Coming soon.</p>
  </div>

  @if (playerApi.hasRoles()) {
    <div class="settings-page__section">
      <h2>Privileges</h2>
      <ul class="settings-page__privileges">
        @for (role of playerApi.roles(); track role) {
          <li>{{ role }}</li>
        }
      </ul>
    </div>
  }
</section>
`, styles: ["/* src/app/features/settings/settings-page/settings-page.scss */\n.settings-page {\n  padding: 1.5rem;\n  max-width: 30rem;\n}\n.settings-page__row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.2);\n}\n.settings-page__hint {\n  opacity: 0.6;\n  margin: 0;\n}\n.settings-page__section {\n  padding-top: 1rem;\n}\n.settings-page__section h2 {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n}\n.settings-page__privileges {\n  margin: 0;\n  padding-left: 1.25rem;\n}\n.settings-page__privileges li {\n  padding: 0.25rem 0;\n}\n/*# sourceMappingURL=settings-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsPage, { className: "SettingsPage", filePath: "src/app/features/settings/settings-page/settings-page.ts", lineNumber: 15 });
})();
export {
  SettingsPage
};
//# sourceMappingURL=chunk-HZJR2DGT.js.map
