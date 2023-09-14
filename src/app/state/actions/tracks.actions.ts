import { createAction, props } from "@ngrx/store";
import { Track } from "src/app/interfaces";

export const loadTracks = createAction('[TracksList Page] Load Tracks');

export const tracksLoaded = createAction(
  '[Tracks API] Tracks loaded success',
   props<{ tracksList: Track[] }>()
);
