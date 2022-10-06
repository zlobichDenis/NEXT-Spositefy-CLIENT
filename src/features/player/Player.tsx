import { useMemo } from 'react';
import { IconButton } from '@mui/material';
import { VolumeUp as VolumeUpIcon } from '@mui/icons-material';

import { PlayerWrapper, PlayerArtistName, PlayerNameWrapper, PlayerPlayIcon, PlayerPauseIcon } from './Player.styled';
import { TrackProgress, VolumeControl } from './components';
import { usePlayer } from './usePlayer';

export const Player = () => {
  const mockTrack = useMemo(() => (
    {
      '_id': '62c498925b443cf7cd63ecdf',
      'name': 'Londongrad',
      'artist': 'Gena Bukin',
      'age': 18,
      'listens': 0,
      'picture': 'image/299b910a-8f6e-40a8-93a1-d2f44995ebe3.jpg',
      'audio': 'http://localhost:5000/audio/f1e25363-a4e0-424d-ae6f-b8e4c301084c.mp3',
      'text': 'Some text',
      'comments': [],
    }
  ), []);

  const {
    playPauseToggle,
    changeDuration,
    changeVolume,
    state,
  } = usePlayer();

  if (!state.track) {
    return null;
  }

  return (
    <PlayerWrapper>
      <IconButton
        onClick={playPauseToggle}
        size="large"
      >
        {state.isPlaying
          ? <PlayerPauseIcon />
          : <PlayerPlayIcon />}
      </IconButton>
      <PlayerNameWrapper container>
        <div>{mockTrack.name}</div>
        <PlayerArtistName>{mockTrack.artist}</PlayerArtistName>
      </PlayerNameWrapper>
      <TrackProgress
        currentDuration={state.currentTime}
        fullDuration={state.duration}
        onChange={changeDuration}
      />
      <VolumeUpIcon />
      <VolumeControl
        volume={state.volume}
        onChange={changeVolume}
      />
    </PlayerWrapper>
  );
};