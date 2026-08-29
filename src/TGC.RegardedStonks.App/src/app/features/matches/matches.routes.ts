import { Routes } from '@angular/router';

export const MATCHES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./matches-list-page/matches-list-page').then((m) => m.MatchesListPage)
  },
  {
    path: ':id',
    loadComponent: () => import('./match-detail-page/match-detail-page').then((m) => m.MatchDetailPage)
  }
];
