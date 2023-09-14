import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadTracks } from 'src/app/state/actions/tracks.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadTracks());
  }
}
