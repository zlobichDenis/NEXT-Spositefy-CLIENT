import { createAction } from "@reduxjs/toolkit";

import { Track } from "types";

export enum PlayerActions {
  PLAY = 'player/play',
  PAUSE = 'player/pause',
  SET_VOLUME = 'player/set-volume',
  SET_DURATION = 'player/set-duration',
  SET_TRACK = 'player/set-track',
  SET_CURRENT_TIME = 'player/set-current-time',
}

export const playAction = createAction(PlayerActions.PLAY);
export const pauseAction = createAction(PlayerActions.PAUSE);

export const setTrackAction = createAction<Track>(PlayerActions.SET_TRACK);
export const setVolumeAction = createAction<number>(PlayerActions.SET_VOLUME);
export const setDurationAction = createAction<number>(PlayerActions.SET_DURATION);
export const setCurrentTimeAction = createAction<number>(PlayerActions.SET_CURRENT_TIME);
