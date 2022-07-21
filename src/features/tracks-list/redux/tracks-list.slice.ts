import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { Track } from "types";
import { REDUX_STATES } from "shared";
import { fetchTrackList, fulfilledTrackList, rejectedTrackList } from "./track-list.actions";

type TracksListState = {
  state: REDUX_STATES;
  data?: Track[];
  error?: AxiosError;
};

const initialState: TracksListState = {
  state: REDUX_STATES.IDLE,
};

export const tracksListSlice = createSlice({
  name: 'track-list',
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchTrackList, (state) => {
      state.state = REDUX_STATES.PENDING;
    });

    builder.addCase(fulfilledTrackList, (state, { payload }) => {
      state.state = REDUX_STATES.FULFILLED;
      state.data = payload;
    });

    builder.addCase(rejectedTrackList, (state, { payload }) => {
      state.state = REDUX_STATES.REJECTED;
      state.error = payload;
    });
  }),
});