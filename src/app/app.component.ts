import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  template: `
    <templates-main>
      <router-outlet></router-outlet>
    </templates-main>
  `
})
export class AppComponent {
  constructor( private spotifyService: SpotifyService ) {
    spotifyService.getToken();
  }
}
