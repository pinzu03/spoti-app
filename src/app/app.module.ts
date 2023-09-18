import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { TemplatesModule } from './components/templates/templates.module';
import { OrganismsModule } from './components/organisms/organisms.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { ROOT_REDUCERS } from './state/app.state';
import { TracksEffects } from './state/effects/tracks.effects';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplatesModule,
    OrganismsModule,
    HttpClientModule,

    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: "SpotiApp" }),
    EffectsModule.forRoot([TracksEffects])
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
