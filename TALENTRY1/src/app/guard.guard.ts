import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { TokenService } from './servicios/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const authToken = this.tokenService.getToken(); // Call the getToken() function

    if (!authToken) {
      // Redirect to the login page if the token is not present
      return this.router.createUrlTree(['/login']);
    }
    // Check if the user has the required role
    return this.tokenService.getRole().pipe(
      map((userRole: string | null): boolean | UrlTree => {
        if (route.data && route.data['expectedRole'] && userRole !== route.data['expectedRole']) {
          return this.router.createUrlTree(['/denied']);
        }
        return true;
      }),
      catchError(() => of(true)) // Handle errors by allowing navigation
    );
  }
}