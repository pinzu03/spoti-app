import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private http: HttpClient
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.cookieService.check('Token')) {
        this.router.navigate(['/login'])

        return false
      }


      return this.http.get('https://api.spotify.com/v1/artists/2LRoIwlKmHjgvigdNGBHNo').pipe(
        map(() => {
          return true;
        }),
        catchError(() => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );
  }

}
