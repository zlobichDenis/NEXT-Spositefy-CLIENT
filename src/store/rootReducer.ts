import { combineReducers } from "@reduxjs/toolkit";

import { playerSlice } from "features/player/redux/player.reducer";

export const rootReducer = combineReducers({
  player: playerSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

