import { CircularProgress } from '@mui/material';

import { useRoute } from 'hooks';
import { routes } from 'shared';
import {
    TrackListContainer,
    TrackListBox,
} from './TrackList.styled';
import { TrackItem } from './components';
import { useTrackList } from './useTrackList';

export const TrackList = () => {
    const routeTo = useRoute();
    const { changePlayingTrack, tracks } = useTrackList();

    return (
        <TrackListContainer container>
            <TrackListBox>
                {tracks ? (
                    tracks.map((track) => {
                        return (
                            <TrackItem
                                key={track._id}
                                track={track}
                                onCardClick={routeTo(routes.trackDetails(track._id))}
                                onPlayClick={changePlayingTrack(track)}
                            />
                        )
                    })
                ) : (
                    <CircularProgress/>
                )}
            </TrackListBox>
        </TrackListContainer>
    )
};