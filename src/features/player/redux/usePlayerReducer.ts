import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "store";
import { Track } from "types";
import {
  PlayerState,
  selectPlayerCurrentTime,
  selectPlayerDuration,
  selectPlayerState,
  selectPlayerTrack,
  selectPlayerVolume,
} from "./player.slice";
import {
  playAction,
  pauseAction,
  setVolumeAction,
  setDurationAction,
  setTrackAction,
  setCurrentTimeAction,
} from "./player.actions";

interface UsePlayerReducer {
  state: PlayerState;
  play: () => void;
  pause: () => void;
  setTrack: (track: Track) => void;
  setVolume: (volume: number) => void;
  setDuration: (duration: number) => void;
  setCurrentTime: (currentTime: number) => void;
}

export const usePlayerReducer = (): UsePlayerReducer => {
  const isPlaying = useAppSelector(selectPlayerState);
  const currentTime = useAppSelector(selectPlayerCurrentTime);
  const duration = useAppSelector(selectPlayerDuration);
  const track = useAppSelector(selectPlayerTrack);
  const volume = useAppSelector(selectPlayerVolume);

  const dispatch = useAppDispatch();

  const play = useCallback(() => dispatch(playAction()), [dispatch]);

  const pause = useCallback(() => dispatch(pauseAction()), [dispatch]);

  const setTrack = useCallback((track: Track) => dispatch(setTrackAction(track)), [dispatch]);

  const setVolume = useCallback((volume: number) => dispatch(setVolumeAction(volume)), [dispatch]);

  const setDuration = useCallback((duration: number) => dispatch(setDurationAction(duration)), [dispatch]);

  const setCurrentTime = useCallback((currentTime: number) => dispatch(setCurrentTimeAction(currentTime)), [dispatch]);

  return {
    state: {
      volume,
      isPlaying,
      currentTime,
      track,
      duration,
    },
    play,
    pause,
    setTrack,
    setVolume,
    setDuration,
    setCurrentTime,
  };
};