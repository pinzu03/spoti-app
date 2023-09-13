import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTemplateComponent } from './main/main-template.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    MainTemplateComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainTemplateComponent
  ]
})
export class TemplatesModule { }
