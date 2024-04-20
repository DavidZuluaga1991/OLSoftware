import { AuthService } from './../services/auth/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService = inject(AuthService)
  if (authService.isAuthenticated()) {
    router.navigate(['/dashboard']);
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
