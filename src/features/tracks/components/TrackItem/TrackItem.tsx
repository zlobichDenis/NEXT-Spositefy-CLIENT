import { IconButton } from "@mui/material";
import {
  PlayCircle as PlayIcon,
  PauseCircle as PauseIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { stopPropagation } from "utils";
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

export const TrackItem = ({ track, isPlaying = false, onCardClick }: TrackItemProps) => {
  const { name, artist, picture } = track;

  return (
    <TrackItemCard onClick={onCardClick}>
      <IconButton onClick={stopPropagation}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </IconButton>
      <TrackItemCardPicture src={picture}/>
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