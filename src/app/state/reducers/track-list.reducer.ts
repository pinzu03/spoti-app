import { createReducer } from "@ngrx/store";
import { TrackList } from "src/app/interfaces";

const initialState: TrackList[] = []

export const trackListReducer = createReducer(
  initialState
);
