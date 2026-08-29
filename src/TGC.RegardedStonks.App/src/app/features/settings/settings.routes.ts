import { Routes } from '@angular/router';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./settings-page/settings-page').then((m) => m.SettingsPage)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./notification-settings-page/notification-settings-page').then((m) => m.NotificationSettingsPage)
  },
  {
    path: 'access-token',
    loadComponent: () => import('./access-token-page/access-token-page').then((m) => m.AccessTokenPage)
  }
];
