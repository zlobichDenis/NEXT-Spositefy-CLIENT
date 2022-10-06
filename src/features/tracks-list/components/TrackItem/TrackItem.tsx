import { IconButton } from "@mui/material";
import {
  PlayCircle as PlayIcon,
  PauseCircle as PauseIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { TrackItemProps } from "./types";
import {
  TrackItemCard,
  TrackItemCardPicture,
  TrackItemCardDetails,
  TrackItemCardDetailsArtist,
  TrackItemCardDetailsName,
  TrackItemCardDuration,
  TrackItemCardDeleteButton,
} from "./TrackItem.styled";

export const TrackItem = ({ track, isPlaying = false, onCardClick, onPlayClick }: TrackItemProps) => {
  const { name, artist, picture } = track;

  return (
    <TrackItemCard onClick={onCardClick}>
      <IconButton className="play-pause" onClick={onPlayClick}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
      <TrackItemCardPicture src={`http://localhost:5000/${picture}`}/>
      <TrackItemCardDetails container>
        <TrackItemCardDetailsName variant="body1">{name}</TrackItemCardDetailsName>
        <TrackItemCardDetailsArtist variant="body1">{artist}</TrackItemCardDetailsArtist>
      </TrackItemCardDetails>
      {isPlaying && (
        <TrackItemCardDuration>
          02:32 / 3:42
        </TrackItemCardDuration>
      )}
      <TrackItemCardDeleteButton>
        <DeleteIcon />
      </TrackItemCardDeleteButton>
    </TrackItemCard>
  )
};