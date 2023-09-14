import { createReducer, on } from "@ngrx/store";
import { Track } from "src/app/interfaces";
import { tracksLoaded } from "../actions/tracks.actions";

const initialState: Track[] = [];

export const tracksListReducer = createReducer(
  initialState,
  on(tracksLoaded, (state, { tracksList }) => tracksList),
);
