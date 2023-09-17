import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  template: `
    <template-main>
      <router-outlet></router-outlet>
    </template-main>
  `
})
export class AppComponent {
  constructor( private spotifyService: SpotifyService ) {
    spotifyService.getToken();
  }
}
