import { Track } from "types";

export type TrackItemProps = {
  track: Track;
  onCardClick: () => void;
  isPlaying?: boolean;
};