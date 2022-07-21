import { createAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { Track } from "types";

export enum TrackListActions {
  FETCH_TRACK_LIST = 'track-list/fetch',
  FULFILLED_TRACK_LIST = 'track-list/fulfilled',
  REJECTED_TRACK_LIST = 'track-list/rejected',
}

export const fetchTrackList = createAction(TrackListActions.FETCH_TRACK_LIST);
export const fulfilledTrackList = createAction<Track[]>(TrackListActions.FULFILLED_TRACK_LIST);
export const rejectedTrackList = createAction<AxiosError>(TrackListActions.REJECTED_TRACK_LIST);