import { Injectable, OnInit } from '@angular/core';
import { Track, TracksResponse } from '../interfaces';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  constructor( private http: HttpClient, private cookieService: CookieService ) { }

  private urlBase: string = 'https://api.spotify.com/v1';

  getTracksList(): Observable<TracksResponse> {

    const params = new HttpParams()
      .set('seed_genres', 'reggaeton')
      .set('limit', '30');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.cookieService.get('Token')}`
    });

    return this.http.get<TracksResponse>(`${this.urlBase}/recommendations`, { headers, params });
  }

}
