import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'matches',
    loadComponent: () => import('./admin-matches-page/admin-matches-page').then((m) => m.AdminMatchesPage)
  },
  {
    path: 'players',
    loadComponent: () => import('./admin-players-page/admin-players-page').then((m) => m.AdminPlayersPage)
  },
  {
    path: 'events',
    loadComponent: () => import('./admin-events-page/admin-events-page').then((m) => m.AdminEventsPage)
  },
  { path: '', redirectTo: 'matches', pathMatch: 'full' }
];
