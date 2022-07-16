import { Track } from "types";
import { PlayerActions, PlayerAction } from "./player.actions";

export type PlayerState = {
  track: Track | null;
  duration: number;
  currentDuration: number;
  volume: number;
  isPlaying: boolean;
}

export const initialState: PlayerState = {
  track: null,
  duration: 0,
  currentDuration: 0,
  volume: 0,
  isPlaying: false,
};

export const playerReducer = (state: PlayerState, action: PlayerAction) => {
  switch (action.type) {
    case PlayerActions.PLAY:
      return { ...state, isPlaying: true };

    case PlayerActions.PAUSE:
      return { ...state, isPlaying:  false };

    case PlayerActions.SET_TRACK:
      return { ...state, track: action.payload };

    case PlayerActions.SET_VOLUME:
      return { ...state, volume: action.payload };

    case PlayerActions.SET_DURATION:
      return { ...state, currentDuration: action.payload };

    default:
      throw new Error('Something went wrong');
  }
};
