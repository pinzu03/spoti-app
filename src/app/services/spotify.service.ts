import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId: string = '98ed2b13c55b40568ce2a3d577ec593f';

  clientSecret: string = '';

  constructor( private http: HttpClient ) { }

  getToken(): Observable<TokenResponse> {

    const url = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })
    const body = `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`

    return this.http.post<TokenResponse>(url, body, {
      headers
    })
  }
}
