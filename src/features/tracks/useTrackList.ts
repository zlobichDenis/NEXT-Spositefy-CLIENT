import { useCallback, useEffect, useState } from "react";

import { Track } from "types";
import { stopPropagation } from "utils";
import { usePlayer } from "features/player";

export const useTrackList = () => {
  const [playingTrack, setPlayingTrack] = useState<Track | null>(null);
  const { selectTrack } = usePlayer();

  const changePlayingTrack = useCallback((track) => (event) => {
    stopPropagation(event);
    setPlayingTrack(track);
  }, []);

  useEffect(() => {
    if (playingTrack) {
      selectTrack(playingTrack);
    }
  }, [playingTrack]);

  return {
    changePlayingTrack
  }
};