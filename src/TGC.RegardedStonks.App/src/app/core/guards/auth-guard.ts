import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthState } from '../services/auth-state';

/**
 * Unauthenticated visitors are sent to /unauthorized, where they get a choice to log in -
 * deliberately not using MsalGuard here, which would redirect straight into an interactive login.
 */
export const authGuard: CanActivateFn = () => {
  const authState = inject(AuthState);
  const router = inject(Router);

  return authState.isAuthenticated() ? true : router.createUrlTree(['/unauthorized']);
};
