import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-CUVLGA24.js";
import {
  AuthState
} from "./chunk-SQFG36WU.js";
import "./chunk-FYGX6LEM.js";
import {
  RUNTIME_CONFIG
} from "./chunk-6W2UWXVH.js";
import {
  BrowserCacheLocation,
  InteractionType,
  LogLevel,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MsalBroadcastService,
  MsalGuard,
  MsalService,
  PublicClientApplication
} from "./chunk-3SQQMRC2.js";
import "./chunk-QIYUTIXR.js";
import {
  AllowedHostsValidator,
  BaseBearerTokenAuthenticationProvider,
  DateOnly,
  DefaultApiError,
  Duration,
  Headers,
  HttpMethod,
  InMemoryBackingStoreFactory,
  MultipartBody,
  ParseNodeFactoryRegistry,
  ResponseHandlerOptionKey,
  SerializationWriterFactoryRegistry,
  SpanStatusCode,
  TimeOnly,
  apiClientProxifier,
  createBackedModelProxyHandler,
  createUntypedArray,
  createUntypedBoolean,
  createUntypedNodeFromDiscriminatorValue,
  createUntypedNull,
  createUntypedNumber,
  createUntypedObject,
  createUntypedString,
  enableBackingStoreForParseNodeFactory,
  enableBackingStoreForSerializationWriterFactory,
  getEnumValueFromStringValue,
  inNodeEnv,
  isBackingStoreEnabled,
  isUntypedArray,
  isUntypedBoolean,
  isUntypedNode,
  isUntypedNull,
  isUntypedNumber,
  isUntypedObject,
  isUntypedString,
  parseGuidString,
  trace
} from "./chunk-GBFPCZ3F.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-BNGKUX2I.js";
import {
  CdkScrollableModule,
  DomPortalOutlet,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  OverlayConfig,
  OverlayModule,
  ScrollDispatcher,
  TemplatePortal,
  ViewportRuler,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-TFNXWNWG.js";
import {
  BreakpointObserver,
  Breakpoints,
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  FocusKeyManager,
  FocusMonitor,
  LEFT_ARROW,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIconButton,
  MatRipple,
  MatRippleModule,
  Platform,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  _getEventTarget,
  _getShadowRoot,
  hasModifierKey,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader
} from "./chunk-C3SXUWUH.js";
import {
  API_CLIENT
} from "./chunk-HTA2VT4H.js";
import {
  toSignal
} from "./chunk-KNZGUDUB.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter
} from "./chunk-6FRRGS6Y.js";
import {
  DomRendererFactory2,
  HttpErrorResponse,
  bootstrapApplication,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi
} from "./chunk-TZKSD2K5.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  catchError,
  filter,
  inject,
  makeEnvironmentProviders,
  map,
  merge,
  of,
  performanceMarkFeature,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeUntil,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ENSGPG6.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-DRAPPDPY.js";

