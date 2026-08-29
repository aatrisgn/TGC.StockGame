import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthState } from '../services/auth-state';

/**
 * Authenticated users lacking the admin role are sent to /forbidden - a distinct page from
 * /unauthorized, since these users are known, just not permitted (no login link to show them).
 */
export const adminGuard: CanActivateFn = () => {
  const authState = inject(AuthState);
  const router = inject(Router);

  return authState.isAdmin() ? true : router.createUrlTree(['/forbidden']);
};
