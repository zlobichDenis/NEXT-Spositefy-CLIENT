import { IconButton } from "@mui/material";
import { PauseCircle as PauseIcon, PlayCircle as PlayIcon } from "@mui/icons-material";

import { stopPropagation } from "utils";
import { PlayerWrapper, PlayerArtistName, PlayerNameWrapper } from "./Player.styled";

export const mockTrack = {
  _id: '1',
  name: 'Name 1',
  artist: 'Artist 1',
  text: 'Text 1',
  listens: 1,
  picture: 'picture 1',
  audio: ' audio 1',
  comments:[{
    _id: '1a',
    username: 'Name 1a',
    text: 'text 1a',
  }],
};

type PlayerProps = {
  active: boolean;
};

export const Player = ({ active }: PlayerProps) => {


  return (
    <PlayerWrapper>
      <IconButton onClick={stopPropagation}>
        {active
          ? <PauseIcon />
          : <PlayIcon />}
      </IconButton>
      <PlayerNameWrapper container>
        <div>{mockTrack.name}</div>
        <PlayerArtistName>{mockTrack.artist}</PlayerArtistName>
      </PlayerNameWrapper>
    </PlayerWrapper>
  )
};