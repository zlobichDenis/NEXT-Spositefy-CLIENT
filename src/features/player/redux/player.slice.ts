import { createSlice, createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/rootReducer';
import {
    pauseAction,
    playAction,
    setCurrentTimeAction,
    setDurationAction,
    setTrackAction,
    setVolumeAction,
} from './player.actions';
import { Track } from '../../../api';

export type PlayerState = {
    track: Track | null;
    duration: number;
    currentTime: number;
    volume: number;
    isPlaying: boolean;
};

export const initialState: PlayerState = {
    track: null,
    duration: 0,
    currentTime: 0,
    volume: 0.1,
    isPlaying: false,
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder.addCase(playAction, (state) => {
            state.isPlaying = true;
        });

        builder.addCase(pauseAction, (state) => {
            state.isPlaying = false;
        });

        builder.addCase(setCurrentTimeAction, (state, { payload }) => {
            state.currentTime = payload;
        });

        builder.addCase(setTrackAction, (state, { payload }) => {
            state.track = payload;
        });

        builder.addCase(setDurationAction, (state, { payload }) => {
            state.duration = payload;
        });

        builder.addCase(setVolumeAction, (state, { payload }) => {
            state.volume = payload;
        });
    }),
});

const getPlayerState = (state: RootState) => state.player;

export const selectPlayerState = createSelector(getPlayerState, (state) => state.isPlaying);
export const selectPlayerVolume = createSelector(getPlayerState, (state) => state.volume);
export const selectPlayerTrack = createSelector(getPlayerState, (state) => state.track);
export const selectPlayerDuration = createSelector(getPlayerState, (state) => state.duration);
export const selectPlayerCurrentTime = createSelector(getPlayerState, (state) => state.currentTime);

