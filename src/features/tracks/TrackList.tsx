import { Track } from "types";
import { useRoute } from "hooks";
import { routes } from "shared";
import {
  TrackListContainer,
  TrackListBox,
} from "./TrackList.styled";
import { TrackItem } from "./components";

// TODO remove when connection with BA will be established
const mockTracks: Track[] = [
  {
    _id: '1',
    name: 'Name 1',
    artist: 'Artist 1',
    text: 'Text 1',
    listens: 1,
    picture: 'picture 1',
    audio: ' audio 1',
    comment:[{
      _id: '1a',
      username: 'Name 1a',
      text: 'text 1a',
    }],
  },
  {
    _id: '2',
    name: 'Name 2',
    artist: 'Artist 2',
    text: 'Text 2',
    listens: 2,
    picture: 'picture 2',
    audio: ' audio 2',
    comment:[{
      _id: '2a',
      username: 'Name 2a',
      text: 'text 2a',
    }],
  },
  {
    _id: '3',
    name: 'Name 3',
    artist: 'Artist 3',
    text: 'Text 3',
    listens: 3,
    picture: 'picture 3',
    audio: ' audio 3',
    comment:[{
      _id: '3a',
      username: 'Name 3a',
      text: 'text 3a',
    }],
  }
];

export const TrackList = () => {
  const routeTo = useRoute();

  return (
    <TrackListContainer container>
      <TrackListBox>
        {mockTracks.map((track) => {
          return (
            <TrackItem
              key={track._id}
              track={track}
              onCardClick={routeTo(routes.trackDetails(track._id))}
            />
          )
        })}
      </TrackListBox>
    </TrackListContainer>
  )
};