// node_modules/@angular/material/fesm2022/menu.mjs
var _c0 = ["mat-menu-item", ""];
var _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "polygon", 3);
    \u0275\u0275elementEnd();
  }
}
var _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domListener("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closed.emit("click"));
    })("animationstart", function MatMenu_ng_template_0_Template_div_animationstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationStart($event.animationName));
    })("animationend", function MatMenu_ng_template_0_Template_div_animationend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    })("animationcancel", function MatMenu_ng_template_0_Template_div_animationcancel_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event.animationName));
    });
    \u0275\u0275domElementStart(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-menu-panel-animations-disabled", ctx_r1._animationsDisabled)("mat-menu-panel-exit-animation", ctx_r1._panelAnimationState === "void")("mat-menu-panel-animating", ctx_r1._isAnimating());
    \u0275\u0275domProperty("id", ctx_r1.panelId);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
  _elementRef = inject(ElementRef);
  _document = inject(DOCUMENT);
  _focusMonitor = inject(FocusMonitor);
  _parentMenu = inject(MAT_MENU_PANEL, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  /** ARIA role for the menu item. */
  role = "menuitem";
  /** Whether the menu item is disabled. */
  disabled = false;
  /** Whether ripples are disabled on the menu item. */
  disableRipple = false;
  /** Stream that emits when the menu item is hovered. */
  _hovered = new Subject();
  /** Stream that emits when the menu item is focused. */
  _focused = new Subject();
  /** Whether the menu item is highlighted. */
  _highlighted = false;
  /** Whether the menu item acts as a trigger for a sub-menu. */
  _triggersSubmenu = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    this._parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  /** Used to set the `tabindex`. */
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Returns the host DOM element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static \u0275fac = function MatMenuItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenuItem,
    selectors: [["", "mat-menu-item", ""]],
    hostAttrs: [1, "mat-mdc-menu-item", "mat-focus-indicator"],
    hostVars: 8,
    hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuItem_click_HostBindingHandler($event) {
          return ctx._checkDisabled($event);
        })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
          return ctx._handleMouseEnter();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
        \u0275\u0275classProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
      }
    },
    inputs: {
      role: "role",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
    },
    exportAs: ["matMenuItem"],
    attrs: _c0,
    ngContentSelectors: _c2,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
    template: function MatMenuItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "span", 0);
        \u0275\u0275projection(2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 1);
        \u0275\u0275conditionalCreate(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._triggersSubmenu ? 4 : -1);
      }
    },
    dependencies: [MatRipple],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
  _template = inject(TemplateRef);
  _appRef = inject(ApplicationRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _document = inject(DOCUMENT);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _portal;
  _outlet;
  /** Emits when the menu content has been attached. */
  _attached = new Subject();
  constructor() {
  }
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal?.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    this.detach();
    this._outlet?.dispose();
  }
  static \u0275fac = function MatMenuContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuContent,
    selectors: [["ng-template", "matMenuContent", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_CONTENT,
      useExisting: _MatMenuContent
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }], () => [], null);
})();
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}
var ENTER_ANIMATION = "_mat-menu-enter";
var EXIT_ANIMATION = "_mat-menu-exit";
var MatMenu = class _MatMenu {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _keyManager;
  _xPosition;
  _yPosition;
  _firstItemFocusRef;
  _exitFallbackTimeout;
  /** Whether animations are currently disabled. */
  _animationsDisabled = _animationsDisabled();
  /** All items inside the menu. Includes items nested inside another menu. */
  _allItems;
  /** Only the direct descendant menu items. */
  _directDescendantItems = new QueryList();
  /** Classes to be applied to the menu panel. */
  _classList = {};
  /** Current state of the panel animation. */
  _panelAnimationState = "void";
  /** Emits whenever an animation on the menu completes. */
  _animationDone = new Subject();
  /** Whether the menu is animating. */
  _isAnimating = signal(false, ...ngDevMode ? [{
    debugName: "_isAnimating"
  }] : []);
  /** Parent menu of the current menu panel. */
  parentMenu;
  /** Layout direction of the menu. */
  direction;
  /** Class or list of classes to be added to the overlay panel. */
  overlayPanelClass;
  /** Class to be added to the backdrop element. */
  backdropClass;
  /** aria-label for the menu panel. */
  ariaLabel;
  /** aria-labelledby for the menu panel. */
  ariaLabelledby;
  /** aria-describedby for the menu panel. */
  ariaDescribedby;
  /** Position of the menu in the X axis. */
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  /** @docs-private */
  templateRef;
  /**
   * List of the items inside of a menu.
   * @deprecated
   * @breaking-change 8.0.0
   */
  items;
  /**
   * Menu content that will be rendered lazily.
   * @docs-private
   */
  lazyContent;
  /** Whether the menu should overlap its trigger. */
  overlapTrigger;
  /** Whether the menu has a backdrop. */
  hasBackdrop;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = __spreadValues({}, this._classList);
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
    this._classList = newClassList;
  }
  _previousPanelClass;
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  /** Event emitted when the menu is closed. */
  closed = new EventEmitter();
  /**
   * Event emitted when the menu is closed.
   * @deprecated Switch to `closed` instead
   * @breaking-change 8.0.0
   */
  close = this.closed;
  panelId = inject(_IdGenerator).getId("mat-menu-panel-");
  constructor() {
    const defaultOptions = inject(MAT_MENU_DEFAULT_OPTIONS);
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusRef?.destroy();
    clearTimeout(this._exitFallbackTimeout);
  }
  /** Stream that emits whenever the hovered menu item changes. */
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  addItem(_item) {
  }
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  removeItem(_item) {
  }
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin = "program") {
    this._firstItemFocusRef?.destroy();
    this._firstItemFocusRef = afterNextRender(() => {
      const menuPanel = this._resolvePanel();
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    }, {
      injector: this._injector
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * @deprecated No longer used and will be removed.
   * @breaking-change 21.0.0
   */
  setElevation(_depth) {
  }
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = __spreadProps(__spreadValues({}, this._classList), {
      ["mat-menu-before"]: posX === "before",
      ["mat-menu-after"]: posX === "after",
      ["mat-menu-above"]: posY === "above",
      ["mat-menu-below"]: posY === "below"
    });
    this._changeDetectorRef.markForCheck();
  }
  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(state) {
    const isExit = state === EXIT_ANIMATION;
    if (isExit || state === ENTER_ANIMATION) {
      if (isExit) {
        clearTimeout(this._exitFallbackTimeout);
        this._exitFallbackTimeout = void 0;
      }
      this._animationDone.next(isExit ? "void" : "enter");
      this._isAnimating.set(false);
    }
  }
  _onAnimationStart(state) {
    if (state === ENTER_ANIMATION || state === EXIT_ANIMATION) {
      this._isAnimating.set(true);
    }
  }
  _setIsOpen(isOpen) {
    this._panelAnimationState = isOpen ? "enter" : "void";
    if (isOpen) {
      if (this._keyManager.activeItemIndex === 0) {
        const menuPanel = this._resolvePanel();
        if (menuPanel) {
          menuPanel.scrollTop = 0;
        }
      }
    } else if (!this._animationsDisabled) {
      this._exitFallbackTimeout = setTimeout(() => this._onAnimationDone(EXIT_ANIMATION), 200);
    }
    if (this._animationsDisabled) {
      setTimeout(() => {
        this._onAnimationDone(isOpen ? ENTER_ANIMATION : EXIT_ANIMATION);
      });
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  /** Gets the menu panel DOM node. */
  _resolvePanel() {
    let menuPanel = null;
    if (this._directDescendantItems.length) {
      menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
    }
    return menuPanel;
  }
  static \u0275fac = function MatMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMenu,
    selectors: [["mat-menu"]],
    contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_MENU_CONTENT, 5);
        \u0275\u0275contentQuery(dirIndex, MatMenuItem, 5);
        \u0275\u0275contentQuery(dirIndex, MatMenuItem, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lazyContent = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allItems = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
      }
    },
    viewQuery: function MatMenu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function MatMenu_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      }
    },
    inputs: {
      backdropClass: "backdropClass",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: [2, "overlapTrigger", "overlapTrigger", booleanAttribute],
      hasBackdrop: [2, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
      panelClass: [0, "class", "panelClass"],
      classList: "classList"
    },
    outputs: {
      closed: "closed",
      close: "close"
    },
    exportAs: ["matMenu"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_MENU_PANEL,
      useExisting: _MatMenu
    }])],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", 3, "click", "animationstart", "animationend", "animationcancel", "id"], [1, "mat-mdc-menu-content"]],
    template: function MatMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatMenu_ng_template_0_Template, 3, 12, "ng-template");
      }
    },
    styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel"
    [id]="panelId"
    [class]="_classList"
    [class.mat-menu-panel-animations-disabled]="_animationsDisabled"
    [class.mat-menu-panel-exit-animation]="_panelAnimationState === 'void'"
    [class.mat-menu-panel-animating]="_isAnimating()"
    (click)="closed.emit('click')"
    tabindex="-1"
    role="menu"
    (animationstart)="_onAnimationStart($event.animationName)"
    (animationend)="_onAnimationDone($event.animationName)"
    (animationcancel)="_onAnimationDone($event.animationName)"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n']
    }]
  }], () => [], {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_MENU_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
var PANELS_TO_TRIGGERS = /* @__PURE__ */ new WeakMap();
var MatMenuTriggerBase = class _MatMenuTriggerBase {
  _canHaveBackdrop;
  _element = inject(ElementRef);
  _viewContainerRef = inject(ViewContainerRef);
  _menuItemInstance = inject(MatMenuItem, {
    optional: true,
    self: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _focusMonitor = inject(FocusMonitor);
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _scrollStrategy = inject(MAT_MENU_SCROLL_STRATEGY);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationsDisabled = _animationsDisabled();
  _portal;
  _overlayRef = null;
  _menuOpen = false;
  _closingActionsSubscription = Subscription.EMPTY;
  _menuCloseSubscription = Subscription.EMPTY;
  _pendingRemoval;
  /**
   * We're specifically looking for a `MatMenu` here since the generic `MatMenuPanel`
   * interface lacks some functionality around nested menus and animations.
   */
  _parentMaterialMenu;
  /**
   * Cached value of the padding of the parent menu panel.
   * Used to offset sub-menus to compensate for the padding.
   */
  _parentInnerPadding;
  // Tracking input type is necessary so it's possible to only auto-focus
  // the first item of the list when the menu is opened via the keyboard
  _openedBy = void 0;
  /** Menu currently assigned to the trigger. */
  get _menu() {
    return this._menuInternal;
  }
  set _menu(menu) {
    if (menu === this._menuInternal) {
      return;
    }
    this._menuInternal = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
    this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu());
  }
  _menuInternal;
  constructor(_canHaveBackdrop) {
    this._canHaveBackdrop = _canHaveBackdrop;
    const parentMenu = inject(MAT_MENU_PANEL, {
      optional: true
    });
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
  }
  ngOnDestroy() {
    if (this._menu && this._ownsMenu(this._menu)) {
      PANELS_TO_TRIGGERS.delete(this._menu);
    }
    this._pendingRemoval?.unsubscribe();
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  /** Whether the menu is open. */
  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  _triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this._menu);
  }
  _closeMenu() {
    this._menu?.close.emit();
  }
  /** Internal method to open menu providing option to auto focus on first item. */
  _openMenu(autoFocus) {
    const menu = this._menu;
    if (this._menuOpen || !menu) {
      return;
    }
    this._pendingRemoval?.unsubscribe();
    const previousTrigger = PANELS_TO_TRIGGERS.get(menu);
    PANELS_TO_TRIGGERS.set(menu, this);
    if (previousTrigger && previousTrigger !== this) {
      previousTrigger._closeMenu();
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    if (this._canHaveBackdrop) {
      overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this._triggersSubmenu() : menu.hasBackdrop;
    } else {
      overlayConfig.hasBackdrop = false;
    }
    if (!overlayRef.hasAttached()) {
      overlayRef.attach(this._getPortal(menu));
      menu.lazyContent?.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this._closeMenu());
    menu.parentMenu = this._triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    if (autoFocus) {
      menu.focusFirstItem(this._openedBy || "program");
    }
    this._setIsMenuOpen(true);
    if (menu instanceof MatMenu) {
      menu._setIsOpen(true);
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /** Closes the menu and does the necessary cleanup. */
  _destroyMenu(reason) {
    const overlayRef = this._overlayRef;
    const menu = this._menu;
    if (!overlayRef || !this.menuOpen) {
      return;
    }
    this._closingActionsSubscription.unsubscribe();
    this._pendingRemoval?.unsubscribe();
    if (menu instanceof MatMenu && this._ownsMenu(menu)) {
      this._pendingRemoval = menu._animationDone.pipe(take(1)).subscribe(() => {
        overlayRef.detach();
        if (!PANELS_TO_TRIGGERS.has(menu)) {
          menu.lazyContent?.detach();
        }
      });
      menu._setIsOpen(false);
    } else {
      overlayRef.detach();
      menu?.lazyContent?.detach();
    }
    if (menu && this._ownsMenu(menu)) {
      PANELS_TO_TRIGGERS.delete(menu);
    }
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this._triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    this._setIsMenuOpen(false);
  }
  // set state rather than toggle to support triggers sharing a menu
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this._triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = createOverlayRef(this._injector, config);
      this._overlayRef.keydownEvents().subscribe((event) => {
        if (this._menu instanceof MatMenu) {
          this._menu._handleKeydown(event);
        }
      });
    }
    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: createFlexibleConnectedPositionStrategy(this._injector, this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir || "ltr",
      disableAnimations: this._animationsDisabled
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        this._ngZone.run(() => {
          const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
          const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
          menu.setPositionClasses(posX, posY);
        });
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this._triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const outsideClicks = this._getOutsideClickStream(this._overlayRef);
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => this._menuOpen && active !== this._menuItemInstance)) : of();
    return merge(outsideClicks, parentClose, hover, detachments);
  }
  /** Gets the portal that should be attached to the overlay. */
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  /**
   * Determines whether the trigger owns a specific menu panel, at the current point in time.
   * This allows us to distinguish the case where the same panel is passed into multiple triggers
   * and multiple are open at a time.
   */
  _ownsMenu(menu) {
    return PANELS_TO_TRIGGERS.get(menu) === this;
  }
  static \u0275fac = function MatMenuTriggerBase_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTriggerBase
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTriggerBase, [{
    type: Directive
  }], () => [{
    type: void 0
  }], null);
})();
var MatMenuTrigger = class _MatMenuTrigger extends MatMenuTriggerBase {
  _cleanupTouchstart;
  _hoverSubscription = Subscription.EMPTY;
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  /** Data to be passed along to any lazily-rendered content. */
  menuData;
  /**
   * Whether focus should be restored when the menu is closed.
   * Note that disabling this option can have accessibility implications
   * and it's up to you to manage focus, if you decide to turn it off.
   */
  restoreFocus = true;
  /** Event emitted when the associated menu is opened. */
  menuOpened = new EventEmitter();
  /**
   * Event emitted when the associated menu is opened.
   * @deprecated Switch to `menuOpened` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuOpen = this.menuOpened;
  /** Event emitted when the associated menu is closed. */
  menuClosed = new EventEmitter();
  /**
   * Event emitted when the associated menu is closed.
   * @deprecated Switch to `menuClosed` instead
   * @breaking-change 8.0.0
   */
  // tslint:disable-next-line:no-output-on-prefix
  onMenuClose = this.menuClosed;
  constructor() {
    super(true);
    const renderer = inject(Renderer2);
    this._cleanupTouchstart = renderer.listen(this._element.nativeElement, "touchstart", (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    }, {
      passive: true
    });
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  triggersSubmenu() {
    return super._triggersSubmenu();
  }
  /** Toggles the menu between the open and closed states. */
  toggleMenu() {
    return this.menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */
  openMenu() {
    this._openMenu(true);
  }
  /** Closes the menu. */
  closeMenu() {
    this._closeMenu();
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTouchstart();
    this._hoverSubscription.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._element;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.backdropClick();
  }
  /** Handles mouse presses on the trigger. */
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */
  _handleHover() {
    if (this.triggersSubmenu() && this._parentMaterialMenu) {
      this._hoverSubscription = this._parentMaterialMenu._hovered().subscribe((active) => {
        if (active === this._menuItemInstance && !active.disabled && // Ignore hover events if the parent menu is in the process of being closed (see #31956).
        this._parentMaterialMenu?._panelAnimationState !== "void") {
          this._openedBy = "mouse";
          this._openMenu(false);
        }
      });
    }
  }
  static \u0275fac = function MatMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatMenuTrigger,
    selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-mdc-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
          return ctx._handleMousedown($event);
        })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
      }
    },
    inputs: {
      _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
      menu: [0, "matMenuTriggerFor", "menu"],
      menuData: [0, "matMenuTriggerData", "menuData"],
      restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
    },
    outputs: {
      menuOpened: "menuOpened",
      onMenuOpen: "onMenuOpen",
      menuClosed: "menuClosed",
      onMenuClose: "onMenuClose"
    },
    exportAs: ["matMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger"
    }]
  }], () => [], {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var MatContextMenuTrigger = class _MatContextMenuTrigger extends MatMenuTriggerBase {
  _point = {
    x: 0,
    y: 0,
    initialX: 0,
    initialY: 0,
    initialScrollX: 0,
    initialScrollY: 0
  };
  _triggerPressedControl = false;
  _rootNode;
  _document = inject(DOCUMENT);
  _viewportRuler = inject(ViewportRuler);
  _scrollDispatcher = inject(ScrollDispatcher);
  _scrollSubscription;
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    this._menu = menu;
  }
  /** Data to be passed along to any lazily-rendered content. */
  menuData;
  /**
   * Whether focus should be restored when the menu is closed.
   * Note that disabling this option can have accessibility implications
   * and it's up to you to manage focus, if you decide to turn it off.
   */
  restoreFocus = true;
  /** Whether the context menu is disabled. */
  disabled = false;
  /** Event emitted when the associated menu is opened. */
  menuOpened = new EventEmitter();
  /** Event emitted when the associated menu is closed. */
  menuClosed = new EventEmitter();
  constructor() {
    super(false);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._scrollSubscription?.unsubscribe();
  }
  /** Handler for `contextmenu` events. */
  _handleContextMenuEvent(event) {
    if (!this.disabled) {
      event.preventDefault();
      if (this.menuOpen) {
        this._initializePoint(event.clientX, event.clientY);
        this._updatePosition();
      } else {
        this._openContextMenu(event);
      }
    }
  }
  _destroyMenu(reason) {
    super._destroyMenu(reason);
    this._scrollSubscription?.unsubscribe();
  }
  _getOverlayOrigin() {
    return this._point;
  }
  _getOutsideClickStream(overlayRef) {
    return overlayRef.outsidePointerEvents().pipe(skipWhile((event, index) => {
      if (event.type === "contextmenu") {
        return this._isWithinMenuOrTrigger(_getEventTarget(event));
      } else if (event.type === "auxclick") {
        if (index === 0) {
          return true;
        }
        this._rootNode ??= _getShadowRoot(this._element.nativeElement) || this._document;
        return this._isWithinMenuOrTrigger(this._rootNode.elementFromPoint(event.clientX, event.clientY));
      }
      return this._triggerPressedControl && index === 0 && event.ctrlKey;
    }));
  }
  /** Checks whether an element is within the trigger or the opened overlay. */
  _isWithinMenuOrTrigger(target) {
    if (!target) {
      return false;
    }
    const element = this._element.nativeElement;
    if (target === element || element.contains(target)) {
      return true;
    }
    const overlay = this._overlayRef?.hostElement;
    return overlay === target || !!overlay?.contains(target);
  }
  /** Opens the context menu. */
  _openContextMenu(event) {
    if (event.button === 2) {
      this._openedBy = "mouse";
    } else {
      this._openedBy = event.button === 0 ? "keyboard" : void 0;
    }
    this._initializePoint(event.clientX, event.clientY);
    this._triggerPressedControl = event.ctrlKey;
    super._openMenu(true);
    this._scrollSubscription?.unsubscribe();
    this._scrollSubscription = this._scrollDispatcher.scrolled(0).subscribe(() => {
      const position = this._viewportRuler.getViewportScrollPosition();
      const point = this._point;
      point.y = point.initialY + (point.initialScrollY - position.top);
      point.x = point.initialX + (point.initialScrollX - position.left);
      this._updatePosition();
    });
  }
  /** Initializes the point representing the origin relative to which the menu will be rendered. */
  _initializePoint(x, y) {
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    const point = this._point;
    point.x = point.initialX = x;
    point.y = point.initialY = y;
    point.initialScrollX = scrollPosition.left;
    point.initialScrollY = scrollPosition.top;
  }
  /** Refreshes the position of the overlay. */
  _updatePosition() {
    const overlayRef = this._overlayRef;
    if (overlayRef) {
      const positionStrategy = overlayRef.getConfig().positionStrategy;
      positionStrategy.setOrigin(this._point);
      overlayRef.updatePosition();
    }
  }
  static \u0275fac = function MatContextMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatContextMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatContextMenuTrigger,
    selectors: [["", "matContextMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-context-menu-trigger"],
    hostVars: 3,
    hostBindings: function MatContextMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function MatContextMenuTrigger_contextmenu_HostBindingHandler($event) {
          return ctx._handleContextMenuEvent($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-controls", ctx.menuOpen ? ctx.menu == null ? null : ctx.menu.panelId : null);
        \u0275\u0275classProp("mat-context-menu-trigger-disabled", ctx.disabled);
      }
    },
    inputs: {
      menu: [0, "matContextMenuTriggerFor", "menu"],
      menuData: [0, "matContextMenuTriggerData", "menuData"],
      restoreFocus: [0, "matContextMenuTriggerRestoreFocus", "restoreFocus"],
      disabled: [2, "matContextMenuTriggerDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      menuOpened: "menuOpened",
      menuClosed: "menuClosed"
    },
    exportAs: ["matContextMenuTrigger"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatContextMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[matContextMenuTriggerFor]",
      host: {
        "class": "mat-context-menu-trigger",
        "[class.mat-context-menu-trigger-disabled]": "disabled",
        "[attr.aria-controls]": "menuOpen ? menu?.panelId : null",
        "(contextmenu)": "_handleContextMenuEvent($event)"
      },
      exportAs: "matContextMenuTrigger"
    }]
  }], () => [], {
    menu: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerFor",
        required: true
      }]
    }],
    menuData: [{
      type: Input,
      args: ["matContextMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matContextMenuTriggerRestoreFocus"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matContextMenuTriggerDisabled",
        transform: booleanAttribute
      }]
    }],
    menuOpened: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }]
  });
})();
var MatMenuModule = class _MatMenuModule {
  static \u0275fac = function MatMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatMenuModule,
    imports: [MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
    exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [MatRippleModule, MatCommonModule, OverlayModule, CdkScrollableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
      exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger, MatContextMenuTrigger],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
var matMenuAnimations = {
  // Represents:
  // trigger('transformMenu', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => enter',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms 25ms linear', style({opacity: 0}))),
  // ])
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: {
    type: 7,
    name: "transformMenu",
    definitions: [{
      type: 0,
      name: "void",
      styles: {
        type: 6,
        styles: {
          opacity: 0,
          transform: "scale(0.8)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => enter",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 1,
            transform: "scale(1)"
          },
          offset: null
        },
        timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
      },
      options: null
    }, {
      type: 1,
      expr: "* => void",
      animation: {
        type: 4,
        styles: {
          type: 6,
          styles: {
            opacity: 0
          },
          offset: null
        },
        timings: "100ms 25ms linear"
      },
      options: null
    }],
    options: {}
  },
  // Represents:
  // trigger('fadeInItems', [
  //   // TODO(crisbeto): this is inside the `transformMenu`
  //   // now. Remove next time we do breaking changes.
  //   state('showing', style({opacity: 1})),
  //   transition('void => *', [
  //     style({opacity: 0}),
  //     animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: {
    type: 7,
    name: "fadeInItems",
    definitions: [{
      type: 0,
      name: "showing",
      styles: {
        type: 6,
        styles: {
          opacity: 1
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => *",
      animation: [{
        type: 6,
        styles: {
          opacity: 0
        },
        offset: null
      }, {
        type: 4,
        styles: null,
        timings: "400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"
      }],
      options: null
    }],
    options: {}
  }
};
var fadeInItems = matMenuAnimations.fadeInItems;
var transformMenu = matMenuAnimations.transformMenu;

// node_modules/@angular/material/fesm2022/toolbar.mjs
var _c02 = ["*", [["mat-toolbar-row"]]];
var _c12 = ["*", "mat-toolbar-row"];
var MatToolbarRow = class _MatToolbarRow {
  static \u0275fac = function MatToolbarRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatToolbarRow,
    selectors: [["mat-toolbar-row"]],
    hostAttrs: [1, "mat-toolbar-row"],
    exportAs: ["matToolbarRow"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarRow, [{
    type: Directive,
    args: [{
      selector: "mat-toolbar-row",
      exportAs: "matToolbarRow",
      host: {
        "class": "mat-toolbar-row"
      }
    }]
  }], null, null);
})();
var MatToolbar = class _MatToolbar {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the toolbar. This API is supported in M2 themes only, it has
   * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/toolbar/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Reference to all toolbar row elements that have been projected. */
  _toolbarRows;
  constructor() {
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static \u0275fac = function MatToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatToolbar,
    selectors: [["mat-toolbar"]],
    contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatToolbarRow, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._toolbarRows = _t);
      }
    },
    hostAttrs: [1, "mat-toolbar"],
    hostVars: 6,
    hostBindings: function MatToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matToolbar"],
    ngContentSelectors: _c12,
    decls: 2,
    vars: 0,
    template: function MatToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
      }
    },
    styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbar, [{
    type: Component,
    args: [{
      selector: "mat-toolbar",
      exportAs: "matToolbar",
      host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n',
      styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarModule = class _MatToolbarModule {
  static \u0275fac = function MatToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatToolbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatToolbarModule,
    imports: [MatCommonModule, MatToolbar, MatToolbarRow],
    exports: [MatToolbar, MatToolbarRow, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatToolbar, MatToolbarRow],
      exports: [MatToolbar, MatToolbarRow, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/core/services/admin-mode.ts
var AdminMode = class _AdminMode {
  enabled = signal(false, ...ngDevMode ? [{ debugName: "enabled" }] : []);
  toggle() {
    this.enabled.update((value) => !value);
  }
  static \u0275fac = function AdminMode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminMode)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminMode, factory: _AdminMode.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminMode, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/components/navbar/navbar.ts
var _forTrack0 = ($index, $item) => $item.route;
function Navbar_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r2.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r2.label, " ");
  }
}
function Navbar_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275text(1, "Admin panel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const adminMenu_r3 = \u0275\u0275reference(7);
    \u0275\u0275property("matMenuTriggerFor", adminMenu_r3);
  }
}
function Navbar_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-slide-toggle", 19);
    \u0275\u0275listener("change", function Navbar_Conditional_4_Conditional_4_Template_mat_slide_toggle_change_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleAdminMode());
    });
    \u0275\u0275text(1, "Admin mode");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("checked", ctx_r4.adminMode.enabled());
  }
}
function Navbar_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 6);
    \u0275\u0275repeaterCreate(1, Navbar_Conditional_4_For_2_Template, 4, 3, "a", 15, _forTrack0);
    \u0275\u0275conditionalCreate(3, Navbar_Conditional_4_Conditional_3_Template, 2, 1, "button", 16);
    \u0275\u0275conditionalCreate(4, Navbar_Conditional_4_Conditional_4_Template, 2, 1, "mat-slide-toggle", 17);
    \u0275\u0275elementStart(5, "button", 18)(6, "mat-icon");
    \u0275\u0275text(7, "manage_accounts");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const userMenu_r6 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.primaryLinks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.authState.isAdmin() && ctx_r4.adminMode.enabled() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.authState.isAdmin() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", userMenu_r6);
  }
}
function Navbar_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "mat-icon");
    \u0275\u0275text(2, "menu");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const mobileMenu_r7 = \u0275\u0275reference(26);
    \u0275\u0275property("matMenuTriggerFor", mobileMenu_r7);
  }
}
function Navbar_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r8.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r8.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r8.label, " ");
  }
}
function Navbar_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "mat-icon");
    \u0275\u0275text(2, "key");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Access token ");
    \u0275\u0275elementEnd();
  }
}
function Navbar_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r9 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r9.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r9.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r9.label, " ");
  }
}
function Navbar_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 13)(1, "mat-icon");
    \u0275\u0275text(2, "admin_panel_settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Admin panel ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const adminMenu_r3 = \u0275\u0275reference(7);
    \u0275\u0275property("matMenuTriggerFor", adminMenu_r3);
  }
}
function Navbar_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function Navbar_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleAdminMode());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "toggle_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r4.adminMode.enabled() ? "Disable" : "Enable", " admin mode ");
  }
}
var Navbar = class _Navbar {
  authState = inject(AuthState);
  adminMode = inject(AdminMode);
  runtimeConfig = inject(RUNTIME_CONFIG);
  breakpointObserver = inject(BreakpointObserver);
  isHandset = toSignal(this.breakpointObserver.observe(Breakpoints.Handset).pipe(map((result) => result.matches)), {
    initialValue: false
  });
  primaryLinks = [
    { label: "Overview", route: "/overview", icon: "dashboard" },
    { label: "Matches", route: "/matches", icon: "show_chart" },
    { label: "Tutorial", route: "/tutorial", icon: "description" }
  ];
  adminLinks = [
    { label: "All matches", route: "/admin/matches", icon: "show_chart" },
    { label: "All players", route: "/admin/players", icon: "group" },
    { label: "All events", route: "/admin/events", icon: "bolt" }
  ];
  toggleAdminMode() {
    this.adminMode.toggle();
  }
  logout() {
    this.authState.logout();
  }
  static \u0275fac = function Navbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Navbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], decls: 35, vars: 5, consts: [["adminMenu", "matMenu"], ["userMenu", "matMenu"], ["mobileMenu", "matMenu"], ["color", "primary", 1, "navbar"], ["routerLink", "/overview", 1, "navbar__brand"], [1, "navbar__spacer"], [1, "navbar__links"], ["mat-icon-button", "", "aria-label", "Open menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", "routerLink", "/settings"], ["mat-menu-item", "", "routerLink", "/settings/notifications"], ["mat-menu-item", "", "routerLink", "/settings/access-token"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-button", "", "routerLinkActive", "navbar__link--active", 3, "routerLink"], ["mat-button", "", 3, "matMenuTriggerFor"], [3, "checked"], ["mat-icon-button", "", "aria-label", "User settings", 3, "matMenuTriggerFor"], [3, "change", "checked"]], template: function Navbar_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "mat-toolbar", 3)(1, "a", 4);
      \u0275\u0275text(2, "RegardedStonks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "span", 5);
      \u0275\u0275conditionalCreate(4, Navbar_Conditional_4_Template, 8, 3, "nav", 6)(5, Navbar_Conditional_5_Template, 3, 1, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-menu", null, 0);
      \u0275\u0275repeaterCreate(8, Navbar_For_9_Template, 4, 3, "a", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-menu", null, 1)(12, "a", 9)(13, "mat-icon");
      \u0275\u0275text(14, "settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 10)(17, "mat-icon");
      \u0275\u0275text(18, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Notification settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, Navbar_Conditional_20_Template, 4, 0, "a", 11);
      \u0275\u0275elementStart(21, "button", 12);
      \u0275\u0275listener("click", function Navbar_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275elementStart(22, "mat-icon");
      \u0275\u0275text(23, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Log out ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "mat-menu", null, 2);
      \u0275\u0275repeaterCreate(27, Navbar_For_28_Template, 4, 3, "a", 8, _forTrack0);
      \u0275\u0275conditionalCreate(29, Navbar_Conditional_29_Template, 4, 1, "button", 13);
      \u0275\u0275elementStart(30, "button", 13)(31, "mat-icon");
      \u0275\u0275text(32, "manage_accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " User settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, Navbar_Conditional_34_Template, 4, 1, "button", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const userMenu_r6 = \u0275\u0275reference(11);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.isHandset() ? 4 : 5);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.adminLinks);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.runtimeConfig.debug.enabled ? 20 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.primaryLinks);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.authState.isAdmin() && ctx.adminMode.enabled() ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matMenuTriggerFor", userMenu_r6);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.authState.isAdmin() ? 34 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatIconButton, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatIconModule, MatIcon, MatSlideToggleModule, MatSlideToggle], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.25);\n}\n.navbar[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  height: 12px;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.08),\n      transparent);\n}\n.navbar__brand[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: none;\n  color: inherit;\n}\n.navbar__links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.navbar__links[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%], \n.navbar__links[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.navbar__spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.navbar__link--active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=navbar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatSlideToggleModule], template: `<mat-toolbar color="primary" class="navbar">
  <a routerLink="/overview" class="navbar__brand">RegardedStonks</a>

  <span class="navbar__spacer"></span>

  @if (!isHandset()) {
    <nav class="navbar__links">
      @for (link of primaryLinks; track link.route) {
        <a mat-button [routerLink]="link.route" routerLinkActive="navbar__link--active">
          <mat-icon>{{ link.icon }}</mat-icon>
          {{ link.label }}
        </a>
      }

      @if (authState.isAdmin() && adminMode.enabled()) {
        <button mat-button [matMenuTriggerFor]="adminMenu">Admin panel</button>
      }

      @if (authState.isAdmin()) {
        <mat-slide-toggle [checked]="adminMode.enabled()" (change)="toggleAdminMode()">Admin mode</mat-slide-toggle>
      }

      <button mat-icon-button [matMenuTriggerFor]="userMenu" aria-label="User settings">
        <mat-icon>manage_accounts</mat-icon>
      </button>
    </nav>
  } @else {
    <button mat-icon-button [matMenuTriggerFor]="mobileMenu" aria-label="Open menu">
      <mat-icon>menu</mat-icon>
    </button>
  }
</mat-toolbar>

<mat-menu #adminMenu="matMenu">
  @for (link of adminLinks; track link.route) {
    <a mat-menu-item [routerLink]="link.route">
      <mat-icon>{{ link.icon }}</mat-icon>
      {{ link.label }}
    </a>
  }
</mat-menu>

<mat-menu #userMenu="matMenu">
  <a mat-menu-item routerLink="/settings">
    <mat-icon>settings</mat-icon>
    Settings
  </a>
  <a mat-menu-item routerLink="/settings/notifications">
    <mat-icon>notifications</mat-icon>
    Notification settings
  </a>
  @if (runtimeConfig.debug.enabled) {
    <a mat-menu-item routerLink="/settings/access-token">
      <mat-icon>key</mat-icon>
      Access token
    </a>
  }
  <button mat-menu-item (click)="logout()">
    <mat-icon>logout</mat-icon>
    Log out
  </button>
</mat-menu>

<mat-menu #mobileMenu="matMenu">
  @for (link of primaryLinks; track link.route) {
    <a mat-menu-item [routerLink]="link.route">
      <mat-icon>{{ link.icon }}</mat-icon>
      {{ link.label }}
    </a>
  }
  @if (authState.isAdmin() && adminMode.enabled()) {
    <button mat-menu-item [matMenuTriggerFor]="adminMenu">
      <mat-icon>admin_panel_settings</mat-icon>
      Admin panel
    </button>
  }
  <button mat-menu-item [matMenuTriggerFor]="userMenu">
    <mat-icon>manage_accounts</mat-icon>
    User settings
  </button>
  @if (authState.isAdmin()) {
    <button mat-menu-item (click)="toggleAdminMode()">
      <mat-icon>toggle_on</mat-icon>
      {{ adminMode.enabled() ? 'Disable' : 'Enable' }} admin mode
    </button>
  }
</mat-menu>
`, styles: ['/* src/app/shared/components/navbar/navbar.scss */\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.25);\n}\n.navbar::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  height: 12px;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.08),\n      transparent);\n}\n.navbar__brand {\n  font-weight: 600;\n  text-decoration: none;\n  color: inherit;\n}\n.navbar__links {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.navbar__links a[mat-button],\n.navbar__links button[mat-button] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.navbar__spacer {\n  flex: 1 1 auto;\n}\n.navbar__link--active {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=navbar.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/shared/components/navbar/navbar.ts", lineNumber: 27 });
})();

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app-content"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, Navbar], styles: ["\n\n.app-content[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n@media (max-width: 599px) {\n  .app-content[_ngcontent-%COMP%] {\n    padding-top: 56px;\n  }\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Navbar], template: '<app-navbar />\n<main class="app-content">\n  <router-outlet />\n</main>\n', styles: ["/* src/app/app.scss */\n.app-content {\n  padding-top: 64px;\n}\n@media (max-width: 599px) {\n  .app-content {\n    padding-top: 56px;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-JQBQS2PU.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@microsoft/kiota-serialization-form/dist/es/src/formParseNode.js
var FormParseNode = class _FormParseNode {
  /**
   *  Creates a new instance of FormParseNode
   * @param _rawString the raw string to parse
   * @param backingStoreFactory the factory to create backing stores
   */
  constructor(_rawString, backingStoreFactory) {
    this._rawString = _rawString;
    this.backingStoreFactory = backingStoreFactory;
    this._fields = {};
    this.getStringValue = () => this.getStringValueFromRaw(this._rawString);
    this.getChildNode = (identifier) => {
      if (this._fields[identifier]) {
        return new _FormParseNode(this._fields[identifier], this.backingStoreFactory);
      }
      return void 0;
    };
    this.getBooleanValue = () => this.getBooleanValueFromRaw(this._rawString);
    this.getNumberValue = () => this.getNumberValueFromRaw(this._rawString);
    this.getGuidValue = () => this.getGuidValueFromRaw(this._rawString);
    this.getDateValue = () => this.getDateValueFromRaw(this._rawString);
    this.getDateOnlyValue = () => this.getDateOnlyValueFromRaw(this._rawString);
    this.getTimeOnlyValue = () => this.getTimeOnlyValueFromRaw(this._rawString);
    this.getDurationValue = () => this.getDurationValueFromRaw(this._rawString);
    this.getCollectionOfPrimitiveValues = () => {
      const values = this._rawString.split(",");
      return values.map((x) => {
        const typeOfX = typeof x;
        if (typeOfX === "boolean") {
          return this.getBooleanValueFromRaw(x);
        } else if (typeOfX === "string") {
          return this.getStringValueFromRaw(x);
        } else if (typeOfX === "number") {
          return this.getNumberValueFromRaw(x);
        } else if (x instanceof Date) {
          return this.getDateValueFromRaw(x);
        } else if (x instanceof DateOnly) {
          return this.getDateOnlyValueFromRaw(x);
        } else if (x instanceof TimeOnly) {
          return this.getTimeOnlyValueFromRaw(x);
        } else if (x instanceof Duration) {
          return this.getDurationValueFromRaw(x);
        } else {
          throw new Error(`encountered an unknown type during deserialization ${typeof x}`);
        }
      });
    };
    this.getCollectionOfObjectValues = (parsableFactory) => {
      throw new Error(`serialization of collections is not supported with URI encoding`);
    };
    this.getObjectValue = (parsableFactory) => {
      const temp = {};
      const enableBackingStore = isBackingStoreEnabled(parsableFactory(this)(temp));
      const value = enableBackingStore && this.backingStoreFactory ? new Proxy(temp, createBackedModelProxyHandler(this.backingStoreFactory)) : temp;
      if (this.onBeforeAssignFieldValues) {
        this.onBeforeAssignFieldValues(value);
      }
      this.assignFieldValues(value, parsableFactory);
      if (this.onAfterAssignFieldValues) {
        this.onAfterAssignFieldValues(value);
      }
      return value;
    };
    this.getCollectionOfEnumValues = (type) => {
      const rawValues = this.getStringValue();
      if (!rawValues) {
        return [];
      }
      return rawValues.split(",").map((x) => getEnumValueFromStringValue(x, type));
    };
    this.getEnumValue = (type) => {
      const rawValue = this.getStringValue();
      if (!rawValue) {
        return void 0;
      }
      return getEnumValueFromStringValue(rawValue, type);
    };
    if (!_rawString) {
      throw new Error("rawString cannot be undefined");
    }
    _rawString.split("&").map((x) => x.split("=")).filter((x) => x.length === 2).forEach((x) => {
      const key = this.normalizeKey(x[0]);
      if (this._fields[key]) {
        this._fields[key] += "," + x[1];
      } else {
        this._fields[key] = x[1];
      }
    });
  }
  normalizeKey(key) {
    return decodeURIComponent(key).trim();
  }
  getStringValueFromRaw(value) {
    return decodeURIComponent(value);
  }
  getBooleanValueFromRaw(value) {
    const decoded = this.getStringValueFromRaw(value).toLowerCase();
    if (decoded === "true" || decoded === "1") {
      return true;
    } else if (decoded === "false" || decoded === "0") {
      return false;
    }
    return void 0;
  }
  getNumberValueFromRaw(value) {
    return parseFloat(this.getStringValueFromRaw(value));
  }
  getGuidValueFromRaw(value) {
    return parseGuidString(this.getStringValueFromRaw(value));
  }
  getDateValueFromRaw(value) {
    return new Date(Date.parse(this.getStringValueFromRaw(value)));
  }
  getDateOnlyValueFromRaw(value) {
    return DateOnly.parse(this.getStringValueFromRaw(value));
  }
  getTimeOnlyValueFromRaw(value) {
    return TimeOnly.parse(this.getStringValueFromRaw(value));
  }
  getDurationValueFromRaw(value) {
    return Duration.parse(this.getStringValueFromRaw(value));
  }
  getByteArrayValue() {
    throw new Error("serialization of byt arrays is not supported with URI encoding");
  }
  assignFieldValues(model, parsableFactory) {
    const fields = parsableFactory(this)(model);
    Object.entries(this._fields).filter((x) => !/^null$/i.test(x[1])).forEach(([k, v]) => {
      const deserializer = fields[k];
      if (deserializer) {
        deserializer(new _FormParseNode(v, this.backingStoreFactory));
      } else {
        model[k] = v;
      }
    });
  }
};

// node_modules/@microsoft/kiota-serialization-form/dist/es/src/formSerializationWriter.js
var FormSerializationWriter = class _FormSerializationWriter {
  constructor() {
    this.writer = [];
    this.depth = -1;
    this.writeStringValue = (key, value) => {
      if (value === null) {
        value = "null";
      }
      if (key && value) {
        this.writePropertyName(key);
        this.writer.push(`=${encodeURIComponent(value)}`);
        this.writer.push(_FormSerializationWriter.propertySeparator);
      }
    };
    this.writePropertyName = (key) => {
      this.writer.push(encodeURIComponent(key));
    };
    this.shouldWriteValueOrNull = (key, value) => {
      if (value === null) {
        this.writeNullValue(key);
        return false;
      }
      return true;
    };
    this.writeBooleanValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value !== void 0 && this.writeStringValue(key, `${value}`);
      }
    };
    this.writeNumberValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, `${value}`);
      }
    };
    this.writeGuidValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toString());
      }
    };
    this.writeDateValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toISOString());
      }
    };
    this.writeDateOnlyValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toString());
      }
    };
    this.writeTimeOnlyValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toString());
      }
    };
    this.writeDurationValue = (key, value) => {
      if (this.shouldWriteValueOrNull(key, value)) {
        value && this.writeStringValue(key, value.toString());
      }
    };
    this.writeNullValue = (key) => {
      key && this.writeStringValue(key, null);
    };
    this.writeCollectionOfPrimitiveValues = (_key, _values) => {
      if (_key && _values) {
        _values.forEach((val) => {
          this.writeAnyValue(_key, val);
        });
      }
    };
    this.writeCollectionOfObjectValues = (_key, _values) => {
      throw new Error(`serialization of collections is not supported with URI encoding`);
    };
    this.writeObjectValue = (key, value, serializerMethod) => {
      var _a, _b, _c;
      if (++this.depth > 0) {
        throw new Error(`serialization of nested objects is not supported with URI encoding`);
      }
      if (!this.shouldWriteValueOrNull(key, value)) {
        return;
      }
      if (value) {
        if (key) {
          this.writePropertyName(key);
        }
        (_a = this.onBeforeObjectSerialization) === null || _a === void 0 ? void 0 : _a.call(this, value);
        (_b = this.onStartObjectSerialization) === null || _b === void 0 ? void 0 : _b.call(this, value, this);
        serializerMethod(this, value);
        (_c = this.onAfterObjectSerialization) === null || _c === void 0 ? void 0 : _c.call(this, value);
        if (this.writer.length > 0 && this.writer[this.writer.length - 1] === _FormSerializationWriter.propertySeparator) {
          this.writer.pop();
        }
        key && this.writer.push(_FormSerializationWriter.propertySeparator);
      }
    };
    this.writeEnumValue = (key, ...values) => {
      if (values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length > 0) {
          this.writeStringValue(key, rawValues.reduce((x, y) => `${x}, ${y}`));
        }
      }
    };
    this.writeCollectionOfEnumValues = (key, values) => {
      if (key && values && values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length > 0) {
          this.writeCollectionOfPrimitiveValues(key, rawValues);
        }
      }
    };
    this.getSerializedContent = () => {
      return this.convertStringToArrayBuffer(this.writer.join(``));
    };
    this.convertStringToArrayBuffer = (str) => {
      const encoder = new TextEncoder();
      const encodedString = encoder.encode(str);
      return encodedString.buffer;
    };
    this.writeAdditionalData = (additionalData) => {
      if (additionalData === void 0)
        return;
      for (const key in additionalData) {
        this.writeAnyValue(key, additionalData[key]);
      }
    };
    this.writeAnyValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value !== void 0) {
        const valueType = typeof value;
        if (valueType === "boolean") {
          this.writeBooleanValue(key, value);
        } else if (valueType === "string") {
          this.writeStringValue(key, value);
        } else if (value instanceof Date) {
          this.writeDateValue(key, value);
        } else if (value instanceof DateOnly) {
          this.writeDateOnlyValue(key, value);
        } else if (value instanceof TimeOnly) {
          this.writeTimeOnlyValue(key, value);
        } else if (value instanceof Duration) {
          this.writeDurationValue(key, value);
        } else if (valueType === "number") {
          this.writeNumberValue(key, value);
        } else {
          throw new Error(`encountered unknown ${value} value type during serialization ${valueType} for key ${key}`);
        }
      }
    };
  }
  writeByteArrayValue(key, value) {
    throw new Error("serialization of byt arrays is not supported with URI encoding");
  }
};
FormSerializationWriter.propertySeparator = `&`;

// node_modules/@microsoft/kiota-serialization-form/dist/es/src/browser/formParseNodeFactory.js
var FormParseNodeFactory = class {
  /**
   * Creates an instance of JsonParseNode.
   * @param backingStoreFactory - The factory to create backing stores.
   */
  constructor(backingStoreFactory) {
    this.backingStoreFactory = backingStoreFactory;
  }
  getValidContentType() {
    return "application/x-www-form-urlencoded";
  }
  getRootParseNode(contentType, content) {
    if (!content) {
      throw new Error("content cannot be undefined of empty");
    } else if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new FormParseNode(this.convertArrayBufferToString(content), this.backingStoreFactory);
  }
  convertArrayBufferToString(content) {
    const decoder = new TextDecoder();
    return decoder.decode(content);
  }
};

// node_modules/@microsoft/kiota-serialization-form/dist/es/src/formSerializationWriterFactory.js
var FormSerializationWriterFactory = class {
  getValidContentType() {
    return "application/x-www-form-urlencoded";
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new FormSerializationWriter();
  }
};

// node_modules/@microsoft/kiota-serialization-json/dist/es/src/jsonParseNode.js
var JsonParseNode = class _JsonParseNode {
  /**
   * Creates an instance of JsonParseNode.
   * @param _jsonNode - The JSON node to parse.
   * @param backingStoreFactory - The factory to create backing stores.
   */
  constructor(_jsonNode, backingStoreFactory) {
    this._jsonNode = _jsonNode;
    this.backingStoreFactory = backingStoreFactory;
    this.getStringValue = () => this.getStringValueFromRaw(this._jsonNode);
    this.getChildNode = (identifier) => this._jsonNode && typeof this._jsonNode === "object" && this._jsonNode[identifier] !== void 0 ? new _JsonParseNode(this._jsonNode[identifier], this.backingStoreFactory) : void 0;
    this.getBooleanValue = () => typeof this._jsonNode === "boolean" ? this._jsonNode : void 0;
    this.getNumberValue = () => typeof this._jsonNode === "number" ? this._jsonNode : void 0;
    this.getGuidValue = () => this.getGuidValueFromRaw(this._jsonNode);
    this.getDateValue = () => this.getDateValueFromRaw(this._jsonNode);
    this.getDateOnlyValue = () => this.getDateOnlyValueFromRaw(this._jsonNode);
    this.getTimeOnlyValue = () => this.getTimeOnlyValueFromRaw(this._jsonNode);
    this.getDurationValue = () => this.getDurationValueFromRaw(this._jsonNode);
    this.getCollectionOfPrimitiveValues = () => {
      if (!Array.isArray(this._jsonNode)) {
        return void 0;
      }
      return this._jsonNode.map((x) => {
        const typeOfX = typeof x;
        if (x === null) {
          return null;
        } else if (typeOfX === "boolean") {
          return x;
        } else if (typeOfX === "string") {
          return x;
        } else if (typeOfX === "number") {
          return x;
        } else if (x instanceof Date) {
          return this.getDateValueFromRaw(x);
        } else if (x instanceof DateOnly) {
          return this.getDateOnlyValueFromRaw(x);
        } else if (x instanceof TimeOnly) {
          return this.getTimeOnlyValueFromRaw(x);
        } else if (x instanceof Duration) {
          return this.getDurationValueFromRaw(x);
        } else {
          throw new Error(`encountered an unknown type during deserialization ${typeof x}`);
        }
      });
    };
    this.getCollectionOfObjectValues = (method) => {
      if (!Array.isArray(this._jsonNode)) {
        return void 0;
      }
      return this._jsonNode ? this._jsonNode.map((x) => new _JsonParseNode(x, this.backingStoreFactory)).map((x) => x.getObjectValue(method)) : void 0;
    };
    this.getObjectValue = (parsableFactory) => {
      const temp = {};
      if (isUntypedNode(parsableFactory(this)(temp))) {
        const valueType = typeof this._jsonNode;
        let value = temp;
        if (valueType === "boolean") {
          value = createUntypedBoolean(this._jsonNode);
        } else if (valueType === "string") {
          value = createUntypedString(this._jsonNode);
        } else if (valueType === "number") {
          value = createUntypedNumber(this._jsonNode);
        } else if (Array.isArray(this._jsonNode)) {
          const nodes = [];
          this._jsonNode.forEach((x) => {
            nodes.push(new _JsonParseNode(x, this.backingStoreFactory).getObjectValue(createUntypedNodeFromDiscriminatorValue));
          });
          value = createUntypedArray(nodes);
        } else if (this._jsonNode && valueType === "object") {
          const properties = {};
          Object.entries(this._jsonNode).forEach(([k, v]) => {
            properties[k] = new _JsonParseNode(v, this.backingStoreFactory).getObjectValue(createUntypedNodeFromDiscriminatorValue);
          });
          value = createUntypedObject(properties);
        } else if (!this._jsonNode) {
          value = createUntypedNull();
        }
        return value;
      }
      const enableBackingStore = isBackingStoreEnabled(parsableFactory(this)(temp));
      const objectValue = enableBackingStore && this.backingStoreFactory ? new Proxy(temp, createBackedModelProxyHandler(this.backingStoreFactory)) : temp;
      if (this.onBeforeAssignFieldValues) {
        this.onBeforeAssignFieldValues(objectValue);
      }
      this.assignFieldValues(objectValue, parsableFactory);
      if (this.onAfterAssignFieldValues) {
        this.onAfterAssignFieldValues(objectValue);
      }
      return objectValue;
    };
    this.assignFieldValues = (model, parsableFactory) => {
      const fields = parsableFactory(this)(model);
      if (!this._jsonNode)
        return;
      Object.entries(this._jsonNode).forEach(([k, v]) => {
        var _a;
        const deserializer = fields[k];
        if (deserializer) {
          deserializer(new _JsonParseNode(v, this.backingStoreFactory));
        } else {
          const modelDataHolder = model;
          (_a = modelDataHolder.additionalData) !== null && _a !== void 0 ? _a : modelDataHolder.additionalData = {};
          modelDataHolder.additionalData[k] = v;
        }
      });
    };
    this.getCollectionOfEnumValues = (type) => {
      if (Array.isArray(this._jsonNode)) {
        return this._jsonNode.map((x) => {
          if (typeof x === "string") {
            return getEnumValueFromStringValue(x, type);
          }
          return void 0;
        }).filter((value) => value !== void 0);
      }
      return [];
    };
    this.getEnumValue = (type) => {
      const rawValue = this.getStringValue();
      if (!rawValue) {
        return void 0;
      }
      return getEnumValueFromStringValue(rawValue, type);
    };
  }
  getStringValueFromRaw(value) {
    return typeof value === "string" ? value : void 0;
  }
  getGuidValueFromRaw(value) {
    return parseGuidString(this.getStringValueFromRaw(value));
  }
  getDateValueFromRaw(value) {
    if (value instanceof Date) {
      return new Date(value.getTime());
    }
    if (typeof value === "number") {
      return new Date(value);
    }
    if (typeof value === "string") {
      return new Date(value);
    }
    return void 0;
  }
  getDateOnlyValueFromRaw(value) {
    return value instanceof DateOnly ? value : DateOnly.parse(this.getStringValueFromRaw(value));
  }
  getTimeOnlyValueFromRaw(value) {
    return value instanceof TimeOnly ? value : TimeOnly.parse(this.getStringValueFromRaw(value));
  }
  getDurationValueFromRaw(value) {
    return value instanceof Duration ? value : Duration.parse(this.getStringValueFromRaw(value));
  }
  getByteArrayValue() {
    const strValue = this.getStringValue();
    if (strValue && strValue.length > 0) {
      return inNodeEnv() ? new Uint8Array(Buffer.from(strValue, "base64")).buffer : new TextEncoder().encode(strValue).buffer;
    }
    return void 0;
  }
};

// node_modules/@microsoft/kiota-serialization-json/dist/es/src/jsonSerializationWriter.js
var JsonSerializationWriter = class _JsonSerializationWriter {
  constructor() {
    this.writer = [];
    this.shouldWriteValueOrNull = (key, value) => {
      if (value === null) {
        this.writeNullValue(key);
        return false;
      }
      return true;
    };
    this.writeStringValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (this.shouldWriteValueOrNull(key, value)) {
        key && this.writePropertyName(key);
        this.writer.push(JSON.stringify(value));
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writePropertyName = (key) => {
      this.writer.push(`"${key}":`);
    };
    this.writeBooleanValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (this.shouldWriteValueOrNull(key, value)) {
        key && this.writePropertyName(key);
        this.writer.push(`${value}`);
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writeNumberValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (this.shouldWriteValueOrNull(key, value)) {
        key && this.writePropertyName(key);
        this.writer.push(`${value}`);
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writeGuidValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (this.shouldWriteValueOrNull(key, value)) {
        key && this.writePropertyName(key);
        this.writer.push(`"${value}"`);
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writeDateValue = (key, value) => this.writeStringValue(key, value === null ? null : value === null || value === void 0 ? void 0 : value.toISOString());
    this.writeDateOnlyValue = (key, value) => this.writeStringValue(key, value === null ? null : value === null || value === void 0 ? void 0 : value.toString());
    this.writeTimeOnlyValue = (key, value) => this.writeStringValue(key, value === null ? null : value === null || value === void 0 ? void 0 : value.toString());
    this.writeDurationValue = (key, value) => this.writeStringValue(key, value === null ? null : value === null || value === void 0 ? void 0 : value.toString());
    this.writeNullValue = (key) => {
      key && this.writePropertyName(key);
      this.writer.push(`null`);
      key && this.writer.push(_JsonSerializationWriter.propertySeparator);
    };
    this.writeCollectionOfPrimitiveValues = (key, values) => {
      if (!this.shouldWriteValueOrNull(key, values)) {
        return;
      }
      if (values) {
        key && this.writePropertyName(key);
        this.startArray();
        values.forEach((v, idx) => {
          this.writeAnyValue(void 0, v);
          idx + 1 < values.length && this.writer.push(_JsonSerializationWriter.propertySeparator);
        });
        this.endArray();
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.writeCollectionOfObjectValues = (key, values, serializerMethod) => {
      if (!this.shouldWriteValueOrNull(key, values)) {
        return;
      }
      if (values) {
        key && this.writePropertyName(key);
        this.startArray();
        values.forEach((v) => {
          this.writeObjectValue(void 0, v, serializerMethod);
          this.writer.push(_JsonSerializationWriter.propertySeparator);
        });
        if (values.length > 0) {
          this.writer.pop();
        }
        this.endArray();
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.startObject = () => {
      this.writer.push(`{`);
    };
    this.endObject = () => {
      this.writer.push(`}`);
    };
    this.startArray = () => {
      this.writer.push(`[`);
    };
    this.endArray = () => {
      this.writer.push(`]`);
    };
    this.removeLastSeparator = () => {
      if (this.writer.length > 0 && this.writer[this.writer.length - 1] === _JsonSerializationWriter.propertySeparator) {
        this.writer.pop();
      }
    };
    this.writeEnumValue = (key, ...values) => {
      if (values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length > 0) {
          this.writeStringValue(key, rawValues.reduce((x, y) => `${x}, ${y}`));
        }
      }
    };
    this.writeCollectionOfEnumValues = (key, values) => {
      if (values && values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length === 0) {
          return;
        }
        key && this.writePropertyName(key);
        this.writer.push(JSON.stringify(rawValues));
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      }
    };
    this.getSerializedContent = () => {
      return this.convertStringToArrayBuffer(this.writer.join(``));
    };
    this.convertStringToArrayBuffer = (str) => {
      const encoder = new TextEncoder();
      const encodedString = encoder.encode(str);
      return encodedString.buffer;
    };
    this.writeAdditionalData = (additionalData) => {
      if (additionalData === void 0)
        return;
      for (const key in additionalData) {
        if (Object.prototype.hasOwnProperty.call(additionalData, key)) {
          this.writeAnyValue(key, additionalData[key]);
        }
      }
    };
    this.writeNonParsableObjectValue = (key, value) => {
      if (key) {
        this.writePropertyName(key);
      }
      this.writer.push(JSON.stringify(value), _JsonSerializationWriter.propertySeparator);
    };
    this.writeAnyValue = (key, value) => {
      if (value === void 0) {
        return;
      }
      if (!this.shouldWriteValueOrNull(key, value)) {
        return;
      }
      const valueType = typeof value;
      if (valueType === "boolean") {
        this.writeBooleanValue(key, value);
      } else if (valueType === "string") {
        this.writeStringValue(key, value);
      } else if (value instanceof Date) {
        this.writeDateValue(key, value);
      } else if (value instanceof DateOnly) {
        this.writeDateOnlyValue(key, value);
      } else if (value instanceof TimeOnly) {
        this.writeTimeOnlyValue(key, value);
      } else if (value instanceof Duration) {
        this.writeDurationValue(key, value);
      } else if (valueType === "number") {
        this.writeNumberValue(key, value);
      } else if (Array.isArray(value)) {
        this.writeCollectionOfPrimitiveValues(key, value);
      } else if (valueType === "object") {
        this.writeNonParsableObjectValue(key, value);
      } else {
        throw new Error(`encountered unknown value type during serialization ${valueType}`);
      }
    };
  }
  writeByteArrayValue(key, value) {
    if (!value) {
      return;
    }
    const b64 = inNodeEnv() ? Buffer.from(value).toString("base64") : btoa(new TextDecoder().decode(value));
    this.writeStringValue(key, b64);
  }
  writeObjectValue(key, value, serializerMethod) {
    var _a, _b, _c;
    if (value === void 0) {
      return;
    }
    if (!this.shouldWriteValueOrNull(key, value)) {
      return;
    }
    if (isUntypedNode(value)) {
      const untypedNode = value;
      if (isUntypedBoolean(untypedNode)) {
        this.writeBooleanValue(key, untypedNode.getValue());
      } else if (isUntypedString(untypedNode)) {
        this.writeStringValue(key, untypedNode.getValue());
      } else if (isUntypedNull(untypedNode)) {
        this.writeNullValue(key);
      } else if (isUntypedNumber(untypedNode)) {
        this.writeNumberValue(key, untypedNode.getValue());
      } else if (isUntypedObject(untypedNode)) {
        const objectValue = untypedNode.getValue();
        if (objectValue === void 0)
          return;
        if (key)
          this.writePropertyName(key);
        this.startObject();
        for (const vKey in objectValue) {
          if (Object.prototype.hasOwnProperty.call(objectValue, vKey)) {
            this.writeObjectValue(vKey, objectValue[vKey], serializerMethod);
          }
        }
        this.removeLastSeparator();
        this.endObject();
        if (key)
          this.writer.push(_JsonSerializationWriter.propertySeparator);
      } else if (isUntypedArray(untypedNode)) {
        if (key) {
          this.writePropertyName(key);
        }
        const arrValue = untypedNode.getValue();
        this.startArray();
        arrValue.forEach((v, idx) => {
          this.writeObjectValue(void 0, v, serializerMethod);
          idx + 1 < arrValue.length && this.writer.push(_JsonSerializationWriter.propertySeparator);
        });
        this.removeLastSeparator();
        this.endArray();
        key && this.writer.push(_JsonSerializationWriter.propertySeparator);
      } else {
        this.writeAnyValue(key, untypedNode.getValue());
      }
      return;
    }
    if (key)
      this.writePropertyName(key);
    (_a = this.onBeforeObjectSerialization) === null || _a === void 0 ? void 0 : _a.call(this, value);
    this.startObject();
    (_b = this.onStartObjectSerialization) === null || _b === void 0 ? void 0 : _b.call(this, value, this);
    serializerMethod === null || serializerMethod === void 0 ? void 0 : serializerMethod(this, value);
    (_c = this.onAfterObjectSerialization) === null || _c === void 0 ? void 0 : _c.call(this, value);
    this.removeLastSeparator();
    this.endObject();
    if (key)
      this.writer.push(_JsonSerializationWriter.propertySeparator);
  }
};
JsonSerializationWriter.propertySeparator = `,`;

// node_modules/@microsoft/kiota-serialization-json/dist/es/src/browser/jsonParseNodeFactory.js
var JsonParseNodeFactory = class {
  /**
   * Creates an instance of JsonParseNode.
   * @param backingStoreFactory - The factory to create backing stores.
   */
  constructor(backingStoreFactory) {
    this.backingStoreFactory = backingStoreFactory;
  }
  getValidContentType() {
    return "application/json";
  }
  getRootParseNode(contentType, content) {
    if (!content) {
      throw new Error("content cannot be undefined of empty");
    } else if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new JsonParseNode(this.convertArrayBufferToJson(content), this.backingStoreFactory);
  }
  convertArrayBufferToJson(content) {
    const decoder = new TextDecoder();
    const contentAsStr = decoder.decode(content);
    return JSON.parse(contentAsStr);
  }
};

// node_modules/@microsoft/kiota-serialization-json/dist/es/src/jsonSerializationWriterFactory.js
var JsonSerializationWriterFactory = class {
  getValidContentType() {
    return "application/json";
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new JsonSerializationWriter();
  }
};

// node_modules/@microsoft/kiota-serialization-multipart/dist/es/src/multipartSerializationWriter.js
var MultipartSerializationWriter = class {
  constructor() {
    this.writer = new ArrayBuffer(0);
    this.writeStringValue = (key, value) => {
      if (key) {
        this.writeRawStringValue(key);
      }
      if (value) {
        if (key) {
          this.writeRawStringValue(": ");
        }
        this.writeRawStringValue(value);
      }
    };
    this.writeRawStringValue = (value) => {
      if (value) {
        this.writeByteArrayValue(void 0, new TextEncoder().encode(value).buffer);
      }
    };
    this.writeBooleanValue = (key, value) => {
      throw new Error(`serialization of boolean values is not supported with multipart`);
    };
    this.writeNumberValue = (key, value) => {
      throw new Error(`serialization of number values is not supported with multipart`);
    };
    this.writeGuidValue = (key, value) => {
      throw new Error(`serialization of guid values is not supported with multipart`);
    };
    this.writeDateValue = (key, value) => {
      throw new Error(`serialization of date values is not supported with multipart`);
    };
    this.writeDateOnlyValue = (key, value) => {
      throw new Error(`serialization of date only values is not supported with multipart`);
    };
    this.writeTimeOnlyValue = (key, value) => {
      throw new Error(`serialization of time only values is not supported with multipart`);
    };
    this.writeDurationValue = (key, value) => {
      throw new Error(`serialization of duration values is not supported with multipart`);
    };
    this.writeNullValue = (key) => {
      throw new Error(`serialization of null values is not supported with multipart`);
    };
    this.writeCollectionOfPrimitiveValues = (_key, _values) => {
      throw new Error(`serialization of collections is not supported with multipart`);
    };
    this.writeCollectionOfObjectValues = (_key, _values) => {
      throw new Error(`serialization of collections is not supported with multipart`);
    };
    this.writeObjectValue = (key, value, serializerMethod) => {
      var _a, _b, _c;
      if (!value) {
        throw new Error(`value cannot be undefined`);
      }
      if (!(value instanceof MultipartBody)) {
        throw new Error(`expected MultipartBody instance`);
      }
      if (!serializerMethod) {
        throw new Error(`serializer method cannot be undefined`);
      }
      (_a = this.onBeforeObjectSerialization) === null || _a === void 0 ? void 0 : _a.call(this, value);
      (_b = this.onStartObjectSerialization) === null || _b === void 0 ? void 0 : _b.call(this, value, this);
      serializerMethod(this, value);
      (_c = this.onAfterObjectSerialization) === null || _c === void 0 ? void 0 : _c.call(this, value);
    };
    this.writeEnumValue = (key, ...values) => {
      throw new Error(`serialization of enum values is not supported with multipart`);
    };
    this.writeCollectionOfEnumValues = (key, values) => {
      throw new Error(`serialization of collection of enum values is not supported with multipart`);
    };
    this.getSerializedContent = () => {
      return this.writer;
    };
    this.writeAdditionalData = (additionalData) => {
      throw new Error(`serialization of additional data is not supported with multipart`);
    };
  }
  writeByteArrayValue(key, value) {
    if (!value) {
      throw new Error("value cannot be undefined");
    }
    const previousValue = this.writer;
    this.writer = new ArrayBuffer(previousValue.byteLength + value.byteLength);
    const pipe = new Uint8Array(this.writer);
    pipe.set(new Uint8Array(previousValue), 0);
    pipe.set(new Uint8Array(value), previousValue.byteLength);
  }
};

// node_modules/@microsoft/kiota-serialization-multipart/dist/es/src/multipartSerializationWriterFactory.js
var MultipartSerializationWriterFactory = class {
  getValidContentType() {
    return "multipart/form-data";
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new MultipartSerializationWriter();
  }
};

// node_modules/@microsoft/kiota-serialization-text/dist/es/src/textParseNode.js
var TextParseNode = class _TextParseNode {
  constructor(text) {
    this.text = text;
    this.getStringValue = () => this.text;
    this.getChildNode = (identifier) => {
      throw new Error(_TextParseNode.noStructuredDataMessage);
    };
    this.getBooleanValue = () => {
      var _a;
      const value = (_a = this.getStringValue()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
      if (value === "true" || value === "1") {
        return true;
      } else if (value === "false" || value === "0") {
        return false;
      }
      return void 0;
    };
    this.getNumberValue = () => Number(this.text);
    this.getGuidValue = () => parseGuidString(this.text);
    this.getDateValue = () => new Date(Date.parse(this.text));
    this.getDateOnlyValue = () => DateOnly.parse(this.getStringValue());
    this.getTimeOnlyValue = () => TimeOnly.parse(this.getStringValue());
    this.getDurationValue = () => Duration.parse(this.getStringValue());
    this.getCollectionOfPrimitiveValues = () => {
      throw new Error(_TextParseNode.noStructuredDataMessage);
    };
    this.getCollectionOfEnumValues = (type) => {
      throw new Error(_TextParseNode.noStructuredDataMessage);
    };
    this.getEnumValue = (type) => {
      const rawValue = this.getStringValue();
      if (!rawValue) {
        return void 0;
      }
      return getEnumValueFromStringValue(rawValue, type);
    };
    if (this.text && this.text.length > 1 && this.text.startsWith('"') && this.text.endsWith('"')) {
      this.text = this.text.substring(1, this.text.length - 2);
    }
  }
  getByteArrayValue() {
    const strValue = this.getStringValue();
    if (strValue && strValue.length > 0) {
      return inNodeEnv() ? new Uint8Array(Buffer.from(strValue, "base64")).buffer : new TextEncoder().encode(strValue).buffer;
    }
    return void 0;
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  getCollectionOfObjectValues(parsableFactory) {
    throw new Error(_TextParseNode.noStructuredDataMessage);
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  getObjectValue(parsableFactory) {
    throw new Error(_TextParseNode.noStructuredDataMessage);
  }
};
TextParseNode.noStructuredDataMessage = "text does not support structured data";

// node_modules/@microsoft/kiota-serialization-text/dist/es/src/textSerializationWriter.js
var TextSerializationWriter = class _TextSerializationWriter {
  constructor() {
    this.writer = [];
    this.writeStringValue = (key, value) => {
      if (key || key !== "") {
        throw new Error(_TextSerializationWriter.noStructuredDataMessage);
      }
      if (value !== void 0) {
        if (this.writer.length > 0) {
          throw new Error("a value was already written for this serialization writer, text content only supports a single value");
        } else {
          const isNullValue = value === null;
          this.writer.push(isNullValue ? "null" : value);
        }
      }
    };
    this.writeBooleanValue = (key, value) => {
      if (value !== void 0) {
        this.writeStringValue(key, `${value}`);
      }
    };
    this.writeNumberValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `${value}`);
      }
    };
    this.writeGuidValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value}"`);
      }
    };
    this.writeDateValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value.toISOString()}"`);
      }
    };
    this.writeDateOnlyValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value.toString()}"`);
      }
    };
    this.writeTimeOnlyValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value.toString()}"`);
      }
    };
    this.writeDurationValue = (key, value) => {
      if (value === null) {
        return this.writeNullValue(key);
      }
      if (value) {
        this.writeStringValue(key, `"${value.toString()}"`);
      }
    };
    this.writeNullValue = (key) => {
      this.writeStringValue(key, `null`);
    };
    this.writeCollectionOfPrimitiveValues = (key, values) => {
      throw new Error(_TextSerializationWriter.noStructuredDataMessage);
    };
    this.writeCollectionOfObjectValues = (key, values, serializerMethod) => {
      throw new Error(_TextSerializationWriter.noStructuredDataMessage);
    };
    this.writeObjectValue = (key, value, serializerMethod) => {
      throw new Error(_TextSerializationWriter.noStructuredDataMessage);
    };
    this.writeEnumValue = (key, ...values) => {
      if (values.length > 0) {
        const rawValues = values.filter((x) => x !== void 0).map((x) => `${x}`);
        if (rawValues.length > 0) {
          this.writeStringValue(key, rawValues.reduce((x, y) => `${x},${y}`));
        }
      }
    };
    this.writeCollectionOfEnumValues = (key, values) => {
      this.writeEnumValue(key, values);
    };
    this.getSerializedContent = () => {
      return this.convertStringToArrayBuffer(this.writer.join(``));
    };
    this.convertStringToArrayBuffer = (str) => {
      const encoder = new TextEncoder();
      const encodedString = encoder.encode(str);
      return encodedString.buffer;
    };
    this.writeAdditionalData = (value) => {
      throw new Error(_TextSerializationWriter.noStructuredDataMessage);
    };
  }
  writeByteArrayValue(key, value) {
    if (!value) {
      return;
    }
    const b64 = inNodeEnv() ? Buffer.from(value).toString("base64") : btoa(new TextDecoder().decode(value));
    this.writeStringValue(key, b64);
  }
};
TextSerializationWriter.noStructuredDataMessage = "text does not support structured data";

