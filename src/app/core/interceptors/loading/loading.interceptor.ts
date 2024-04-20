import { LoadingService } from '@services';
import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerSvc = inject(LoadingService);
  spinnerSvc.show();
  return next(req).pipe(
    finalize(() => spinnerSvc.hide())
  );
};
