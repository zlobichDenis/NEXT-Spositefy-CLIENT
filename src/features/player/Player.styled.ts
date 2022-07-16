import { Grid, styled } from "@mui/material";
import { VolumeUp } from "@mui/icons-material";

import { colors } from 'theme';

export const PlayerWrapper = styled('div')`
  z-index: 9999;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background-color: ${colors.secondary.light};
`;

export const PlayerControlWrapper = styled(Grid)`
  width: 200px;
  margin: 0 20px;
  flex-direction: column;
`;

export const PlayerNameWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PlayerArtistName = styled('div')`
  font-size: 12px;
  color: grey;
`;

export const PlayerVolumeUpIcon = styled(VolumeUp)`
  margin-left: auto;
`;