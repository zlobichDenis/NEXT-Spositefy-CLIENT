import { useCallback } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

import { MainLayout } from "layouts";
import {
  TrackListCardContent,
  TrackListContainer,
  TrackListCard,
  TrackListCardBox,
} from "./TracksList.styled";
import { CREATE_TRACK_FORM_PATH } from "./constants";

export const TracksList = () => {
  const { push } = useRouter();

  const routeToTrackForm = useCallback(() => {
    push(CREATE_TRACK_FORM_PATH);
  }, [push]);

  return (
    <MainLayout>
      <TrackListContainer container>
        <TrackListCard>
          <TrackListCardBox>
            <TrackListCardContent container>
              <h1>List of tracks</h1>
              <Button onClick={routeToTrackForm}>
                Upload
              </Button>
            </TrackListCardContent>
          </TrackListCardBox>
        </TrackListCard>
      </TrackListContainer>
    </MainLayout>
  )
};