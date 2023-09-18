import { Injectable } from '@angular/core';
import { TracksResponse } from '../interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  constructor( private http: HttpClient ) { }

  private urlBase: string = 'https://api.spotify.com/v1';

  getTracksList(): Observable<TracksResponse> {

    const params = new HttpParams()
      .set('seed_genres', 'reggaeton')
      .set('limit', '30');

    return this.http.get<TracksResponse>(`${this.urlBase}/recommendations`, { params });
  }

}
