import { useMemo } from "react";

import { Track } from "types";
import { useRoute } from "hooks";
import { routes } from "shared";
import {
  TrackListContainer,
  TrackListBox,
} from "./TrackList.styled";
import { TrackItem } from "./components";
import { useTrackList } from "./useTrackList";

export const TrackList = () => {
  const mockTracks: Track[] = useMemo(() => (
    [
      {
        "_id": "62c498925b443cf7cd63ecdf",
        "name": "Londongrad",
        "artist": "Gena Bukin",
        "age": 18,
        "listens": 0,
        "picture": "image/299b910a-8f6e-40a8-93a1-d2f44995ebe3.jpg",
        "audio": "http://localhost:5000/audio/f1e25363-a4e0-424d-ae6f-b8e4c301084c.mp3",
        "text": "Some text",
        "comments": [],
      },
      {
        "_id": "62c498925b443cf7cd63ecdf1",
        "name": "Londongrad",
        "artist": "Gena Bukin",
        "age": 18,
        "listens": 0,
        "picture": "image/299b910a-8f6e-40a8-93a1-d2f44995ebe3.jpg",
        "audio": "http://localhost:5000/audio/f1e25363-a4e0-424d-ae6f-b8e4c301084c.mp3",
        "text": "Some text",
        "comments": [],
      },
    ]
  ), []);

  const routeTo = useRoute();
  const { changePlayingTrack  } = useTrackList();

  return (
    <TrackListContainer container>
      <TrackListBox>
        {mockTracks.map((track) => {
          return (
            <TrackItem
              key={track._id}
              track={track}
              onCardClick={routeTo(routes.trackDetails(track._id))}
              onPlayClick={changePlayingTrack(track)}
            />
          )
        })}
      </TrackListBox>
    </TrackListContainer>
  )
};