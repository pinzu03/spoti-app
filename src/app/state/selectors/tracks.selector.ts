import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Track } from 'src/app/interfaces';

const featureKey: string = 'tracksList';

export const selectFeatureTracks = createFeatureSelector<Track[]>(featureKey);

export const selectTracks = createSelector(
  selectFeatureTracks,
  (state: Track[]) => state
);
