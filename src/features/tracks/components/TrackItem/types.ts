import { Track } from "types";

export type TrackItemProps = {
  track: Track;
  onCardClick: () => void;
  onPlayClick: (event) => void;
  isPlaying?: boolean;
};