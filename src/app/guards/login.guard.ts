import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  if (localStorage.getItem('userOnline') == null || localStorage.getItem('userOnline') == undefined) {
    router.navigate(['login']);
    return false;

  } else {
    return true;
  }
};
