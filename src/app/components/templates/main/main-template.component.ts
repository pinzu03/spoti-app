import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTracks } from 'src/app/state/actions/tracks.actions';

@Component({
  selector: 'template-main',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainTemplateComponent {

  constructor(private store: Store) {}

  peticion() {
    this.store.dispatch(loadTracks())
  }

}
