import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(Auth);

  return auth.guardEnabled() ? router.createUrlTree(['/dogs']): true;
};
