import { createAction } from '@reduxjs/toolkit';
import { CreateTrackDto, Track } from 'api/types';
import { AxiosErrorSerialized } from 'axios';

export enum TrackFormActions {
    POST_NEW_TRACK = 'track-form/create',
    FULFILLED_CREATE_NEW_TRACK = 'track-form/fulfilled',
    REJECTED_CREATE_NEW_TRACK = 'track-form/rejected',
}

export const postNewTrack = createAction<CreateTrackDto>(TrackFormActions.POST_NEW_TRACK);
export const fulfilledCreateNewTrack = createAction<Track>(TrackFormActions.FULFILLED_CREATE_NEW_TRACK);
export const rejectedCreateNewTrack = createAction<AxiosErrorSerialized>(TrackFormActions.REJECTED_CREATE_NEW_TRACK);
