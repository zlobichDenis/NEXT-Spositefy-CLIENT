import { useCallback, useEffect, useState } from "react";

import { Track } from "types";
import { stopPropagation } from "utils";
import { usePlayer } from "features/player";
import { useTrackListReducer } from "./redux/useTrackListReducer";

export const useTrackList = () => {
  const [playingTrack, setPlayingTrack] = useState<Track | null>(null);
  const { selectTrack } = usePlayer();
  const { data, getTrackList } = useTrackListReducer();

  const changePlayingTrack = useCallback((track) => (event) => {
    stopPropagation(event);
    setPlayingTrack(track);
  }, []);

  useEffect(() => {
    if (playingTrack) {
      selectTrack(playingTrack);
    }
  }, [playingTrack, selectTrack]);

  useEffect(() => {
    getTrackList();
  }, [getTrackList]);

  return {
    tracks: data,
    changePlayingTrack,
  }
};