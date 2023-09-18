import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TokenGuard } from './guards/token.guard';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [TokenGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
