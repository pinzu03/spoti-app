import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpotifyService } from '../services/spotify.service';
import { Store } from '@ngrx/store';
import { loadTracks } from '../state/actions/tracks.actions';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private cookieService: CookieService,
    private spotifyService: SpotifyService,
    private store: Store
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.url === 'https://accounts.spotify.com/api/token') return next.handle( req );

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.cookieService.get('Token')}`
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone ).pipe(
      catchError(({error: errorResponse}) => {
        const { error } = errorResponse;

        if(error.status === 401 && error.message === 'The access token expired') {
          this.spotifyService.getToken();
          this.store.dispatch(loadTracks());
        }

        throw new Error(`Error en el interceptor: ${error.message}`);
      })
    );
  }
}
