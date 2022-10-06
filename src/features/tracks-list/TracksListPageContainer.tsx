import { useCallback } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

import { MainLayout } from "layouts";
import { TrackList } from "./TrackList";
import {
  TrackListCardContent,
  TrackListContainer,
  TrackListCard,
  TrackListCardBox,
} from "./TracksListPageContainer.styled";
import { CREATE_TRACK_FORM_PATH } from "./constants";

export const TracksListPageContainer = () => {
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
              <Button className="upload-button" onClick={routeToTrackForm}>
                Upload
              </Button>
            </TrackListCardContent>
          </TrackListCardBox>

          <TrackList  />

        </TrackListCard>
      </TrackListContainer>
    </MainLayout>
  )
};