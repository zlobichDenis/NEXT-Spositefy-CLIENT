import { Card, Grid, IconButton, styled, Typography } from "@mui/material";

import { colors } from "theme";

export const TrackItemCard = styled(Card)`
  padding: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background-color: ${colors.primary.light};
  }
`;

export const TrackItemCardPicture = styled('img')`
  margin: 6px 18px;
  width: 70px;
  height: 70px;
`;

export const TrackItemCardDetails = styled(Grid)`
  width: 200px;
  flex-direction: column;
`;

export const TrackItemCardDetailsName = styled(Typography)`
  font-size: 14px;
`;

export const TrackItemCardDetailsArtist = styled(Typography)`
  font-size: 12px;
`;

export const TrackItemCardDuration = styled(Typography)`
  font-size: 8px;
`;

export const TrackItemCardDeleteButton = styled(IconButton)`
  margin-left: auto;
`;