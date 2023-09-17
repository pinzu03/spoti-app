import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Track } from 'src/app/interfaces';
import { selectTracks } from 'src/app/state/selectors/tracks.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'organism-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss']
})
export class TracksListComponent implements OnInit {

  constructor( private store: Store ) {}

  tracksList$: Observable<Track[]> = new Observable<Track[]>;

  ngOnInit(): void {
    this.tracksList$ = this.store.select(selectTracks);
  }
}