// node_modules/@microsoft/kiota-serialization-text/dist/es/src/browser/textParseNodeFactory.js
var TextParseNodeFactory = class {
  /**
   * Creates an instance of TextParseNode.
   * @param backingStoreFactory - The factory to create backing stores.
   */
  constructor(backingStoreFactory) {
    this.backingStoreFactory = backingStoreFactory;
  }
  getValidContentType() {
    return "text/plain";
  }
  getRootParseNode(contentType, content) {
    if (!content) {
      throw new Error("content cannot be undefined of empty");
    } else if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new TextParseNode(this.convertArrayBufferToText(content));
  }
  convertArrayBufferToText(arrayBuffer) {
    const decoder = new TextDecoder();
    return decoder.decode(arrayBuffer);
  }
};

// node_modules/@microsoft/kiota-serialization-text/dist/es/src/textSerializationWriterFactory.js
var TextSerializationWriterFactory = class {
  getValidContentType() {
    return "text/plain";
  }
  getSerializationWriter(contentType) {
    if (!contentType) {
      throw new Error("content type cannot be undefined or empty");
    } else if (this.getValidContentType() !== contentType) {
      throw new Error(`expected a ${this.getValidContentType()} content type`);
    }
    return new TextSerializationWriter();
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/customFetchHandler.js
var CustomFetchHandler = class {
  constructor(customFetch) {
    this.customFetch = customFetch;
  }
  /**
   * @inheritdoc
   */
  execute(url, requestInit) {
    return __async(this, null, function* () {
      return yield this.customFetch(url, requestInit);
    });
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/httpClient.js
var HttpClient = class {
  /**
   *
   * Creates an instance of a HttpClient which contains the middlewares and fetch implementation for request execution.
   * @param customFetch - custom fetch function - a Fetch API implementation
   * @param middlewares - an array of Middleware handlers
   */
  constructor(customFetch, ...middlewares) {
    this.customFetch = customFetch;
    middlewares = (middlewares === null || middlewares === void 0 ? void 0 : middlewares.length) && middlewares[0] ? middlewares : MiddlewareFactory.getDefaultMiddlewares(customFetch);
    if (this.customFetch) {
      middlewares.push(new CustomFetchHandler(customFetch));
    }
    this.setMiddleware(...middlewares);
  }
  /**
   * Processes the middleware parameter passed to set this.middleware property
   * The calling function should validate if middleware is not undefined or not empty.
   * @param middleware - The middleware passed
   */
  setMiddleware(...middleware) {
    for (let i = 0; i < middleware.length - 1; i++) {
      middleware[i].next = middleware[i + 1];
    }
    this.middleware = middleware[0];
  }
  /**
   * Executes a request and returns a promise resolving the response.
   * @param url the request url.
   * @param requestInit the RequestInit object.
   * @param requestOptions the request options.
   * @returns the promise resolving the response.
   */
  executeFetch(url, requestInit, requestOptions) {
    return __async(this, null, function* () {
      if (this.middleware) {
        return yield this.middleware.execute(url, requestInit, requestOptions);
      } else if (this.customFetch) {
        return this.customFetch(url, requestInit);
      }
      throw new Error("Please provide middlewares or a custom fetch function to execute the request");
    });
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/observabilityOptions.js
var ObservabilityOptionKey = "ObservabilityOptionKey";
var ObservabilityOptionsImpl = class {
  constructor(originalOptions) {
    this._originalOptions = originalOptions !== null && originalOptions !== void 0 ? originalOptions : {};
  }
  getKey() {
    return ObservabilityOptionKey;
  }
  get includeEUIIAttributes() {
    return this._originalOptions.includeEUIIAttributes;
  }
  set includeEUIIAttributes(value) {
    this._originalOptions.includeEUIIAttributes = value;
  }
  getTracerInstrumentationName() {
    return "@microsoft/kiota-http-fetchlibrary";
  }
};
function getObservabilityOptionsFromRequest(requestOptions) {
  if (requestOptions) {
    const observabilityOptions = requestOptions[ObservabilityOptionKey];
    if (observabilityOptions instanceof ObservabilityOptionsImpl) {
      return observabilityOptions;
    }
  }
  return void 0;
}

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/fetchRequestAdapter.js
var FetchRequestAdapter = class _FetchRequestAdapter {
  getSerializationWriterFactory() {
    return this.serializationWriterFactory;
  }
  getParseNodeFactory() {
    return this.parseNodeFactory;
  }
  getBackingStoreFactory() {
    return this.backingStoreFactory;
  }
  /**
   * Instantiates a new request adapter.
   * @param authenticationProvider the authentication provider to use.
   * @param parseNodeFactory the parse node factory to deserialize responses.
   * @param serializationWriterFactory the serialization writer factory to use to serialize request bodies.
   * @param httpClient the http client to use to execute requests.
   * @param observabilityOptions the observability options to use.
   * @param backingStoreFactory the backing store factory to use.
   */
  constructor(authenticationProvider, parseNodeFactory = new ParseNodeFactoryRegistry(), serializationWriterFactory = new SerializationWriterFactoryRegistry(), httpClient = new HttpClient(), observabilityOptions = new ObservabilityOptionsImpl(), backingStoreFactory = new InMemoryBackingStoreFactory()) {
    this.authenticationProvider = authenticationProvider;
    this.parseNodeFactory = parseNodeFactory;
    this.serializationWriterFactory = serializationWriterFactory;
    this.httpClient = httpClient;
    this.backingStoreFactory = backingStoreFactory;
    this.baseUrl = "";
    this.getResponseContentType = (response) => {
      var _a;
      const header = (_a = response.headers.get("content-type")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
      if (!header)
        return void 0;
      const segments = header.split(";");
      if (segments.length === 0)
        return void 0;
      else
        return segments[0];
    };
    this.getResponseHandler = (response) => {
      const options = response.getRequestOptions();
      const responseHandlerOption = options[ResponseHandlerOptionKey];
      return responseHandlerOption === null || responseHandlerOption === void 0 ? void 0 : responseHandlerOption.responseHandler;
    };
    this.sendCollectionOfPrimitive = (requestInfo, responseType, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendCollectionOfPrimitive", (span) => __async(this, null, function* () {
        const response = yield this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return yield responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            yield this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            switch (responseType) {
              case "string":
              case "number":
              case "boolean":
              case "Date":
                const rootNode = yield this.getRootParseNode(response);
                return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan(`getCollectionOf${responseType}Value`, (deserializeSpan) => {
                  try {
                    span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, responseType);
                    if (responseType === "string") {
                      return rootNode.getCollectionOfPrimitiveValues();
                    } else if (responseType === "number") {
                      return rootNode.getCollectionOfPrimitiveValues();
                    } else if (responseType === "boolean") {
                      return rootNode.getCollectionOfPrimitiveValues();
                    } else if (responseType === "Date") {
                      return rootNode.getCollectionOfPrimitiveValues();
                    } else if (responseType === "Duration") {
                      return rootNode.getCollectionOfPrimitiveValues();
                    } else if (responseType === "DateOnly") {
                      return rootNode.getCollectionOfPrimitiveValues();
                    } else if (responseType === "TimeOnly") {
                      return rootNode.getCollectionOfPrimitiveValues();
                    } else {
                      throw new Error("unexpected type to deserialize");
                    }
                  } finally {
                    deserializeSpan.end();
                  }
                });
            }
          } finally {
            yield this.purgeResponseBody(response);
          }
        }
      }));
    };
    this.sendCollection = (requestInfo, deserialization, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendCollection", (span) => __async(this, null, function* () {
        const response = yield this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return yield responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            yield this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            const rootNode = yield this.getRootParseNode(response);
            return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getCollectionOfObjectValues", (deserializeSpan) => {
              try {
                const result = rootNode.getCollectionOfObjectValues(deserialization);
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, "object[]");
                return result;
              } finally {
                deserializeSpan.end();
              }
            });
          } finally {
            yield this.purgeResponseBody(response);
          }
        }
      }));
    };
    this.startTracingSpan = (requestInfo, methodName, callback) => {
      var _a;
      const urlTemplate = decodeURIComponent((_a = requestInfo.urlTemplate) !== null && _a !== void 0 ? _a : "");
      const telemetryPathValue = urlTemplate.replace(/\{\?[^}]+\}/gi, "");
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan(`${methodName} - ${telemetryPathValue}`, (span) => __async(this, null, function* () {
        try {
          span.setAttribute("url.uri_template", urlTemplate);
          return yield callback(span);
        } finally {
          span.end();
        }
      }));
    };
    this.send = (requestInfo, deserializer, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "send", (span) => __async(this, null, function* () {
        const response = yield this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return yield responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            yield this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            const rootNode = yield this.getRootParseNode(response);
            return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getObjectValue", (deserializeSpan) => {
              try {
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, "object");
                const result = rootNode.getObjectValue(deserializer);
                return result;
              } finally {
                deserializeSpan.end();
              }
            });
          } finally {
            yield this.purgeResponseBody(response);
          }
        }
      }));
    };
    this.sendPrimitive = (requestInfo, responseType, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendPrimitive", (span) => __async(this, null, function* () {
        const response = yield this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return yield responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            yield this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            switch (responseType) {
              case "ArrayBuffer":
                if (!response.body) {
                  return void 0;
                }
                return yield response.arrayBuffer();
              case "string":
              case "number":
              case "boolean":
              case "Date":
                const rootNode = yield this.getRootParseNode(response);
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, responseType);
                return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan(`get${responseType}Value`, (deserializeSpan) => {
                  try {
                    if (responseType === "string") {
                      return rootNode.getStringValue();
                    } else if (responseType === "number") {
                      return rootNode.getNumberValue();
                    } else if (responseType === "boolean") {
                      return rootNode.getBooleanValue();
                    } else if (responseType === "Date") {
                      return rootNode.getDateValue();
                    } else if (responseType === "Duration") {
                      return rootNode.getDurationValue();
                    } else if (responseType === "DateOnly") {
                      return rootNode.getDateOnlyValue();
                    } else if (responseType === "TimeOnly") {
                      return rootNode.getTimeOnlyValue();
                    } else {
                      throw new Error("unexpected type to deserialize");
                    }
                  } finally {
                    deserializeSpan.end();
                  }
                });
            }
          } finally {
            yield this.purgeResponseBody(response);
          }
        }
      }));
    };
    this.sendNoResponseContent = (requestInfo, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendNoResponseContent", (span) => __async(this, null, function* () {
        const response = yield this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return yield responseHandler.handleResponse(response, errorMappings);
        }
        try {
          yield this.throwIfFailedResponse(response, errorMappings, span);
        } finally {
          yield this.purgeResponseBody(response);
        }
      }));
    };
    this.sendEnum = (requestInfo, enumObject, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendEnum", (span) => __async(this, null, function* () {
        const response = yield this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return yield responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            yield this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            const rootNode = yield this.getRootParseNode(response);
            return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getEnumValue", (deserializeSpan) => {
              try {
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, "enum");
                const result = rootNode.getEnumValue(enumObject);
                return result;
              } finally {
                deserializeSpan.end();
              }
            });
          } finally {
            yield this.purgeResponseBody(response);
          }
        }
      }));
    };
    this.sendCollectionOfEnum = (requestInfo, enumObject, errorMappings) => {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      return this.startTracingSpan(requestInfo, "sendCollectionOfEnum", (span) => __async(this, null, function* () {
        const response = yield this.getHttpResponseMessage(requestInfo, span);
        const responseHandler = this.getResponseHandler(requestInfo);
        if (responseHandler) {
          span.addEvent(_FetchRequestAdapter.eventResponseHandlerInvokedKey);
          return yield responseHandler.handleResponse(response, errorMappings);
        } else {
          try {
            yield this.throwIfFailedResponse(response, errorMappings, span);
            if (this.shouldReturnUndefined(response))
              return void 0;
            const rootNode = yield this.getRootParseNode(response);
            return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getCollectionOfEnumValues", (deserializeSpan) => {
              try {
                const result = rootNode.getCollectionOfEnumValues(enumObject);
                span.setAttribute(_FetchRequestAdapter.responseTypeAttributeKey, "enum[]");
                return result;
              } finally {
                deserializeSpan.end();
              }
            });
          } finally {
            yield this.purgeResponseBody(response);
          }
        }
      }));
    };
    this.enableBackingStore = (backingStoreFactory2) => {
      if (this.parseNodeFactory instanceof ParseNodeFactoryRegistry) {
        this.parseNodeFactory = enableBackingStoreForParseNodeFactory(this.parseNodeFactory, this.parseNodeFactory);
      } else {
        throw new Error("parseNodeFactory is not a ParseNodeFactoryRegistry");
      }
      if (this.serializationWriterFactory instanceof SerializationWriterFactoryRegistry && this.parseNodeFactory instanceof ParseNodeFactoryRegistry) {
        this.serializationWriterFactory = enableBackingStoreForSerializationWriterFactory(this.serializationWriterFactory, this.parseNodeFactory, this.serializationWriterFactory);
      } else {
        throw new Error("serializationWriterFactory is not a SerializationWriterFactoryRegistry or parseNodeFactory is not a ParseNodeFactoryRegistry");
      }
      if (!this.serializationWriterFactory || !this.parseNodeFactory)
        throw new Error("unable to enable backing store");
      if (backingStoreFactory2) {
        this.backingStoreFactory = backingStoreFactory2;
      }
    };
    this.getRootParseNode = (response) => {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getRootParseNode", (span) => __async(this, null, function* () {
        try {
          const payload = yield response.arrayBuffer();
          const responseContentType = this.getResponseContentType(response);
          if (!responseContentType)
            throw new Error("no response content type found for deserialization");
          return this.parseNodeFactory.getRootParseNode(responseContentType, payload);
        } finally {
          span.end();
        }
      }));
    };
    this.shouldReturnUndefined = (response) => {
      return response.status === 204 || response.status === 304 || !response.body;
    };
    this.purgeResponseBody = (response) => __async(this, null, function* () {
      if (!response.bodyUsed && response.body) {
        yield response.arrayBuffer();
      }
    });
    this.throwIfFailedResponse = (response, errorMappings, spanForAttributes) => {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("throwIfFailedResponse", (span) => __async(this, null, function* () {
        var _a, _b, _c;
        try {
          if (response.ok || response.status >= 300 && response.status < 400 && !response.headers.has(_FetchRequestAdapter.locationHeaderName))
            return;
          spanForAttributes.setStatus({
            code: SpanStatusCode.ERROR,
            message: "received_error_response"
          });
          const statusCode = response.status;
          const responseHeaders = {};
          response.headers.forEach((value, key) => {
            responseHeaders[key] = value.split(",");
          });
          const factory = errorMappings ? (_c = (_b = (_a = errorMappings[statusCode]) !== null && _a !== void 0 ? _a : statusCode >= 400 && statusCode < 500 ? errorMappings._4XX : void 0) !== null && _b !== void 0 ? _b : statusCode >= 500 && statusCode < 600 ? errorMappings._5XX : void 0) !== null && _c !== void 0 ? _c : errorMappings.XXX : void 0;
          if (!factory) {
            spanForAttributes.setAttribute(_FetchRequestAdapter.errorMappingFoundAttributeName, false);
            const error = new DefaultApiError("the server returned an unexpected status code and no error class is registered for this code " + statusCode);
            error.responseStatusCode = statusCode;
            error.responseHeaders = responseHeaders;
            spanForAttributes.recordException(error);
            throw error;
          }
          spanForAttributes.setAttribute(_FetchRequestAdapter.errorMappingFoundAttributeName, true);
          const rootNode = yield this.getRootParseNode(response);
          let deserializedError = trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getObjectValue", (deserializeSpan) => {
            try {
              return rootNode.getObjectValue(factory);
            } finally {
              deserializeSpan.end();
            }
          });
          spanForAttributes.setAttribute(_FetchRequestAdapter.errorBodyFoundAttributeName, !!deserializedError);
          if (!deserializedError)
            deserializedError = new DefaultApiError("unexpected error type" + typeof deserializedError);
          const errorObject = deserializedError;
          errorObject.responseStatusCode = statusCode;
          errorObject.responseHeaders = responseHeaders;
          spanForAttributes.recordException(errorObject);
          throw errorObject;
        } finally {
          span.end();
        }
      }));
    };
    this.getHttpResponseMessage = (requestInfo, spanForAttributes, claims) => {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getHttpResponseMessage", (span) => __async(this, null, function* () {
        try {
          if (!requestInfo) {
            throw new Error("requestInfo cannot be null");
          }
          this.setBaseUrlForRequestInformation(requestInfo);
          const additionalContext = {};
          if (claims) {
            additionalContext.claims = claims;
          }
          yield this.authenticationProvider.authenticateRequest(requestInfo, additionalContext);
          const request = yield this.getRequestFromRequestInformation(requestInfo, spanForAttributes);
          if (this.observabilityOptions) {
            requestInfo.addRequestOptions([this.observabilityOptions]);
          }
          let response = yield this.httpClient.executeFetch(requestInfo.URL, request, requestInfo.getRequestOptions());
          response = yield this.retryCAEResponseIfRequired(requestInfo, response, spanForAttributes, claims);
          if (response) {
            const responseContentLength = response.headers.get("Content-Length");
            if (responseContentLength) {
              spanForAttributes.setAttribute("http.response.body.size", parseInt(responseContentLength, 10));
            }
            const responseContentType = response.headers.get("Content-Type");
            if (responseContentType) {
              spanForAttributes.setAttribute("http.response.header.content-type", responseContentType);
            }
            spanForAttributes.setAttribute("http.response.status_code", response.status);
          }
          return response;
        } finally {
          span.end();
        }
      }));
    };
    this.retryCAEResponseIfRequired = (requestInfo, response, spanForAttributes, claims) => __async(this, null, function* () {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("retryCAEResponseIfRequired", (span) => __async(this, null, function* () {
        try {
          const responseClaims = this.getClaimsFromResponse(response, claims);
          if (responseClaims) {
            span.addEvent(_FetchRequestAdapter.authenticateChallengedEventKey);
            spanForAttributes.setAttribute("http.request.resend_count", 1);
            yield this.purgeResponseBody(response);
            return yield this.getHttpResponseMessage(requestInfo, spanForAttributes, responseClaims);
          }
          return response;
        } finally {
          span.end();
        }
      }));
    });
    this.getClaimsFromResponse = (response, claims) => {
      if (response.status === 401 && !claims) {
        const rawAuthenticateHeader = response.headers.get("WWW-Authenticate");
        if (rawAuthenticateHeader && /^Bearer /gi.test(rawAuthenticateHeader)) {
          const rawParameters = rawAuthenticateHeader.replace(/^Bearer /gi, "").split(",");
          for (const rawParameter of rawParameters) {
            const trimmedParameter = rawParameter.trim();
            if (/claims="[^"]+"/gi.test(trimmedParameter)) {
              return trimmedParameter.replace(/claims="([^"]+)"/gi, "$1");
            }
          }
        }
      }
      return void 0;
    };
    this.setBaseUrlForRequestInformation = (requestInfo) => {
      requestInfo.pathParameters.baseurl = this.baseUrl;
    };
    this.getRequestFromRequestInformation = (requestInfo, spanForAttributes) => {
      return trace.getTracer(this.observabilityOptions.getTracerInstrumentationName()).startActiveSpan("getRequestFromRequestInformation", (span) => __async(this, null, function* () {
        var _a, _b;
        try {
          const method = (_a = requestInfo.httpMethod) === null || _a === void 0 ? void 0 : _a.toString();
          const uri = requestInfo.URL;
          spanForAttributes.setAttribute("http.request.method", method !== null && method !== void 0 ? method : "");
          const uriContainsScheme = uri.includes("://");
          const schemeSplatUri = uri.split("://");
          if (uriContainsScheme) {
            spanForAttributes.setAttribute("server.address", schemeSplatUri[0]);
          }
          const uriWithoutScheme = uriContainsScheme ? schemeSplatUri[1] : uri;
          spanForAttributes.setAttribute("url.scheme", uriWithoutScheme.split("/")[0]);
          if (this.observabilityOptions.includeEUIIAttributes) {
            spanForAttributes.setAttribute("url.full", decodeURIComponent(uri));
          }
          const requestContentLength = requestInfo.headers.tryGetValue("Content-Length");
          if (requestContentLength) {
            spanForAttributes.setAttribute("http.response.body.size", parseInt(requestContentLength[0], 10));
          }
          const requestContentType = requestInfo.headers.tryGetValue("Content-Type");
          if (requestContentType) {
            spanForAttributes.setAttribute("http.request.header.content-type", requestContentType);
          }
          const headers = {};
          (_b = requestInfo.headers) === null || _b === void 0 ? void 0 : _b.forEach((_, key) => {
            headers[key.toString().toLocaleLowerCase()] = this.foldHeaderValue(requestInfo.headers.tryGetValue(key));
          });
          const request = {
            method,
            headers,
            body: requestInfo.content
          };
          return request;
        } finally {
          span.end();
        }
      }));
    };
    this.foldHeaderValue = (value) => {
      if (!value || value.length < 1) {
        return "";
      } else if (value.length === 1) {
        return value[0];
      } else {
        return value.reduce((acc, val) => acc + val, ",");
      }
    };
    this.convertToNativeRequest = (requestInfo) => __async(this, null, function* () {
      if (!requestInfo) {
        throw new Error("requestInfo cannot be null");
      }
      yield this.authenticationProvider.authenticateRequest(requestInfo, void 0);
      return this.startTracingSpan(requestInfo, "convertToNativeRequest", (span) => __async(this, null, function* () {
        const request = yield this.getRequestFromRequestInformation(requestInfo, span);
        return request;
      }));
    });
    if (!authenticationProvider) {
      throw new Error("authentication provider cannot be null");
    }
    if (!parseNodeFactory) {
      throw new Error("parse node factory cannot be null");
    }
    if (!serializationWriterFactory) {
      throw new Error("serialization writer factory cannot be null");
    }
    if (!httpClient) {
      throw new Error("http client cannot be null");
    }
    if (!observabilityOptions) {
      throw new Error("observability options cannot be null");
    } else {
      this.observabilityOptions = new ObservabilityOptionsImpl(observabilityOptions);
    }
  }
};
FetchRequestAdapter.responseTypeAttributeKey = "com.microsoft.kiota.response.type";
FetchRequestAdapter.eventResponseHandlerInvokedKey = "com.microsoft.kiota.response_handler_invoked";
FetchRequestAdapter.errorMappingFoundAttributeName = "com.microsoft.kiota.error.mapping_found";
FetchRequestAdapter.errorBodyFoundAttributeName = "com.microsoft.kiota.error.body_found";
FetchRequestAdapter.locationHeaderName = "Location";
FetchRequestAdapter.authenticateChallengedEventKey = "com.microsoft.kiota.authenticate_challenge_received";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/utils/headersUtil.js
var getRequestHeader = (options, key) => {
  if (options && options.headers) {
    return options.headers[key];
  }
  return void 0;
};
var setRequestHeader = (options, key, value) => {
  if (options) {
    if (!options.headers) {
      options.headers = {};
    }
    options.headers[key] = value;
  }
};
var deleteRequestHeader = (options, key) => {
  if (options) {
    if (!options.headers) {
      options.headers = {};
    }
    delete options.headers[key];
  }
};
var appendRequestHeader = (options, key, value, separator = ", ") => {
  if (options) {
    if (!options.headers) {
      options.headers = {};
    }
    if (!options.headers[key]) {
      options.headers[key] = value;
    } else {
      options.headers[key] += `${separator}${value}`;
    }
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/authorizationHandler.js
var AuthorizationHandler = class _AuthorizationHandler {
  constructor(authenticationProvider) {
    this.authenticationProvider = authenticationProvider;
    this.getClaimsFromResponse = (response, claims) => {
      if (response.status === 401 && !claims) {
        const rawAuthenticateHeader = response.headers.get("WWW-Authenticate");
        if (rawAuthenticateHeader && /^Bearer /gi.test(rawAuthenticateHeader)) {
          const rawParameters = rawAuthenticateHeader.replace(/^Bearer /gi, "").split(",");
          for (const rawParameter of rawParameters) {
            const trimmedParameter = rawParameter.trim();
            if (/claims="[^"]+"/gi.test(trimmedParameter)) {
              return trimmedParameter.replace(/claims="([^"]+)"/gi, "$1");
            }
          }
        }
      }
      return void 0;
    };
    if (!authenticationProvider) {
      throw new Error("authenticationProvider cannot be undefined");
    }
  }
  execute(url, requestInit, requestOptions) {
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("authorizationHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.authorization.enable", true);
          return this.executeInternal(url, requestInit, requestOptions, span);
        } finally {
          span.end();
        }
      });
    }
    return this.executeInternal(url, requestInit, requestOptions, void 0);
  }
  executeInternal(url, fetchRequestInit, requestOptions, span) {
    return __async(this, null, function* () {
      var _a, _b;
      if (this.authorizationIsPresent(fetchRequestInit)) {
        span === null || span === void 0 ? void 0 : span.setAttribute("com.microsoft.kiota.handler.authorization.token_present", true);
        return yield this.next.execute(url, fetchRequestInit, requestOptions);
      }
      const token = yield this.authenticateRequest(url);
      setRequestHeader(fetchRequestInit, _AuthorizationHandler.AUTHORIZATION_HEADER, `Bearer ${token}`);
      const response = yield (_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(url, fetchRequestInit, requestOptions);
      if (!response) {
        throw new Error("Response is undefined");
      }
      if (response.status !== 401) {
        return response;
      }
      const claims = this.getClaimsFromResponse(response);
      if (!claims) {
        return response;
      }
      span === null || span === void 0 ? void 0 : span.addEvent("com.microsoft.kiota.handler.authorization.challenge_received");
      const claimsToken = yield this.authenticateRequest(url, claims);
      setRequestHeader(fetchRequestInit, _AuthorizationHandler.AUTHORIZATION_HEADER, `Bearer ${claimsToken}`);
      span === null || span === void 0 ? void 0 : span.setAttribute("http.request.resend_count", 1);
      const retryResponse = yield (_b = this.next) === null || _b === void 0 ? void 0 : _b.execute(url, fetchRequestInit, requestOptions);
      if (!retryResponse) {
        throw new Error("Response is undefined");
      }
      return retryResponse;
    });
  }
  authorizationIsPresent(request) {
    if (!request) {
      return false;
    }
    const authorizationHeader = getRequestHeader(request, _AuthorizationHandler.AUTHORIZATION_HEADER);
    return authorizationHeader !== void 0 && authorizationHeader !== null;
  }
  authenticateRequest(url, claims) {
    return __async(this, null, function* () {
      const additionalAuthenticationContext = {};
      if (claims) {
        additionalAuthenticationContext.claims = claims;
      }
      return yield this.authenticationProvider.accessTokenProvider.getAuthorizationToken(url, additionalAuthenticationContext);
    });
  }
};
AuthorizationHandler.AUTHORIZATION_HEADER = "Authorization";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/ChaosHandlerData.js
var methodStatusCode = {
  GET: [429, 500, 502, 503, 504],
  POST: [429, 500, 502, 503, 504, 507],
  PUT: [429, 500, 502, 503, 504, 507],
  PATCH: [429, 500, 502, 503, 504],
  DELETE: [429, 500, 502, 503, 504, 507]
};
var httpStatusCode = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  510: "Not Extended",
  511: "Network Authentication Required"
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/chaosStrategy.js
var ChaosStrategy;
(function(ChaosStrategy2) {
  ChaosStrategy2[ChaosStrategy2["MANUAL"] = 0] = "MANUAL";
  ChaosStrategy2[ChaosStrategy2["RANDOM"] = 1] = "RANDOM";
})(ChaosStrategy || (ChaosStrategy = {}));

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/chaosHandler.js
var ChaosHandler = class _ChaosHandler {
  /**
   *
   * To create an instance of ChaosHandler
   * @param [options] - The chaos handler options instance
   * @param manualMap - The Map passed by user containing url-statusCode info
   */
  constructor(options, manualMap) {
    this.options = {
      chaosStrategy: ChaosStrategy.RANDOM,
      statusMessage: "A random status message",
      chaosPercentage: 10
    };
    const chaosOptions = Object.assign(this.options, options);
    if (chaosOptions.chaosPercentage > 100 || chaosOptions.chaosPercentage < 0) {
      throw new Error("Chaos Percentage must be set to a value between 0 and 100.");
    }
    this.options = chaosOptions;
    this.manualMap = manualMap !== null && manualMap !== void 0 ? manualMap : /* @__PURE__ */ new Map();
  }
  /**
   * Fetches a random status code for the RANDOM mode from the predefined array
   * @param requestMethod - the API method for the request
   * @returns a random status code from a given set of status codes
   */
  generateRandomStatusCode(requestMethod) {
    const statusCodeArray = methodStatusCode[requestMethod];
    return statusCodeArray[Math.floor(Math.random() * statusCodeArray.length)];
  }
  /**
   * Strips out the host url and returns the relative url only
   * @param chaosHandlerOptions - The ChaosHandlerOptions object
   * @param urlMethod - the complete URL
   * @returns the string as relative URL
   */
  getRelativeURL(chaosHandlerOptions, urlMethod) {
    const baseUrl = chaosHandlerOptions.baseUrl;
    if (baseUrl === void 0) {
      return urlMethod;
    }
    return urlMethod.replace(baseUrl, "").trim();
  }
  /**
   * Gets a status code from the options or a randomly generated status code
   * @param chaosHandlerOptions - The ChaosHandlerOptions object
   * @param requestURL - the URL for the request
   * @param requestMethod - the API method for the request
   * @returns generated statusCode
   */
  getStatusCode(chaosHandlerOptions, requestURL, requestMethod) {
    if (chaosHandlerOptions.chaosStrategy === ChaosStrategy.MANUAL) {
      if (chaosHandlerOptions.statusCode !== void 0) {
        return chaosHandlerOptions.statusCode;
      } else {
        const relativeURL = this.getRelativeURL(chaosHandlerOptions, requestURL);
        const definedResponses = this.manualMap.get(relativeURL);
        if (definedResponses !== void 0) {
          const mapCode = definedResponses.get(requestMethod);
          if (mapCode !== void 0) {
            return mapCode;
          }
        } else {
          this.manualMap.forEach((value, key) => {
            var _a;
            const regexURL = new RegExp(key + "$");
            if (regexURL.test(relativeURL)) {
              const responseCode = (_a = this.manualMap.get(key)) === null || _a === void 0 ? void 0 : _a.get(requestMethod);
              if (responseCode !== void 0) {
                return responseCode;
              }
            }
          });
        }
      }
    }
    return this.generateRandomStatusCode(requestMethod);
  }
  /**
   * Generates a respondy for the chaoe response
   * @param chaosHandlerOptions - The ChaosHandlerOptions object
   * @param statusCode - the status code for the response
   * @returns the response body
   */
  createResponseBody(chaosHandlerOptions, statusCode) {
    if (chaosHandlerOptions.responseBody) {
      return chaosHandlerOptions.responseBody;
    }
    let body;
    if (statusCode >= 400) {
      const codeMessage = httpStatusCode[statusCode];
      const errMessage = chaosHandlerOptions.statusMessage;
      body = {
        error: {
          code: codeMessage,
          message: errMessage
        }
      };
    } else {
      body = {};
    }
    return body;
  }
  /**
   * Composes a new chaotic response code with the configured parameters
   * @param url The url of the request
   * @param fetchRequestInit The fetch request init object
   * @returns a response object with the configured parameters
   */
  createChaosResponse(url, fetchRequestInit) {
    var _a;
    if (fetchRequestInit.method === void 0) {
      throw new Error("Request method must be defined.");
    }
    const requestMethod = fetchRequestInit.method;
    const statusCode = this.getStatusCode(this.options, url, requestMethod);
    const responseBody = this.createResponseBody(this.options, statusCode);
    const stringBody = typeof responseBody === "string" ? responseBody : JSON.stringify(responseBody);
    return {
      url,
      body: stringBody,
      status: statusCode,
      statusText: this.options.statusMessage,
      headers: (_a = this.options.headers) !== null && _a !== void 0 ? _a : {}
    };
  }
  execute(url, requestInit, requestOptions) {
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("chaosHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.chaos.enable", true);
          return this.runChaos(url, requestInit, requestOptions);
        } finally {
          span.end();
        }
      });
    }
    return this.runChaos(url, requestInit, requestOptions);
  }
  runChaos(url, requestInit, requestOptions, span) {
    if (Math.floor(Math.random() * 100) < this.options.chaosPercentage) {
      span === null || span === void 0 ? void 0 : span.addEvent(_ChaosHandler.chaosHandlerTriggeredEventKey);
      return Promise.resolve(this.createChaosResponse(url, requestInit));
    } else {
      if (!this.next) {
        throw new Error("Please set the next middleware to continue the request");
      }
      return this.next.execute(url, requestInit, requestOptions);
    }
  }
};
ChaosHandler.chaosHandlerTriggeredEventKey = "com.microsoft.kiota.chaos_handler_triggered";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/compressionHandlerOptions.js
var CompressionHandlerOptionsKey = "CompressionHandlerOptionsKey";
var CompressionHandlerOptions = class {
  /**
   * Create a new instance of the CompressionHandlerOptions class
   * @param config the configuration to apply to the compression handler options.
   */
  constructor(config) {
    var _a;
    this._enableCompression = (_a = config === null || config === void 0 ? void 0 : config.enableCompression) !== null && _a !== void 0 ? _a : true;
  }
  /**
   * @inheritdoc
   */
  getKey() {
    return CompressionHandlerOptionsKey;
  }
  /**
   * Returns whether the compression handler is enabled or not.
   * @returns whether the compression handler is enabled or not.
   */
  get ShouldCompress() {
    return this._enableCompression;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/compressionHandler.js
var CompressionHandler = class _CompressionHandler {
  /**
   * Creates a new instance of the CompressionHandler class
   * @param handlerOptions The options for the compression handler.
   * @returns An instance of the CompressionHandler class
   */
  constructor(handlerOptions = new CompressionHandlerOptions()) {
    this.handlerOptions = handlerOptions;
    if (!handlerOptions) {
      throw new Error("handlerOptions cannot be undefined");
    }
  }
  /**
   * @inheritdoc
   */
  execute(url, requestInit, requestOptions) {
    let currentOptions = this.handlerOptions;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[CompressionHandlerOptionsKey]) {
      currentOptions = requestOptions[CompressionHandlerOptionsKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("compressionHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.compression.enable", currentOptions.ShouldCompress);
          return this.executeInternal(currentOptions, url, requestInit, requestOptions, span);
        } finally {
          span.end();
        }
      });
    }
    return this.executeInternal(currentOptions, url, requestInit, requestOptions);
  }
  executeInternal(options, url, requestInit, requestOptions, span) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d;
      if (!options.ShouldCompress || this.contentRangeBytesIsPresent(requestInit.headers) || this.contentEncodingIsPresent(requestInit.headers) || requestInit.body === null || requestInit.body === void 0) {
        return (_b = (_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(url, requestInit, requestOptions)) !== null && _b !== void 0 ? _b : Promise.reject(new Error("Response is undefined"));
      }
      span === null || span === void 0 ? void 0 : span.setAttribute("http.request.body.compressed", true);
      const unCompressedBody = requestInit.body;
      const unCompressedBodySize = this.getRequestBodySize(unCompressedBody);
      const compressedBody = yield this.compressRequestBody(unCompressedBody);
      setRequestHeader(requestInit, _CompressionHandler.CONTENT_ENCODING_HEADER, "gzip");
      requestInit.body = compressedBody.compressedBody;
      span === null || span === void 0 ? void 0 : span.setAttribute("http.request.body.size", compressedBody.size);
      let response = yield (_c = this.next) === null || _c === void 0 ? void 0 : _c.execute(url, requestInit, requestOptions);
      if (!response) {
        throw new Error("Response is undefined");
      }
      if (response.status === 415) {
        deleteRequestHeader(requestInit, _CompressionHandler.CONTENT_ENCODING_HEADER);
        requestInit.body = unCompressedBody;
        span === null || span === void 0 ? void 0 : span.setAttribute("http.request.body.compressed", false);
        span === null || span === void 0 ? void 0 : span.setAttribute("http.request.body.size", unCompressedBodySize);
        response = yield (_d = this.next) === null || _d === void 0 ? void 0 : _d.execute(url, requestInit, requestOptions);
      }
      return response !== void 0 && response !== null ? Promise.resolve(response) : Promise.reject(new Error("Response is undefined"));
    });
  }
  contentRangeBytesIsPresent(header) {
    var _a;
    if (!header) {
      return false;
    }
    const contentRange = getRequestHeader(header, _CompressionHandler.CONTENT_RANGE_HEADER);
    return (_a = contentRange === null || contentRange === void 0 ? void 0 : contentRange.toLowerCase().includes("bytes")) !== null && _a !== void 0 ? _a : false;
  }
  contentEncodingIsPresent(header) {
    if (!header) {
      return false;
    }
    return getRequestHeader(header, _CompressionHandler.CONTENT_ENCODING_HEADER) !== void 0;
  }
  getRequestBodySize(body) {
    if (!body) {
      return 0;
    }
    if (typeof body === "string") {
      return body.length;
    }
    if (body instanceof Blob) {
      return body.size;
    }
    if (body instanceof ArrayBuffer) {
      return body.byteLength;
    }
    if (ArrayBuffer.isView(body)) {
      return body.byteLength;
    }
    if (inNodeEnv() && Buffer.isBuffer(body)) {
      return body.byteLength;
    }
    throw new Error("Unsupported body type");
  }
  readBodyAsBytes(body) {
    if (!body) {
      return { stream: new ReadableStream(), size: 0 };
    }
    const uint8ArrayToStream = (uint8Array) => {
      return new ReadableStream({
        start(controller) {
          controller.enqueue(uint8Array);
          controller.close();
        }
      });
    };
    if (typeof body === "string") {
      return { stream: uint8ArrayToStream(new TextEncoder().encode(body)), size: body.length };
    }
    if (body instanceof Blob) {
      return { stream: body.stream(), size: body.size };
    }
    if (body instanceof ArrayBuffer) {
      return { stream: uint8ArrayToStream(new Uint8Array(body)), size: body.byteLength };
    }
    if (ArrayBuffer.isView(body)) {
      return { stream: uint8ArrayToStream(new Uint8Array(body.buffer, body.byteOffset, body.byteLength)), size: body.byteLength };
    }
    throw new Error("Unsupported body type");
  }
  compressRequestBody(body) {
    return __async(this, null, function* () {
      const compressionData = this.readBodyAsBytes(body);
      const compressedBody = yield this.compressUsingCompressionStream(compressionData.stream);
      return {
        compressedBody: compressedBody.body,
        size: compressedBody.size
      };
    });
  }
  compressUsingCompressionStream(uint8ArrayStream) {
    return __async(this, null, function* () {
      const compressionStream = new CompressionStream("gzip");
      const compressedStream = uint8ArrayStream.pipeThrough(compressionStream);
      const reader = compressedStream.getReader();
      const compressedChunks = [];
      let totalLength = 0;
      let result = yield reader.read();
      while (!result.done) {
        const chunk = result.value;
        compressedChunks.push(chunk);
        totalLength += chunk.length;
        result = yield reader.read();
      }
      const compressedArray = new Uint8Array(totalLength);
      let offset = 0;
      for (const chunk of compressedChunks) {
        compressedArray.set(chunk, offset);
        offset += chunk.length;
      }
      return {
        body: compressedArray.buffer,
        size: compressedArray.length
      };
    });
  }
};
CompressionHandler.CONTENT_RANGE_HEADER = "Content-Range";
CompressionHandler.CONTENT_ENCODING_HEADER = "Content-Encoding";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/headersInspectionOptions.js
var HeadersInspectionOptionsKey = "HeadersInspectionOptionsKey";
var HeadersInspectionOptions = class {
  /**
   * Gets the request headers
   * @returns the request headers
   */
  getRequestHeaders() {
    return this.requestHeaders;
  }
  /**
   * Gets the response headers
   * @returns the response headers
   */
  getResponseHeaders() {
    return this.responseHeaders;
  }
  /**
   *
   * To create an instance of HeadersInspectionOptions
   * @param [options] - The headers inspection options value
   * @returns An instance of HeadersInspectionOptions
   * @example const options = new HeadersInspectionOptions({ inspectRequestHeaders: true, inspectResponseHeaders: true });
   */
  constructor(options = {}) {
    var _a, _b;
    this.requestHeaders = new Headers();
    this.responseHeaders = new Headers();
    this.inspectRequestHeaders = (_a = options.inspectRequestHeaders) !== null && _a !== void 0 ? _a : false;
    this.inspectResponseHeaders = (_b = options.inspectResponseHeaders) !== null && _b !== void 0 ? _b : false;
  }
  getKey() {
    return HeadersInspectionOptionsKey;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/headersInspectionHandler.js
var HeadersInspectionHandler = class {
  /**
   *
   * Creates new instance of HeadersInspectionHandler
   * @param _options The options for inspecting the headers
   */
  constructor(_options = new HeadersInspectionOptions()) {
    this._options = _options;
  }
  execute(url, requestInit, requestOptions) {
    let currentOptions = this._options;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[HeadersInspectionOptionsKey]) {
      currentOptions = requestOptions[HeadersInspectionOptionsKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("retryHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.headersInspection.enable", true);
          return this.executeInternal(url, requestInit, requestOptions, currentOptions);
        } finally {
          span.end();
        }
      });
    }
    return this.executeInternal(url, requestInit, requestOptions, currentOptions);
  }
  executeInternal(url, requestInit, requestOptions, currentOptions) {
    return __async(this, null, function* () {
      if (!this.next) {
        throw new Error("next middleware is undefined.");
      }
      if (currentOptions.inspectRequestHeaders && requestInit.headers) {
        for (const [key, value] of requestInit.headers) {
          currentOptions.getRequestHeaders().add(key, value);
        }
      }
      const response = yield this.next.execute(url, requestInit, requestOptions);
      if (currentOptions.inspectResponseHeaders && response.headers) {
        for (const [key, value] of response.headers.entries()) {
          currentOptions.getResponseHeaders().add(key, value);
        }
      }
      return response;
    });
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/parametersNameDecodingOptions.js
var ParametersNameDecodingHandlerOptionsKey = "RetryHandlerOptionKey";
var ParametersNameDecodingHandlerOptions = class {
  getKey() {
    return ParametersNameDecodingHandlerOptionsKey;
  }
  /**
   *
   * To create an instance of ParametersNameDecodingHandlerOptions
   * @param [options] - The optional parameters
   * @returns An instance of ParametersNameDecodingHandlerOptions
   * @example ParametersNameDecodingHandlerOptions({ enable: true, charactersToDecode: [".", "-", "~", "$"] });
   */
  constructor(options = {}) {
    var _a, _b;
    this.enable = (_a = options.enable) !== null && _a !== void 0 ? _a : true;
    this.charactersToDecode = (_b = options.charactersToDecode) !== null && _b !== void 0 ? _b : [".", "-", "~", "$"];
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/parametersNameDecodingHandler.js
var ParametersNameDecodingHandler = class {
  /**
   *
   * To create an instance of ParametersNameDecodingHandler
   * @param [options] - The parameters name decoding handler options value
   */
  constructor(options = new ParametersNameDecodingHandlerOptions()) {
    this.options = options;
    if (!options) {
      throw new Error("The options parameter is required.");
    }
  }
  /**
   * To execute the current middleware
   * @param url - The url to be fetched
   * @param requestInit - The request init object
   * @param requestOptions - The request options
   * @returns A Promise that resolves to nothing
   */
  execute(url, requestInit, requestOptions) {
    let currentOptions = this.options;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[ParametersNameDecodingHandlerOptionsKey]) {
      currentOptions = requestOptions[ParametersNameDecodingHandlerOptionsKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("parametersNameDecodingHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.parameters_name_decoding.enable", currentOptions.enable);
          return this.decodeParameters(url, requestInit, currentOptions, requestOptions);
        } finally {
          span.end();
        }
      });
    }
    return this.decodeParameters(url, requestInit, currentOptions, requestOptions);
  }
  decodeParameters(url, requestInit, currentOptions, requestOptions) {
    var _a, _b;
    let updatedUrl = url;
    if (currentOptions && currentOptions.enable && url.includes("%") && currentOptions.charactersToDecode && currentOptions.charactersToDecode.length > 0) {
      currentOptions.charactersToDecode.forEach((character) => {
        updatedUrl = updatedUrl.replace(new RegExp(`%${character.charCodeAt(0).toString(16)}`, "gi"), character);
      });
    }
    return (_b = (_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(updatedUrl, requestInit, requestOptions)) !== null && _b !== void 0 ? _b : Promise.reject(new Error("The next middleware is not set."));
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/redirectHandlerOptions.js
var RedirectHandlerOptionKey = "RedirectHandlerOption";
var RedirectHandlerOptions = class _RedirectHandlerOptions {
  /**
   *
   * To create an instance of RedirectHandlerOptions
   * @param [options] - The redirect handler options instance
   * @returns An instance of RedirectHandlerOptions
   * @throws Error if maxRedirects is more than 20 or less than 0
   * @example	const options = new RedirectHandlerOptions({ maxRedirects: 5 });
   */
  constructor(options = {}) {
    var _a, _b, _c;
    if (options.maxRedirects && options.maxRedirects > _RedirectHandlerOptions.MAX_MAX_REDIRECTS) {
      const error = new Error(`MaxRedirects should not be more than ${_RedirectHandlerOptions.MAX_MAX_REDIRECTS}`);
      error.name = "MaxLimitExceeded";
      throw error;
    }
    if (options.maxRedirects !== void 0 && options.maxRedirects < 0) {
      const error = new Error(`MaxRedirects should not be negative`);
      error.name = "MinExpectationNotMet";
      throw error;
    }
    this.maxRedirects = (_a = options.maxRedirects) !== null && _a !== void 0 ? _a : _RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS;
    this.shouldRedirect = (_b = options.shouldRedirect) !== null && _b !== void 0 ? _b : _RedirectHandlerOptions.defaultShouldRetry;
    this.scrubSensitiveHeaders = (_c = options.scrubSensitiveHeaders) !== null && _c !== void 0 ? _c : _RedirectHandlerOptions.defaultScrubSensitiveHeaders;
  }
  getKey() {
    return RedirectHandlerOptionKey;
  }
};
RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS = 5;
RedirectHandlerOptions.MAX_MAX_REDIRECTS = 20;
RedirectHandlerOptions.defaultShouldRetry = () => true;
RedirectHandlerOptions.defaultScrubSensitiveHeaders = (headers, originalUrl, newUrl) => {
  if (!headers || !originalUrl || !newUrl) {
    return;
  }
  try {
    const originalUri = new URL(originalUrl);
    const newUri = new URL(newUrl);
    const isDifferentHostOrScheme = originalUri.host.toLowerCase() !== newUri.host.toLowerCase() || originalUri.protocol.toLowerCase() !== newUri.protocol.toLowerCase();
    if (isDifferentHostOrScheme) {
      for (const key of Object.keys(headers)) {
        const lower = key.toLowerCase();
        if (lower === "authorization" || lower === "cookie" || lower === "proxy-authorization") {
          delete headers[key];
        }
      }
    }
  } catch (_a) {
    return;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/redirectHandler.js
var RedirectHandler = class _RedirectHandler {
  /**
   *
   *
   * To create an instance of RedirectHandler
   * @param [options] - The redirect handler options instance
   * @returns An instance of RedirectHandler
   */
  constructor(options = new RedirectHandlerOptions()) {
    this.options = options;
    if (!options) {
      throw new Error("The options parameter is required.");
    }
  }
  /**
   *
   * To check whether the response has the redirect status code or not
   * @param response - The response object
   * @returns A boolean representing whether the response contains the redirect status code or not
   */
  isRedirect(response) {
    return _RedirectHandler.REDIRECT_STATUS_CODES.has(response.status);
  }
  /**
   *
   * To check whether the response has location header or not
   * @param response - The response object
   * @returns A boolean representing the whether the response has location header or not
   */
  hasLocationHeader(response) {
    return response.headers.has(_RedirectHandler.LOCATION_HEADER);
  }
  /**
   *
   * To get the redirect url from location header in response object
   * @param response - The response object
   * @returns A redirect url from location header
   */
  getLocationHeader(response) {
    return response.headers.get(_RedirectHandler.LOCATION_HEADER);
  }
  /**
   *
   * To check whether the given url is a relative url or not
   * @param url - The url string value
   * @returns A boolean representing whether the given url is a relative url or not
   */
  isRelativeURL(url) {
    return !url.includes("://");
  }
  /**
   * To execute the next middleware and to handle in case of redirect response returned by the server
   * @param url - The url string value
   * @param fetchRequestInit - The Fetch RequestInit object
   * @param redirectCount - The redirect count value
   * @param currentOptions - The redirect handler options instance
   * @param requestOptions - The request options
   * @param tracerName - The name to use for the tracer
   * @returns A promise that resolves to nothing
   */
  executeWithRedirect(url, fetchRequestInit, redirectCount, currentOptions, requestOptions, tracerName) {
    return __async(this, null, function* () {
      var _a;
      const response = yield (_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(url, fetchRequestInit, requestOptions);
      if (!response) {
        throw new Error("Response is undefined");
      }
      if (redirectCount < currentOptions.maxRedirects && this.isRedirect(response) && this.hasLocationHeader(response) && currentOptions.shouldRedirect(response)) {
        ++redirectCount;
        const redirectUrl = this.getLocationHeader(response);
        if (!redirectUrl) {
          return response;
        }
        const newUrl = this.isRelativeURL(redirectUrl) ? new URL(redirectUrl, url).toString() : redirectUrl;
        if (fetchRequestInit.headers) {
          currentOptions.scrubSensitiveHeaders(fetchRequestInit.headers, url, newUrl);
        }
        if (response.status === _RedirectHandler.STATUS_CODE_SEE_OTHER) {
          fetchRequestInit.method = HttpMethod.GET;
          delete fetchRequestInit.body;
        }
        url = newUrl;
        if (tracerName) {
          return trace.getTracer(tracerName).startActiveSpan(`redirectHandler - redirect ${redirectCount}`, (span) => {
            try {
              span.setAttribute("com.microsoft.kiota.handler.redirect.count", redirectCount);
              span.setAttribute("http.response.status_code", response.status);
              return this.executeWithRedirect(url, fetchRequestInit, redirectCount, currentOptions, requestOptions);
            } finally {
              span.end();
            }
          });
        }
        return yield this.executeWithRedirect(url, fetchRequestInit, redirectCount, currentOptions, requestOptions);
      } else {
        return response;
      }
    });
  }
  /**
   * Executes the request and returns a promise resolving the response.
   * @param url - The url for the request
   * @param requestInit - The Fetch RequestInit object.
   * @param requestOptions - The request options.
   * @returns A Promise that resolves to the response.
   */
  execute(url, requestInit, requestOptions) {
    const redirectCount = 0;
    let currentOptions = this.options;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[RedirectHandlerOptionKey]) {
      currentOptions = requestOptions[RedirectHandlerOptionKey];
    }
    requestInit.redirect = _RedirectHandler.MANUAL_REDIRECT;
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("redirectHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.redirect.enable", true);
          return this.executeWithRedirect(url, requestInit, redirectCount, currentOptions, requestOptions, obsOptions.getTracerInstrumentationName());
        } finally {
          span.end();
        }
      });
    }
    return this.executeWithRedirect(url, requestInit, redirectCount, currentOptions, requestOptions);
  }
};
RedirectHandler.REDIRECT_STATUS_CODES = /* @__PURE__ */ new Set([
  301,
  // Moved Permanently
  302,
  // Found
  303,
  // See Other
  307,
  // Temporary Permanently
  308
  // Moved Permanently
]);
RedirectHandler.STATUS_CODE_SEE_OTHER = 303;
RedirectHandler.LOCATION_HEADER = "Location";
RedirectHandler.MANUAL_REDIRECT = "manual";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/retryHandlerOptions.js
var RetryHandlerOptionKey = "RetryHandlerOptionKey";
var RetryHandlerOptions = class _RetryHandlerOptions {
  /**
   *
   * To create an instance of RetryHandlerOptions
   * @param options - The RetryHandlerOptionsParams object
   * @returns An instance of RetryHandlerOptions
   * @example	const options = new RetryHandlerOptions({ maxRetries: 4 });
   */
  constructor(options = {}) {
    var _a, _b, _c;
    if (options.delay !== void 0 && options.delay > _RetryHandlerOptions.MAX_DELAY) {
      throw this.createError(`Delay should not be more than ${_RetryHandlerOptions.MAX_DELAY}`, "MaxLimitExceeded");
    }
    if (options.maxRetries !== void 0 && options.maxRetries > _RetryHandlerOptions.MAX_MAX_RETRIES) {
      throw this.createError(`MaxRetries should not be more than ${_RetryHandlerOptions.MAX_MAX_RETRIES}`, "MaxLimitExceeded");
    }
    if (options.delay !== void 0 && options.delay < 0) {
      throw this.createError(`Delay should not be negative`, "MinExpectationNotMet");
    }
    if (options.maxRetries !== void 0 && options.maxRetries < 0) {
      throw this.createError(`MaxRetries should not be negative`, "MinExpectationNotMet");
    }
    this.delay = Math.min((_a = options.delay) !== null && _a !== void 0 ? _a : _RetryHandlerOptions.DEFAULT_DELAY, _RetryHandlerOptions.MAX_DELAY);
    this.maxRetries = Math.min((_b = options.maxRetries) !== null && _b !== void 0 ? _b : _RetryHandlerOptions.DEFAULT_MAX_RETRIES, _RetryHandlerOptions.MAX_MAX_RETRIES);
    this.shouldRetry = (_c = options.shouldRetry) !== null && _c !== void 0 ? _c : _RetryHandlerOptions.defaultShouldRetry;
  }
  /**
   *
   * Creates an error object with a message and name
   * @param message - The error message
   * @param name - The error name
   * @returns An error object
   */
  createError(message, name) {
    const error = new Error(message);
    error.name = name;
    return error;
  }
  /**
   *
   * To get the maximum delay
   * @returns A maximum delay
   */
  getMaxDelay() {
    return _RetryHandlerOptions.MAX_DELAY;
  }
  getKey() {
    return RetryHandlerOptionKey;
  }
};
RetryHandlerOptions.DEFAULT_DELAY = 3;
RetryHandlerOptions.DEFAULT_MAX_RETRIES = 3;
RetryHandlerOptions.MAX_DELAY = 180;
RetryHandlerOptions.MAX_MAX_RETRIES = 10;
RetryHandlerOptions.defaultShouldRetry = () => true;

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/retryHandler.js
var RetryHandler = class _RetryHandler {
  /**
   *
   * To create an instance of RetryHandler
   * @param [options] - The retry handler options value
   * @returns An instance of RetryHandler
   */
  constructor(options = new RetryHandlerOptions()) {
    this.options = options;
    if (!options) {
      throw new Error("The options parameter is required.");
    }
  }
  /**
   *
   *
   * To check whether the response has the retry status code
   * @param response - The response object
   * @returns Whether the response has retry status code or not
   */
  isRetry(response) {
    return _RetryHandler.RETRY_STATUS_CODES.has(response.status);
  }
  /**
   *
   * To check whether the payload is buffered or not
   * @param options - The options of a request
   * @returns Whether the payload is buffered or not
   */
  isBuffered(options) {
    var _a;
    const method = options.method;
    const isPutPatchOrPost = method === HttpMethod.PUT || method === HttpMethod.PATCH || method === HttpMethod.POST;
    if (isPutPatchOrPost) {
      const isStream = ((_a = getRequestHeader(options, "content-type")) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "application/octet-stream";
      if (isStream) {
        return false;
      }
    }
    return true;
  }
  /**
   *
   * To get the delay for a retry
   * @param response - The response object
   * @param retryAttempts - The current attempt count
   * @param delay - The delay value in seconds
   * @returns A delay for a retry
   */
  getDelay(response, retryAttempts, delay) {
    const getRandomness = () => Number(Math.random().toFixed(3));
    const retryAfter = response.headers !== void 0 ? response.headers.get(_RetryHandler.RETRY_AFTER_HEADER) : null;
    let newDelay;
    if (retryAfter !== null) {
      if (Number.isNaN(Number(retryAfter))) {
        newDelay = Math.round((new Date(retryAfter).getTime() - Date.now()) / 1e3);
      } else {
        newDelay = Number(retryAfter);
      }
    } else {
      newDelay = retryAttempts >= 2 ? this.getExponentialBackOffTime(retryAttempts) + delay + getRandomness() : delay + getRandomness();
    }
    return Math.min(newDelay, this.options.getMaxDelay() + getRandomness());
  }
  /**
   *
   * To get an exponential back off value
   * @param attempts - The current attempt count
   * @returns An exponential back off value
   */
  getExponentialBackOffTime(attempts) {
    return Math.round(1 / 2 * (2 ** attempts - 1));
  }
  /**
   * To add delay for the execution
   * @param delaySeconds - The delay value in seconds
   * @returns A Promise that resolves to nothing
   */
  sleep(delaySeconds) {
    return __async(this, null, function* () {
      const delayMilliseconds = delaySeconds * 1e3;
      return new Promise((resolve) => setTimeout(resolve, delayMilliseconds));
    });
  }
  /**
   * To execute the middleware with retries
   * @param url - The request url
   * @param fetchRequestInit - The request options
   * @param retryAttempts - The current attempt count
   * @param currentOptions - The current request options for the retry handler.
   * @param requestOptions - The retry middleware options instance
   * @param tracerName - The name to use for the tracer
   * @returns A Promise that resolves to nothing
   */
  executeWithRetry(url, fetchRequestInit, retryAttempts, currentOptions, requestOptions, tracerName) {
    return __async(this, null, function* () {
      var _a;
      const response = yield (_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(url, fetchRequestInit, requestOptions);
      if (!response) {
        throw new Error("Response is undefined");
      }
      if (retryAttempts < currentOptions.maxRetries && this.isRetry(response) && this.isBuffered(fetchRequestInit) && currentOptions.shouldRetry(currentOptions.delay, retryAttempts, url, fetchRequestInit, response)) {
        ++retryAttempts;
        setRequestHeader(fetchRequestInit, _RetryHandler.RETRY_ATTEMPT_HEADER, retryAttempts.toString());
        let delay = null;
        if (response) {
          delay = this.getDelay(response, retryAttempts, currentOptions.delay);
          yield this.sleep(delay);
        }
        if (tracerName) {
          return yield trace.getTracer(tracerName).startActiveSpan(`retryHandler - attempt ${retryAttempts}`, (span) => {
            try {
              span.setAttribute("http.request.resend_count", retryAttempts);
              if (delay) {
                span.setAttribute("http.request.resend_delay", delay);
              }
              span.setAttribute("http.response.status_code", response.status);
              return this.executeWithRetry(url, fetchRequestInit, retryAttempts, currentOptions, requestOptions);
            } finally {
              span.end();
            }
          });
        }
        return yield this.executeWithRetry(url, fetchRequestInit, retryAttempts, currentOptions, requestOptions);
      } else {
        return response;
      }
    });
  }
  /**
   * To execute the current middleware
   * @param url - The request url
   * @param requestInit - The request options
   * @param requestOptions - The request options
   * @returns A Promise that resolves to nothing
   */
  execute(url, requestInit, requestOptions) {
    const retryAttempts = 0;
    let currentOptions = this.options;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[RetryHandlerOptionKey]) {
      currentOptions = requestOptions[RetryHandlerOptionKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("retryHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.retry.enable", true);
          return this.executeWithRetry(url, requestInit, retryAttempts, currentOptions, requestOptions, obsOptions.getTracerInstrumentationName());
        } finally {
          span.end();
        }
      });
    }
    return this.executeWithRetry(url, requestInit, retryAttempts, currentOptions, requestOptions);
  }
};
RetryHandler.RETRY_STATUS_CODES = /* @__PURE__ */ new Set([
  429,
  // Too many requests
  503,
  // Service unavailable
  504
  // Gateway timeout
]);
RetryHandler.RETRY_ATTEMPT_HEADER = "Retry-Attempt";
RetryHandler.RETRY_AFTER_HEADER = "Retry-After";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/version.js
var libraryVersion = "1.0.0-preview.24";

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/userAgentHandlerOptions.js
var UserAgentHandlerOptionsKey = "UserAgentHandlerOptionKey";
var UserAgentHandlerOptions = class {
  getKey() {
    return UserAgentHandlerOptionsKey;
  }
  /**
   *
   * To create an instance of UserAgentHandlerOptions
   * @param [options] - The options for the UserAgentHandler
   * @example	const options = new UserAgentHandlerOptions({ enable: false });
   */
  constructor(options = {}) {
    var _a, _b, _c;
    this.enable = (_a = options.enable) !== null && _a !== void 0 ? _a : true;
    this.productName = (_b = options.productName) !== null && _b !== void 0 ? _b : "kiota-typescript";
    this.productVersion = (_c = options.productVersion) !== null && _c !== void 0 ? _c : libraryVersion;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/userAgentHandler.js
var USER_AGENT_HEADER_KEY = "User-Agent";
var UserAgentHandler = class {
  /**
   * To create an instance of UserAgentHandler
   * @param _options - The options for the middleware
   */
  constructor(_options = new UserAgentHandlerOptions()) {
    this._options = _options;
  }
  /** @inheritdoc */
  execute(url, requestInit, requestOptions) {
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("userAgentHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.useragent.enable", true);
          return this.addValue(url, requestInit, requestOptions);
        } finally {
          span.end();
        }
      });
    } else {
      return this.addValue(url, requestInit, requestOptions);
    }
  }
  addValue(url, requestInit, requestOptions) {
    return __async(this, null, function* () {
      var _a;
      let currentOptions = this._options;
      if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[UserAgentHandlerOptionsKey]) {
        currentOptions = requestOptions[UserAgentHandlerOptionsKey];
      }
      if (currentOptions.enable) {
        const additionalValue = `${currentOptions.productName}/${currentOptions.productVersion}`;
        const currentValue = getRequestHeader(requestInit, USER_AGENT_HEADER_KEY);
        if (!(currentValue === null || currentValue === void 0 ? void 0 : currentValue.includes(additionalValue))) {
          appendRequestHeader(requestInit, USER_AGENT_HEADER_KEY, additionalValue, " ");
        }
      }
      const response = yield (_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(url, requestInit, requestOptions);
      if (!response)
        throw new Error("No response returned by the next middleware");
      return response;
    });
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/options/urlReplaceHandlerOptions.js
var UrlReplaceHandlerOptionsKey = "UrlReplaceHandlerOptionsKey";
var UrlReplaceHandlerOptions = class {
  /**
   * Create a new instance of the UrlReplaceHandlerOptions class
   * @param config the configuration to apply to the url replace handler options.
   */
  constructor(config) {
    var _a, _b;
    if (config) {
      this._urlReplacements = (_a = config.urlReplacements) !== null && _a !== void 0 ? _a : {};
      this._enabled = (_b = config.enabled) !== null && _b !== void 0 ? _b : true;
    } else {
      this._urlReplacements = {};
      this._enabled = true;
    }
  }
  /**
   * @inheritdoc
   */
  getKey() {
    return UrlReplaceHandlerOptionsKey;
  }
  /**
   * Returns whether the url replace handler is enabled or not.
   * @returns whether the url replace handler is enabled or not.
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Returns the url replacements combinations.
   * @returns the url replacements combinations.
   */
  get urlReplacements() {
    return this._urlReplacements;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/urlReplaceHandler.js
var UrlReplaceHandler = class {
  /**
   *
   * Creates a new instance of the UrlReplaceHandler class
   * @param handlerOptions The options for the url replace handler.
   * @returns An instance of the UrlReplaceHandler class
   */
  constructor(handlerOptions = new UrlReplaceHandlerOptions()) {
    this.handlerOptions = handlerOptions;
    if (!handlerOptions) {
      throw new Error("handlerOptions cannot be undefined");
    }
  }
  /**
   * @inheritdoc
   */
  execute(url, requestInit, requestOptions) {
    let currentOptions = this.handlerOptions;
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions[UrlReplaceHandlerOptionsKey]) {
      currentOptions = requestOptions[UrlReplaceHandlerOptionsKey];
    }
    const obsOptions = getObservabilityOptionsFromRequest(requestOptions);
    if (obsOptions) {
      return trace.getTracer(obsOptions.getTracerInstrumentationName()).startActiveSpan("urlReplaceHandler - execute", (span) => {
        try {
          span.setAttribute("com.microsoft.kiota.handler.urlReplace.enable", currentOptions.enabled);
          return this.replaceTokensInUrl(currentOptions, url, requestInit, requestOptions);
        } finally {
          span.end();
        }
      });
    }
    return this.replaceTokensInUrl(currentOptions, url, requestInit, requestOptions);
  }
  replaceTokensInUrl(options, url, requestInit, requestOptions) {
    var _a;
    if (options.enabled) {
      Object.keys(options.urlReplacements).forEach((replacementKey) => {
        url = url.replace(replacementKey, options.urlReplacements[replacementKey]);
      });
    }
    const response = (_a = this.next) === null || _a === void 0 ? void 0 : _a.execute(url, requestInit, requestOptions);
    if (!response) {
      throw new Error("Response is undefined");
    }
    return response;
  }
};

// node_modules/@microsoft/kiota-http-fetchlibrary/dist/es/src/middlewares/middlewareFactory.js
var MiddlewareFactory = class _MiddlewareFactory {
  /**
   * @param customFetch - The custom fetch implementation
   * Returns the default middleware chain an array with the  middleware handlers
   * @returns an array of the middleware handlers of the default middleware chain
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  static getDefaultMiddlewares(customFetch = (...args) => fetch(...args)) {
    return [new RetryHandler(), new RedirectHandler(), new ParametersNameDecodingHandler(), new UserAgentHandler(), new HeadersInspectionHandler(), new UrlReplaceHandler(), new CustomFetchHandler(customFetch)];
  }
  /**
   * @param customFetch - The custom fetch implementation
   * Returns the default middleware chain + performance middleware
   * @returns an array of the middleware handlers of the default + performance middleware chain
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  static getPerformanceMiddlewares(customFetch = (...args) => fetch(...args)) {
    const middlewares = _MiddlewareFactory.getDefaultMiddlewares(customFetch);
    middlewares.splice(middlewares.length - 3, 0, new CompressionHandler());
    return middlewares;
  }
};

// node_modules/@microsoft/kiota-bundle/dist/es/src/defaultRequestAdapter.js
var DefaultRequestAdapter = class extends FetchRequestAdapter {
  /**
   * Instantiates a new request adapter.
   * @param authenticationProvider the authentication provider to use.
   * @param parseNodeFactory the parse node factory to deserialize responses.
   * @param serializationWriterFactory the serialization writer factory to use to serialize request bodies.
   * @param httpClient the http client to use to execute requests.
   * @param observabilityOptions the observability options to use.
   */
  constructor(authenticationProvider, parseNodeFactory = new ParseNodeFactoryRegistry(), serializationWriterFactory = new SerializationWriterFactoryRegistry(), httpClient = new HttpClient(), observabilityOptions = new ObservabilityOptionsImpl()) {
    super(authenticationProvider, parseNodeFactory, serializationWriterFactory, httpClient, observabilityOptions);
    this.setupDefaults();
  }
  setupDefaults() {
    const parseNodeFactoryRegistry = super.getParseNodeFactory();
    const serializationWriterFactoryRegistry = super.getSerializationWriterFactory();
    const backingStoreFactory = super.getBackingStoreFactory();
    if (parseNodeFactoryRegistry.registerDefaultDeserializer) {
      parseNodeFactoryRegistry.registerDefaultDeserializer(TextParseNodeFactory, backingStoreFactory);
      parseNodeFactoryRegistry.registerDefaultDeserializer(JsonParseNodeFactory, backingStoreFactory);
      parseNodeFactoryRegistry.registerDefaultDeserializer(FormParseNodeFactory, backingStoreFactory);
    }
    if (serializationWriterFactoryRegistry.registerDefaultSerializer) {
      serializationWriterFactoryRegistry.registerDefaultSerializer(JsonSerializationWriterFactory);
      serializationWriterFactoryRegistry.registerDefaultSerializer(TextSerializationWriterFactory);
      serializationWriterFactoryRegistry.registerDefaultSerializer(FormSerializationWriterFactory);
      serializationWriterFactoryRegistry.registerDefaultSerializer(MultipartSerializationWriterFactory);
    }
  }
};

// src/app/auto_generated/client/models/index.ts
function createCreateMatchCommandResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoCreateMatchCommandResponse;
}
function createCreateMatchEventCommandResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoCreateMatchEventCommandResponse;
}
function createCreatePlayerCommandResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoCreatePlayerCommandResponse;
}
function createCreatePlayerSelfCommandResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoCreatePlayerSelfCommandResponse;
}
function createGetAllMatchesQueryResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoGetAllMatchesQueryResponse;
}
function createGetAllPlayersQueryResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoGetAllPlayersQueryResponse;
}
function createGetAvailableMatchesQueryResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoGetAvailableMatchesQueryResponse;
}
function createGetPlayerDetailsQueryResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoGetPlayerDetailsQueryResponse;
}
function createGetPlayerDetailsSelfQueryResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoGetPlayerDetailsSelfQueryResponse;
}
function createGetPlayerRolesQueryResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoGetPlayerRolesQueryResponse;
}
function createIMatchEventEntityFromDiscriminatorValue(parseNode) {
  return deserializeIntoIMatchEventEntity;
}
function createIPlayerEntityFromDiscriminatorValue(parseNode) {
  return deserializeIntoIPlayerEntity;
}
function createIPlayerPortfolioFromDiscriminatorValue(parseNode) {
  return deserializeIntoIPlayerPortfolio;
}
function createIStockCompanyFromDiscriminatorValue(parseNode) {
  return deserializeIntoIStockCompany;
}
function createIStockMatchEntityFromDiscriminatorValue(parseNode) {
  return deserializeIntoIStockMatchEntity;
}
function createProblemDetailsFromDiscriminatorValue(parseNode) {
  return deserializeIntoProblemDetails;
}
function createUpdateUsernameSelfCommandResponseFromDiscriminatorValue(parseNode) {
  return deserializeIntoUpdateUsernameSelfCommandResponse;
}
function deserializeIntoCreateMatchCommandResponse(createMatchCommandResponse = {}) {
  return {
    "id": (n) => {
      createMatchCommandResponse.id = n.getGuidValue();
    },
    "name": (n) => {
      createMatchCommandResponse.name = n.getStringValue();
    }
  };
}
function deserializeIntoCreateMatchEventCommandResponse(createMatchEventCommandResponse = {}) {
  return {
    "id": (n) => {
      createMatchEventCommandResponse.id = n.getGuidValue();
    },
    "name": (n) => {
      createMatchEventCommandResponse.name = n.getStringValue();
    }
  };
}
function deserializeIntoCreatePlayerCommandResponse(createPlayerCommandResponse = {}) {
  return {
    "id": (n) => {
      createPlayerCommandResponse.id = n.getGuidValue();
    }
  };
}
function deserializeIntoCreatePlayerSelfCommandResponse(createPlayerSelfCommandResponse = {}) {
  return {
    "id": (n) => {
      createPlayerSelfCommandResponse.id = n.getGuidValue();
    }
  };
}
function deserializeIntoGetAllMatchesQueryResponse(getAllMatchesQueryResponse = {}) {
  return {
    "matches": (n) => {
      getAllMatchesQueryResponse.matches = n.getCollectionOfObjectValues(createIStockMatchEntityFromDiscriminatorValue);
    }
  };
}
function deserializeIntoGetAllPlayersQueryResponse(getAllPlayersQueryResponse = {}) {
  return {
    "players": (n) => {
      getAllPlayersQueryResponse.players = n.getCollectionOfObjectValues(createIPlayerEntityFromDiscriminatorValue);
    }
  };
}
function deserializeIntoGetAvailableMatchesQueryResponse(getAvailableMatchesQueryResponse = {}) {
  return {
    "companies": (n) => {
      getAvailableMatchesQueryResponse.companies = n.getCollectionOfObjectValues(createIStockCompanyFromDiscriminatorValue);
    },
    "matches": (n) => {
      getAvailableMatchesQueryResponse.matches = n.getCollectionOfObjectValues(createIStockMatchEntityFromDiscriminatorValue);
    }
  };
}
function deserializeIntoGetPlayerDetailsQueryResponse(getPlayerDetailsQueryResponse = {}) {
  return {};
}
function deserializeIntoGetPlayerDetailsSelfQueryResponse(getPlayerDetailsSelfQueryResponse = {}) {
  return {
    "active": (n) => {
      getPlayerDetailsSelfQueryResponse.active = n.getBooleanValue();
    },
    "id": (n) => {
      getPlayerDetailsSelfQueryResponse.id = n.getGuidValue();
    },
    "oid": (n) => {
      getPlayerDetailsSelfQueryResponse.oid = n.getGuidValue();
    },
    "profilePicture": (n) => {
      getPlayerDetailsSelfQueryResponse.profilePicture = n.getStringValue();
    },
    "username": (n) => {
      getPlayerDetailsSelfQueryResponse.username = n.getStringValue();
    }
  };
}
function deserializeIntoGetPlayerRolesQueryResponse(getPlayerRolesQueryResponse = {}) {
  return {
    "roles": (n) => {
      getPlayerRolesQueryResponse.roles = n.getCollectionOfPrimitiveValues();
    }
  };
}
function deserializeIntoIMatchEventEntity(iMatchEventEntity = {}) {
  return {
    "active": (n) => {
      iMatchEventEntity.active = n.getBooleanValue();
    },
    "created": (n) => {
      iMatchEventEntity.created = n.getDateValue();
    },
    "createdBy": (n) => {
      iMatchEventEntity.createdBy = n.getGuidValue();
    },
    "eventType": (n) => {
      iMatchEventEntity.eventType = n.getNumberValue();
    },
    "id": (n) => {
      iMatchEventEntity.id = n.getGuidValue();
    },
    "lastEdited": (n) => {
      iMatchEventEntity.lastEdited = n.getDateValue();
    },
    "payload": (n) => {
      iMatchEventEntity.payload = n.getStringValue();
    },
    "stockMatchId": (n) => {
      iMatchEventEntity.stockMatchId = n.getGuidValue();
    },
    "updatedBy": (n) => {
      iMatchEventEntity.updatedBy = n.getGuidValue();
    }
  };
}
function deserializeIntoIPlayerEntity(iPlayerEntity = {}) {
  return {
    "active": (n) => {
      iPlayerEntity.active = n.getBooleanValue();
    },
    "created": (n) => {
      iPlayerEntity.created = n.getDateValue();
    },
    "createdBy": (n) => {
      iPlayerEntity.createdBy = n.getGuidValue();
    },
    "id": (n) => {
      iPlayerEntity.id = n.getGuidValue();
    },
    "lastEdited": (n) => {
      iPlayerEntity.lastEdited = n.getDateValue();
    },
    "oid": (n) => {
      iPlayerEntity.oid = n.getGuidValue();
    },
    "profilePicture": (n) => {
      iPlayerEntity.profilePicture = n.getStringValue();
    },
    "updatedBy": (n) => {
      iPlayerEntity.updatedBy = n.getGuidValue();
    },
    "username": (n) => {
      iPlayerEntity.username = n.getStringValue();
    }
  };
}
function deserializeIntoIPlayerPortfolio(iPlayerPortfolio = {}) {
  return {
    "active": (n) => {
      iPlayerPortfolio.active = n.getBooleanValue();
    },
    "cash": (n) => {
      iPlayerPortfolio.cash = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "created": (n) => {
      iPlayerPortfolio.created = n.getDateValue();
    },
    "createdBy": (n) => {
      iPlayerPortfolio.createdBy = n.getGuidValue();
    },
    "id": (n) => {
      iPlayerPortfolio.id = n.getGuidValue();
    },
    "lastEdited": (n) => {
      iPlayerPortfolio.lastEdited = n.getDateValue();
    },
    "playerId": (n) => {
      iPlayerPortfolio.playerId = n.getGuidValue();
    },
    "prisonReleaseAt": (n) => {
      iPlayerPortfolio.prisonReleaseAt = n.getDateValue();
    },
    "status": (n) => {
      iPlayerPortfolio.status = n.getNumberValue();
    },
    "stockMatchId": (n) => {
      iPlayerPortfolio.stockMatchId = n.getGuidValue();
    },
    "updatedBy": (n) => {
      iPlayerPortfolio.updatedBy = n.getGuidValue();
    }
  };
}
function deserializeIntoIStockCompany(iStockCompany = {}) {
  return {
    "active": (n) => {
      iStockCompany.active = n.getBooleanValue();
    },
    "availableStocks": (n) => {
      iStockCompany.availableStocks = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "bankrupt": (n) => {
      iStockCompany.bankrupt = n.getBooleanValue();
    },
    "created": (n) => {
      iStockCompany.created = n.getDateValue();
    },
    "createdBy": (n) => {
      iStockCompany.createdBy = n.getGuidValue();
    },
    "description": (n) => {
      iStockCompany.description = n.getStringValue();
    },
    "id": (n) => {
      iStockCompany.id = n.getGuidValue();
    },
    "lastEdited": (n) => {
      iStockCompany.lastEdited = n.getDateValue();
    },
    "lastReportedProfit": (n) => {
      iStockCompany.lastReportedProfit = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "lastReportedRevenue": (n) => {
      iStockCompany.lastReportedRevenue = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "liquidAssets": (n) => {
      iStockCompany.liquidAssets = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "longTermDebt": (n) => {
      iStockCompany.longTermDebt = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "name": (n) => {
      iStockCompany.name = n.getStringValue();
    },
    "nonLiquidAssets": (n) => {
      iStockCompany.nonLiquidAssets = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "price": (n) => {
      iStockCompany.price = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "shortName": (n) => {
      iStockCompany.shortName = n.getStringValue();
    },
    "shortTermDebt": (n) => {
      iStockCompany.shortTermDebt = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "stockMatchId": (n) => {
      iStockCompany.stockMatchId = n.getGuidValue();
    },
    "totalStocks": (n) => {
      iStockCompany.totalStocks = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "updatedBy": (n) => {
      iStockCompany.updatedBy = n.getGuidValue();
    }
  };
}
function deserializeIntoIStockMatchEntity(iStockMatchEntity = {}) {
  return {
    "active": (n) => {
      iStockMatchEntity.active = n.getBooleanValue();
    },
    "created": (n) => {
      iStockMatchEntity.created = n.getDateValue();
    },
    "createdBy": (n) => {
      iStockMatchEntity.createdBy = n.getGuidValue();
    },
    "endDateTime": (n) => {
      iStockMatchEntity.endDateTime = n.getDateValue();
    },
    "id": (n) => {
      iStockMatchEntity.id = n.getGuidValue();
    },
    "lastEdited": (n) => {
      iStockMatchEntity.lastEdited = n.getDateValue();
    },
    "matchEvents": (n) => {
      iStockMatchEntity.matchEvents = n.getCollectionOfObjectValues(createIMatchEventEntityFromDiscriminatorValue);
    },
    "name": (n) => {
      iStockMatchEntity.name = n.getStringValue();
    },
    "playerPortfolios": (n) => {
      iStockMatchEntity.playerPortfolios = n.getCollectionOfObjectValues(createIPlayerPortfolioFromDiscriminatorValue);
    },
    "players": (n) => {
      iStockMatchEntity.players = n.getCollectionOfObjectValues(createIPlayerEntityFromDiscriminatorValue);
    },
    "startingCapital": (n) => {
      iStockMatchEntity.startingCapital = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "status": (n) => {
      iStockMatchEntity.status = n.getNumberValue();
    },
    "stockCompanies": (n) => {
      iStockMatchEntity.stockCompanies = n.getCollectionOfObjectValues(createIStockCompanyFromDiscriminatorValue);
    },
    "updatedBy": (n) => {
      iStockMatchEntity.updatedBy = n.getGuidValue();
    }
  };
}
function deserializeIntoProblemDetails(problemDetails = {}) {
  return {
    "detail": (n) => {
      problemDetails.detail = n.getStringValue();
    },
    "instance": (n) => {
      problemDetails.instance = n.getStringValue();
    },
    "status": (n) => {
      problemDetails.status = n.getObjectValue(createUntypedNodeFromDiscriminatorValue);
    },
    "title": (n) => {
      problemDetails.title = n.getStringValue();
    },
    "type": (n) => {
      problemDetails.type = n.getStringValue();
    }
  };
}
function deserializeIntoUpdateUsernameSelfCommandResponse(updateUsernameSelfCommandResponse = {}) {
  return {
    "id": (n) => {
      updateUsernameSelfCommandResponse.id = n.getGuidValue();
    },
    "username": (n) => {
      updateUsernameSelfCommandResponse.username = n.getStringValue();
    }
  };
}
function serializeCreateMatchEventRequest(writer, createMatchEventRequest = {}, isSerializingDerivedType = false) {
  if (!createMatchEventRequest || isSerializingDerivedType) {
    return;
  }
  writer.writeNumberValue("eventType", createMatchEventRequest.eventType);
  writer.writeObjectValue("payload", createMatchEventRequest.payload);
  writer.writeAdditionalData(createMatchEventRequest.additionalData);
}
function serializeCreateMatchRequest(writer, createMatchRequest = {}, isSerializingDerivedType = false) {
  if (!createMatchRequest || isSerializingDerivedType) {
    return;
  }
  writer.writeStringValue("name", createMatchRequest.name);
  writer.writeObjectValue("startingCapital", createMatchRequest.startingCapital);
  writer.writeAdditionalData(createMatchRequest.additionalData);
}
function serializeCreatePlayerRequest(writer, createPlayerRequest = {}, isSerializingDerivedType = false) {
  if (!createPlayerRequest || isSerializingDerivedType) {
    return;
  }
  writer.writeGuidValue("oid", createPlayerRequest.oid);
  writer.writeStringValue("userName", createPlayerRequest.userName);
  writer.writeAdditionalData(createPlayerRequest.additionalData);
}
function serializeUpdateUsernameSelfRequest(writer, updateUsernameSelfRequest = {}, isSerializingDerivedType = false) {
  if (!updateUsernameSelfRequest || isSerializingDerivedType) {
    return;
  }
  writer.writeStringValue("username", updateUsernameSelfRequest.username);
  writer.writeAdditionalData(updateUsernameSelfRequest.additionalData);
}

// src/app/auto_generated/client/api/admin/matches/index.ts
var MatchesRequestBuilderUriTemplate = "{+baseurl}/api/admin/matches";
var MatchesRequestBuilderRequestsMetadata = {
  get: {
    uriTemplate: MatchesRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createGetAllMatchesQueryResponseFromDiscriminatorValue
  }
};

// src/app/auto_generated/client/api/admin/players/item/index.ts
var PlayersItemRequestBuilderUriTemplate = "{+baseurl}/api/admin/players/{id}";
var PlayersItemRequestBuilderRequestsMetadata = {
  get: {
    uriTemplate: PlayersItemRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      404: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createGetPlayerDetailsQueryResponseFromDiscriminatorValue
  }
};

// src/app/auto_generated/client/api/admin/players/index.ts
var PlayersRequestBuilderUriTemplate = "{+baseurl}/api/admin/players";
var PlayersRequestBuilderNavigationMetadata = {
  byId: {
    requestsMetadata: PlayersItemRequestBuilderRequestsMetadata,
    pathParametersMappings: ["id"]
  }
};
var PlayersRequestBuilderRequestsMetadata = {
  get: {
    uriTemplate: PlayersRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createGetAllPlayersQueryResponseFromDiscriminatorValue
  },
  post: {
    uriTemplate: PlayersRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createCreatePlayerCommandResponseFromDiscriminatorValue,
    requestBodyContentType: "application/json",
    requestBodySerializer: serializeCreatePlayerRequest,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
};

// src/app/auto_generated/client/api/admin/index.ts
var AdminRequestBuilderNavigationMetadata = {
  matches: {
    requestsMetadata: MatchesRequestBuilderRequestsMetadata
  },
  players: {
    requestsMetadata: PlayersRequestBuilderRequestsMetadata,
    navigationMetadata: PlayersRequestBuilderNavigationMetadata
  }
};

// src/app/auto_generated/client/api/matches/archive/item/index.ts
var ArchiveItemRequestBuilderUriTemplate = "{+baseurl}/api/matches/archive/{id}";
var ArchiveItemRequestBuilderRequestsMetadata = {
  delete: {
    uriTemplate: ArchiveItemRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      404: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "sendNoResponseContent"
  }
};

// src/app/auto_generated/client/api/matches/archive/index.ts
var ArchiveRequestBuilderNavigationMetadata = {
  byId: {
    requestsMetadata: ArchiveItemRequestBuilderRequestsMetadata,
    pathParametersMappings: ["id"]
  }
};

// src/app/auto_generated/client/api/matches/item/companies/index.ts
var CompaniesRequestBuilderUriTemplate = "{+baseurl}/api/matches/{id}/companies";
var CompaniesRequestBuilderRequestsMetadata = {
  get: {
    uriTemplate: CompaniesRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      404: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createGetAvailableMatchesQueryResponseFromDiscriminatorValue
  }
};

// src/app/auto_generated/client/api/matches/item/events/index.ts
var EventsRequestBuilderUriTemplate = "{+baseurl}/api/matches/{id}/events";
var EventsRequestBuilderRequestsMetadata = {
  post: {
    uriTemplate: EventsRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      409: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createCreateMatchEventCommandResponseFromDiscriminatorValue,
    requestBodyContentType: "application/json",
    requestBodySerializer: serializeCreateMatchEventRequest,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
};

// src/app/auto_generated/client/api/matches/item/index.ts
var MatchesItemRequestBuilderUriTemplate = "{+baseurl}/api/matches/{id}";
var MatchesItemRequestBuilderNavigationMetadata = {
  companies: {
    requestsMetadata: CompaniesRequestBuilderRequestsMetadata
  },
  events: {
    requestsMetadata: EventsRequestBuilderRequestsMetadata
  }
};
var MatchesItemRequestBuilderRequestsMetadata = {
  delete: {
    uriTemplate: MatchesItemRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      404: createProblemDetailsFromDiscriminatorValue,
      409: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "sendNoResponseContent"
  }
};

// src/app/auto_generated/client/api/matches/index.ts
var MatchesRequestBuilderUriTemplate2 = "{+baseurl}/api/matches";
var MatchesRequestBuilderNavigationMetadata = {
  byId: {
    requestsMetadata: MatchesItemRequestBuilderRequestsMetadata,
    navigationMetadata: MatchesItemRequestBuilderNavigationMetadata,
    pathParametersMappings: ["id"]
  },
  archive: {
    navigationMetadata: ArchiveRequestBuilderNavigationMetadata
  }
};
var MatchesRequestBuilderRequestsMetadata2 = {
  get: {
    uriTemplate: MatchesRequestBuilderUriTemplate2,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      404: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createGetAvailableMatchesQueryResponseFromDiscriminatorValue
  },
  post: {
    uriTemplate: MatchesRequestBuilderUriTemplate2,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      409: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createCreateMatchCommandResponseFromDiscriminatorValue,
    requestBodyContentType: "application/json",
    requestBodySerializer: serializeCreateMatchRequest,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
};

// src/app/auto_generated/client/api/player/item/index.ts
var PlayerItemRequestBuilderUriTemplate = "{+baseurl}/api/player/{id}";
var PlayerItemRequestBuilderRequestsMetadata = {
  get: {
    uriTemplate: PlayerItemRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createGetPlayerDetailsQueryResponseFromDiscriminatorValue
  }
};

// src/app/auto_generated/client/api/player/roles/index.ts
var RolesRequestBuilderUriTemplate = "{+baseurl}/api/player/roles";
var RolesRequestBuilderRequestsMetadata = {
  get: {
    uriTemplate: RolesRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createGetPlayerRolesQueryResponseFromDiscriminatorValue
  }
};

// src/app/auto_generated/client/api/player/self/username/index.ts
var UsernameRequestBuilderUriTemplate = "{+baseurl}/api/player/self/username";
var UsernameRequestBuilderRequestsMetadata = {
  put: {
    uriTemplate: UsernameRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      404: createProblemDetailsFromDiscriminatorValue,
      409: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createUpdateUsernameSelfCommandResponseFromDiscriminatorValue,
    requestBodyContentType: "application/json",
    requestBodySerializer: serializeUpdateUsernameSelfRequest,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
};

// src/app/auto_generated/client/api/player/self/index.ts
var SelfRequestBuilderUriTemplate = "{+baseurl}/api/player/self";
var SelfRequestBuilderNavigationMetadata = {
  username: {
    requestsMetadata: UsernameRequestBuilderRequestsMetadata
  }
};
var SelfRequestBuilderRequestsMetadata = {
  get: {
    uriTemplate: SelfRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      404: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createGetPlayerDetailsSelfQueryResponseFromDiscriminatorValue
  },
  post: {
    uriTemplate: SelfRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    errorMappings: {
      401: createProblemDetailsFromDiscriminatorValue,
      403: createProblemDetailsFromDiscriminatorValue,
      409: createProblemDetailsFromDiscriminatorValue
    },
    adapterMethodName: "send",
    responseBodyFactory: createCreatePlayerSelfCommandResponseFromDiscriminatorValue
  }
};

// src/app/auto_generated/client/api/player/index.ts
var PlayerRequestBuilderNavigationMetadata = {
  byId: {
    requestsMetadata: PlayerItemRequestBuilderRequestsMetadata,
    pathParametersMappings: ["id"]
  },
  roles: {
    requestsMetadata: RolesRequestBuilderRequestsMetadata
  },
  self: {
    requestsMetadata: SelfRequestBuilderRequestsMetadata,
    navigationMetadata: SelfRequestBuilderNavigationMetadata
  }
};

// src/app/auto_generated/client/api/index.ts
var ApiRequestBuilderNavigationMetadata = {
  admin: {
    navigationMetadata: AdminRequestBuilderNavigationMetadata
  },
  matches: {
    requestsMetadata: MatchesRequestBuilderRequestsMetadata2,
    navigationMetadata: MatchesRequestBuilderNavigationMetadata
  },
  player: {
    navigationMetadata: PlayerRequestBuilderNavigationMetadata
  }
};

// src/app/auto_generated/client/apiClient.ts
function createApiClient(requestAdapter) {
  if (requestAdapter === void 0) {
    throw new Error("requestAdapter cannot be undefined");
  }
  const serializationWriterFactory = requestAdapter.getSerializationWriterFactory();
  const parseNodeFactoryRegistry = requestAdapter.getParseNodeFactory();
  const backingStoreFactory = requestAdapter.getBackingStoreFactory();
  if (parseNodeFactoryRegistry.registerDefaultDeserializer) {
    parseNodeFactoryRegistry.registerDefaultDeserializer(JsonParseNodeFactory, backingStoreFactory);
    parseNodeFactoryRegistry.registerDefaultDeserializer(TextParseNodeFactory, backingStoreFactory);
    parseNodeFactoryRegistry.registerDefaultDeserializer(FormParseNodeFactory, backingStoreFactory);
  }
  if (serializationWriterFactory.registerDefaultSerializer) {
    serializationWriterFactory.registerDefaultSerializer(JsonSerializationWriterFactory);
    serializationWriterFactory.registerDefaultSerializer(TextSerializationWriterFactory);
    serializationWriterFactory.registerDefaultSerializer(FormSerializationWriterFactory);
    serializationWriterFactory.registerDefaultSerializer(MultipartSerializationWriterFactory);
  }
  const pathParameters = {
    "baseurl": requestAdapter.baseUrl
  };
  return apiClientProxifier(requestAdapter, pathParameters, ApiClientNavigationMetadata, void 0);
}
var ApiClientNavigationMetadata = {
  api: {
    navigationMetadata: ApiRequestBuilderNavigationMetadata
  }
};

// src/app/app.api-client.config.ts
function buildKiotaAuthenticationProvider(config, msalInstance) {
  const allowedHostsValidator = new AllowedHostsValidator(/* @__PURE__ */ new Set([new URL(config.apiBaseUrl).host]));
  const accessTokenProvider = {
    getAuthorizationToken: () => __async(null, null, function* () {
      const account = msalInstance.getActiveAccount();
      if (!account) {
        throw new Error("No active MSAL account to acquire an API token for.");
      }
      const result = yield msalInstance.acquireTokenSilent({
        scopes: config.auth.apiScopes,
        account
      });
      return result.accessToken;
    }),
    getAllowedHostsValidator: () => allowedHostsValidator
  };
  return new BaseBearerTokenAuthenticationProvider(accessTokenProvider);
}
function buildApiClient(config, msalInstance) {
  const authenticationProvider = buildKiotaAuthenticationProvider(config, msalInstance);
  const requestAdapter = new DefaultRequestAdapter(authenticationProvider);
  requestAdapter.baseUrl = config.apiBaseUrl;
  return withoutFrameworkPropertyProbing(createApiClient(requestAdapter));
}
var KIOTA_UNKNOWN_NAVIGATION_PROPERTY_MESSAGE = "couldn't find navigation property";
function withoutFrameworkPropertyProbing(client) {
  return new Proxy(client, {
    get(target, property, receiver) {
      try {
        return Reflect.get(target, property, receiver);
      } catch (error) {
        if (error instanceof Error && error.message.startsWith(KIOTA_UNKNOWN_NAVIGATION_PROPERTY_MESSAGE)) {
          return void 0;
        }
        throw error;
      }
    }
  });
}

// src/app/app.auth.config.ts
function loggerCallback(_level, message) {
  console.log(message);
}
function buildMsalInstance(config) {
  return new PublicClientApplication({
    auth: {
      clientId: config.auth.clientId,
      authority: config.auth.authority,
      redirectUri: config.auth.redirectUri,
      postLogoutRedirectUri: config.auth.postLogoutRedirectUri
    },
    cache: {
      cacheLocation: BrowserCacheLocation.SessionStorage
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Warning,
        piiLoggingEnabled: false
      }
    }
  });
}
function buildMsalGuardConfig(config) {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: { scopes: config.auth.apiScopes }
  };
}

// src/app/core/guards/admin-guard.ts
var adminGuard = () => {
  const authState = inject(AuthState);
  const router = inject(Router);
  return authState.isAdmin() ? true : router.createUrlTree(["/forbidden"]);
};

// src/app/core/guards/auth-guard.ts
var authGuard = () => {
  const authState = inject(AuthState);
  const router = inject(Router);
  return authState.isAuthenticated() ? true : router.createUrlTree(["/unauthorized"]);
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-MBHRQ3RE.js").then((m) => m.LandingPage)
  },
  {
    path: "overview",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-SU63O65H.js").then((m) => m.OverviewPage)
  },
  {
    path: "matches",
    canActivate: [authGuard],
    loadChildren: () => import("./chunk-2RIVRHJN.js").then((m) => m.MATCHES_ROUTES)
  },
  {
    path: "tutorial",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-OO2OHWOA.js").then((m) => m.TutorialPage)
  },
  {
    path: "admin",
    canActivate: [authGuard, adminGuard],
    loadChildren: () => import("./chunk-GT2B5XK5.js").then((m) => m.ADMIN_ROUTES)
  },
  {
    path: "settings",
    canActivate: [authGuard],
    loadChildren: () => import("./chunk-2H4XS2VV.js").then((m) => m.SETTINGS_ROUTES)
  },
  {
    path: "unauthorized",
    loadComponent: () => import("./chunk-6LK7JN5K.js").then((m) => m.UnauthorizedPage)
  },
  {
    path: "forbidden",
    loadComponent: () => import("./chunk-BNI2YPQI.js").then((m) => m.ForbiddenPage)
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/models/api-base-url.token.ts
var API_BASE_URL = new InjectionToken("API_BASE_URL");

// src/app/shared/components/error-dialog/error-dialog.ts
var ErrorDialog = class _ErrorDialog {
  dialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);
  close() {
    this.dialogRef.close();
  }
  static \u0275fac = function ErrorDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorDialog, selectors: [["app-error-dialog"]], decls: 17, vars: 3, consts: [["mat-dialog-title", ""], [1, "error-dialog__ids"], [1, "tgc-mono-numeric"], ["align", "end"], ["mat-button", "", 3, "click"]], template: function ErrorDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "Something went wrong");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content")(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "dl", 1)(6, "dt");
      \u0275\u0275text(7, "Trace ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "dd", 2);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "dt");
      \u0275\u0275text(11, "Session ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "dd", 2);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "mat-dialog-actions", 3)(15, "button", 4);
      \u0275\u0275listener("click", function ErrorDialog_Template_button_click_15_listener() {
        return ctx.close();
      });
      \u0275\u0275text(16, "OK");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data.message);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.traceId);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data.sessionId);
    }
  }, dependencies: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule, MatButton], styles: ["\n\n.error-dialog__ids[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: 0.75rem;\n  row-gap: 0.25rem;\n  margin-top: 1rem;\n  font-size: 0.85rem;\n}\n.error-dialog__ids[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  opacity: 0.7;\n}\n.error-dialog__ids[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=error-dialog.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorDialog, [{
    type: Component,
    args: [{ selector: "app-error-dialog", imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule], template: '<h2 mat-dialog-title>Something went wrong</h2>\n<mat-dialog-content>\n  <p>{{ data.message }}</p>\n  <dl class="error-dialog__ids">\n    <dt>Trace ID</dt>\n    <dd class="tgc-mono-numeric">{{ data.traceId }}</dd>\n    <dt>Session ID</dt>\n    <dd class="tgc-mono-numeric">{{ data.sessionId }}</dd>\n  </dl>\n</mat-dialog-content>\n<mat-dialog-actions align="end">\n  <button mat-button (click)="close()">OK</button>\n</mat-dialog-actions>\n', styles: ["/* src/app/shared/components/error-dialog/error-dialog.scss */\n.error-dialog__ids {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: 0.75rem;\n  row-gap: 0.25rem;\n  margin-top: 1rem;\n  font-size: 0.85rem;\n}\n.error-dialog__ids dt {\n  font-weight: 600;\n  opacity: 0.7;\n}\n.error-dialog__ids dd {\n  margin: 0;\n}\n/*# sourceMappingURL=error-dialog.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorDialog, { className: "ErrorDialog", filePath: "src/app/shared/components/error-dialog/error-dialog.ts", lineNumber: 17 });
})();

// src/app/core/interceptors/tracing-interceptor.ts
var SESSION_ID_KEY = "tgc-regarded-stonks:sessionId";
function getOrCreateSessionId() {
  let sessionId = sessionStorage.getItem(SESSION_ID_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_ID_KEY, sessionId);
  }
  return sessionId;
}
var tracingInterceptor = (req, next) => {
  const runtimeConfig = inject(RUNTIME_CONFIG);
  if (!req.url.startsWith(runtimeConfig.apiBaseUrl)) {
    return next(req);
  }
  const dialog = inject(MatDialog);
  const traceId = crypto.randomUUID();
  const sessionId = getOrCreateSessionId();
  const tracedReq = req.clone({ setHeaders: { TraceId: traceId, SessionId: sessionId } });
  return next(tracedReq).pipe(catchError((error) => {
    if (error instanceof HttpErrorResponse) {
      dialog.open(ErrorDialog, {
        data: {
          traceId,
          sessionId,
          message: error.error?.detail ?? error.message
        }
      });
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
function buildAppConfig(config) {
  return __async(this, null, function* () {
    const msalInstance = buildMsalInstance(config);
    yield msalInstance.initialize();
    return {
      providers: [
        { provide: RUNTIME_CONFIG, useValue: config },
        { provide: API_BASE_URL, useValue: config.apiBaseUrl },
        { provide: API_CLIENT, useValue: buildApiClient(config, msalInstance) },
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptors([tracingInterceptor]), withInterceptorsFromDi()),
        { provide: MSAL_INSTANCE, useValue: msalInstance },
        { provide: MSAL_GUARD_CONFIG, useValue: buildMsalGuardConfig(config) },
        MsalService,
        MsalGuard,
        MsalBroadcastService
      ]
    };
  });
}

// src/main.ts
function fetchRuntimeConfig() {
  return __async(this, null, function* () {
    const response = yield fetch("/config/runtime.configuration.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load runtime.configuration.json: ${response.status} ${response.statusText}`);
    }
    return yield response.json();
  });
}
fetchRuntimeConfig().then((config) => buildAppConfig(config)).then((appConfig) => bootstrapApplication(App, appConfig)).catch((err) => {
  console.error("Fatal: could not load runtime configuration", err);
  document.body.innerHTML = '<p style="font-family: monospace; padding: 2rem;">Failed to load application configuration. Please try again later.</p>';
});
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.3.29
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
