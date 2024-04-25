import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (_, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const userId = auth.getUserData().id;
  const isAuthenticated = Boolean(userId);

  auth.setDestination(state.url);
  if (!isAuthenticated) {
    router.navigateByUrl('/login');
  }
  return isAuthenticated;
};
