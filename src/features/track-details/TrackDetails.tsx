import { Button, Grid, TextField } from "@mui/material";

import { routes } from "shared";
import { MainLayout } from "layouts";
import { useRoute } from "hooks";
import {
  TrackDetailsBackToListButton,
  TrackDetailsPicture,
  TrackDetailsInfoWrapper,
  TrackDetailsContainer,
} from "./TrackDetails.styled";

// TODO will removed when connection with BA will be established
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

export const TrackDetails = () => {
  const routeTo = useRoute();

  return (
    <MainLayout>
      <TrackDetailsContainer container>
        <TrackDetailsBackToListButton
          variant="outlined"
          onClick={routeTo(routes.TRACKS)}
        >
          Back to list
        </TrackDetailsBackToListButton>
        <TrackDetailsInfoWrapper container>
          <TrackDetailsPicture src={mockTrack.picture} />
          <div>
            <h3>{mockTrack.name}</h3>
            <h3>{mockTrack.artist}</h3>
            <h3>{mockTrack.listens}</h3>
          </div>
        </TrackDetailsInfoWrapper>
        <h3>Track text content</h3>
        <p>{mockTrack.text}</p>
        <Grid>
          <h3>Комментарии</h3>
          <TextField
            label="Your name"
            fullWidth
          />
          <TextField
            label="Your comment"
            fullWidth
            multiline
            rows={4}
          />
          <Button>
            Submit
          </Button>
        </Grid>
        <div>
          {mockTrack.comments.map(({ username, text }) => {
            return (
              <div key={text}>
                <div>{username}</div>
                <div>{text}</div>
              </div>
            )
          })}
        </div>
      </TrackDetailsContainer>
    </MainLayout>
  )
};