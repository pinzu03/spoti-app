import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '../interfaces';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId: string = '98ed2b13c55b40568ce2a3d577ec593f';
  private clientSecret: string = '2adf661aa13c428ca272b4325d68f0f5';

  constructor( private http: HttpClient, private cookieService: CookieService ) { }

  getToken(): void {

    const url = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })
    const body = `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`

    this.http.post<TokenResponse>(url, body, {
      headers
    }).subscribe(res => {
      this.cookieService.set('Token', res.access_token);
    })
  }
}
