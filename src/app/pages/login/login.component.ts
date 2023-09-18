import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  loginForm = new FormGroup({
    clientSecret: new FormControl('')
  })

  onSubmit(event: Event): void {
    event.preventDefault();

    const clientSecret = this.loginForm.get('clientSecret')?.value

    if(clientSecret) {
      this.spotifyService.clientSecret = clientSecret
      this.spotifyService.getToken().subscribe(res => {
        this.cookieService.set('Token', res.access_token);

        this.router.navigate(['/home']);
      });

    }
  }
}
