import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataGetterService } from "../services/data-getter.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataGetter: DataGetterService,
              private router: Router) {
    }
    
  canActivate( 
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isLoggenIn = this.dataGetter.getUser() !== '';
    if (!isLoggenIn) {
      this.router.navigateByUrl('/login');
    }
    return isLoggenIn;
  }
  
}
