import { combineReducers } from '@reduxjs/toolkit';

import { playerSlice } from 'features/player/redux/player.slice';
import { tracksListSlice } from 'features/tracks-list/redux/tracks-list.slice';
import { trackFormSlice } from 'features/track-form/redux/track-form.slice';

export const rootReducer = combineReducers({
    player: playerSlice.reducer,
    trackList: tracksListSlice.reducer,
    trackForm: trackFormSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

