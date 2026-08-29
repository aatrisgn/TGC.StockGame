import { Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin-guard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing-page/landing-page').then((m) => m.LandingPage)
  },
  {
    path: 'overview',
    canActivate: [authGuard],
    loadComponent: () => import('./features/overview/overview-page/overview-page').then((m) => m.OverviewPage)
  },
  {
    path: 'matches',
    canActivate: [authGuard],
    loadChildren: () => import('./features/matches/matches.routes').then((m) => m.MATCHES_ROUTES)
  },
  {
    path: 'tutorial',
    canActivate: [authGuard],
    loadComponent: () => import('./features/tutorial/tutorial-page/tutorial-page').then((m) => m.TutorialPage)
  },
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES)
  },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadChildren: () => import('./features/settings/settings.routes').then((m) => m.SETTINGS_ROUTES)
  },
  {
    path: 'unauthorized',
    loadComponent: () => import('./features/unauthorized/unauthorized-page/unauthorized-page').then((m) => m.UnauthorizedPage)
  },
  {
    path: 'forbidden',
    loadComponent: () => import('./features/forbidden/forbidden-page/forbidden-page').then((m) => m.ForbiddenPage)
  },
  { path: '**', redirectTo: '' }
];
