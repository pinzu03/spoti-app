import { ActionReducerMap } from "@ngrx/store";

import { TrackList } from "../interfaces";

import { trackListReducer } from "./reducers/track-list.reducer";

export interface AppState {
  tracksList: TrackList[];
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  tracksList: trackListReducer
}
