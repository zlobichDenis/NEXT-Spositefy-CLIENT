import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ReduxError, ReduxState } from 'shared';
import { Track } from 'api';
import { RootState } from 'store/rootReducer';
import { fulfilledCreateNewTrack, postNewTrack, rejectedCreateNewTrack } from './track-form.actions';

const SLICE_NAME = 'trackForm'

type TrackFormState = {
    state: ReduxState;
    data?: Track;
    error?: ReduxError;
};

const initialState: TrackFormState = {
    state: 'initial',
};

export const trackFormSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder.addCase(postNewTrack, (state) => {
            state.state = 'pending';
        });

        builder.addCase(fulfilledCreateNewTrack, (state, { payload }) => {
            state.state = 'fulfilled';
            state.data = payload;
        });

        builder.addCase(rejectedCreateNewTrack, (state, { payload }) => {
            state.state = 'rejected';
            state.error = payload;
        });
    }),
});

export const getTrackFormState = (state: RootState) => state.trackForm;
export const selectTrackFormState = createSelector(getTrackFormState, ({ state }) => state);
export const selectTrackFormData = createSelector(getTrackFormState, ({ data }) => data);
export const selectTrackFormError = createSelector(getTrackFormState, ({ error }) => error);
