import { ActionReducerMap } from "@ngrx/store";

import { Track } from "../interfaces";

import { tracksListReducer } from "./reducers/tracks.reducer";

export interface AppState {
  tracksList: Track[];
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  tracksList: tracksListReducer
}
