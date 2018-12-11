import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WebStorage,Functions } from '../common/functions';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (Functions.isDefined(WebStorage.getSessionStorage(WebStorage.STORAGE_KEYS.userId))) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
