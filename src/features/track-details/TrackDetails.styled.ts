import { styled, Button, Grid } from '@mui/material';

export const TrackDetailsContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

export const TrackDetailsInfoWrapper = styled(Grid)`
  margin: 20px 0;
`;

export const TrackDetailsBackToListButton = styled(Button)`
  font-size: 32px;
`;

export const TrackDetailsPicture = styled('img')`
  width: 200px;
  height: 200px;
`;