import { Grid, styled } from '@mui/material';
import { PauseCircle as PauseIcon, PlayCircle as PlayIcon } from '@mui/icons-material';

import { colors } from 'theme';

export const PlayerWrapper = styled('div')`
  z-index: 9999;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: ${colors.secondary.light};
`;

export const PlayerNameWrapper = styled(Grid)`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlayerArtistName = styled('div')`
  font-size: 12px;
  color: grey;
`;

export const PlayerPlayIcon = styled(PlayIcon)`
  width: 50px;
  height: 50px;
`;

export const PlayerPauseIcon = styled(PauseIcon)`
  width: 50px;
  height: 50px;
`;