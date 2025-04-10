// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { MsalGuard } from '@azure/msal-angular';
import { LoginFailedComponent } from './pages/login-failed/login-failed.component';
import { BrowserUtils } from '@azure/msal-browser';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [MsalGuard],
    children: [
      {
        path: '',
        redirectTo: '/analytics',
        pathMatch: 'full'
      },
      {
        path: 'analytics',
        loadComponent: () => import('./demo/dashboard/dash-analytics.component')
      },
      {
        path: 'current-game',
        loadComponent: () => import('./pages/games/current-game/current-game.component')
      },
      {
        path: 'games',
        loadComponent: () => import('./pages/games/all-games.component')
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart-maps/core-apex.component')
      },
      {
        path: 'forms',
        loadComponent: () => import('./demo/forms/form-elements/form-elements.component')
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/tables/tbl-bootstrap/tbl-bootstrap.component')
      }
    ]
  },
  {
    path: 'login-failed',
    component: LoginFailedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
      ? 'enabledNonBlocking'
      : 'disabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
