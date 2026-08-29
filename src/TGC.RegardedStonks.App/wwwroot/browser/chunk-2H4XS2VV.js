import "./chunk-DRAPPDPY.js";

// src/app/features/settings/settings.routes.ts
var SETTINGS_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-HZJR2DGT.js").then((m) => m.SettingsPage)
  },
  {
    path: "notifications",
    loadComponent: () => import("./chunk-4HSA45PL.js").then((m) => m.NotificationSettingsPage)
  },
  {
    path: "access-token",
    loadComponent: () => import("./chunk-XDSRQCKV.js").then((m) => m.AccessTokenPage)
  }
];
export {
  SETTINGS_ROUTES
};
//# sourceMappingURL=chunk-2H4XS2VV.js.map
