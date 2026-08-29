import "./chunk-DRAPPDPY.js";

// src/app/features/admin/admin.routes.ts
var ADMIN_ROUTES = [
  {
    path: "matches",
    loadComponent: () => import("./chunk-GX7MXSD3.js").then((m) => m.AdminMatchesPage)
  },
  {
    path: "players",
    loadComponent: () => import("./chunk-UCOHUSGH.js").then((m) => m.AdminPlayersPage)
  },
  {
    path: "events",
    loadComponent: () => import("./chunk-Z6XLUHUF.js").then((m) => m.AdminEventsPage)
  },
  { path: "", redirectTo: "matches", pathMatch: "full" }
];
export {
  ADMIN_ROUTES
};
//# sourceMappingURL=chunk-GT2B5XK5.js.map
