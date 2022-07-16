import { useReducer, useCallback } from "react";

import { Track } from "types";
import { playerReducer, initialState, PlayerState } from "./state/player.reducer";
import { PlayerActions } from "./state/player.actions";

interface UsePlayer {
  state: PlayerState;
  play: () => void;
  pause: () => void;
  setTrack: (track: Track) => void;
  setVolume: (volume: number) => void;
  setDuration: (duration: number) => void;
}

export const usePlayer = (): UsePlayer => {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  const play = useCallback(() => dispatch({ type: PlayerActions.PLAY }), [dispatch]);

  const pause = useCallback(() => dispatch({ type: PlayerActions.PAUSE }), [dispatch]);

  const setTrack = useCallback((track: Track) => dispatch(
    { type: PlayerActions.SET_TRACK, payload: track }
  ), [dispatch]);

  const setVolume = useCallback((volume: number) => dispatch(
    { type: PlayerActions.SET_VOLUME, payload: volume }
  ), [dispatch]);

  const setDuration = useCallback((duration: number) => dispatch(
    { type: PlayerActions.SET_DURATION, payload: duration }
  ), [dispatch]);

  return {
    state,
    play,
    pause,
    setTrack,
    setVolume,
    setDuration,
  };
};