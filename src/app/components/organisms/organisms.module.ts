import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoleculesModule } from '../molecules/molecules.module';

import { TracksListComponent } from './tracks-list/tracks-list.component';
import { MillisecondsAMinutesPipe } from 'src/app/pipes/milliseconds-aminutes.pipe';



@NgModule({
  declarations: [
    TracksListComponent,
    MillisecondsAMinutesPipe
  ],
  imports: [
    CommonModule,
    MoleculesModule
  ],
  exports: [
    TracksListComponent
  ]
})
export class OrganismsModule { }
