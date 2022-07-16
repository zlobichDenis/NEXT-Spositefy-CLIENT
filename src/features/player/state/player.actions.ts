import { Track } from "types";

export type PlayAction = {
  type: PlayerActions.PLAY;
};

export type PauseAction = {
  type: PlayerActions.PAUSE;
};

export type SetVolumeAction = {
  type: PlayerActions.SET_VOLUME;
  payload: number;
};

export type SetDuration = {
  type: PlayerActions.SET_DURATION;
  payload: number;
};

export type SetTrack = {
  type: PlayerActions.SET_TRACK;
  payload: Track;
};

export type PlayerAction = PlayAction
  | PauseAction
  | SetVolumeAction
  | SetDuration
  | SetTrack;

export enum PlayerActions {
  PLAY = 'player/play',
  PAUSE = 'player/pause',
  SET_VOLUME = 'player/set-volume',
  SET_DURATION = 'player/set-duration',
  SET_TRACK = 'player/set-track',
}