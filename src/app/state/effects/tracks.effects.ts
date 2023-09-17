import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { TracksService } from '../../services/tracks.service';

@Injectable()
export class TracksEffects {

  loadTracks = createEffect(() => this.actions$.pipe(
    ofType('[TracksList Page] Load Tracks'),
    exhaustMap(() => this.tracksService.getTracksList()
      .pipe(
        map(({ tracks }) => ({ type: '[Tracks API] Tracks loaded success', tracksList: tracks }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private tracksService: TracksService
  ) {}
}
