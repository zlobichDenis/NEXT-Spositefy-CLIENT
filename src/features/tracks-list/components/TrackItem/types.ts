import { Track } from '../../../../api';

export type TrackItemProps = {
    track: Track;
    onCardClick: () => void;
    onPlayClick: (event) => void;
    isPlaying?: boolean;
};