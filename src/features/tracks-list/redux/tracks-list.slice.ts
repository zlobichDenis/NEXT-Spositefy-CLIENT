import { createSlice, createSelector } from '@reduxjs/toolkit';
import { AxiosErrorSerialized } from 'axios';

import { RootState } from 'store/rootReducer';
import { REDUX_STATES } from 'shared';
import { fetchTrackList, fulfilledTrackList, rejectedTrackList } from './track-list.actions';
import { Track } from '../../../api';

type TracksListState = {
    state: REDUX_STATES;
    data?: Track[];
    error?: AxiosErrorSerialized;
};

const initialState: TracksListState = {
    state: REDUX_STATES.IDLE,
};

export const tracksListSlice = createSlice({
    name: 'track-list',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder.addCase(fetchTrackList, (state) => {
            state.state = REDUX_STATES.PENDING;
        });

        builder.addCase(fulfilledTrackList, (state, { payload }) => {
            state.state = REDUX_STATES.FULFILLED;
            state.data = payload;
        });

        builder.addCase(rejectedTrackList, (state, { payload }) => {
            state.state = REDUX_STATES.REJECTED;
            state.error = payload;
        });
    }),
});

export const getTrackList = (state: RootState) => state.trackList;

export const selectTrackListState = createSelector(getTrackList, ({ state }) => state);
export const selectTrackListData = createSelector(getTrackList, ({ data }) => data);
export const selectTrackListError = createSelector(getTrackList, ({ error }) => error);