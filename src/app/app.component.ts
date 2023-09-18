import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor( private spotifyService: SpotifyService ) {}

  ngOnInit(): void {
    this.spotifyService.getToken();
  }
}
