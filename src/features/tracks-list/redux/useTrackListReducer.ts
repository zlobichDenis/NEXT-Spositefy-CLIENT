import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "store";
import { selectTrackListData, selectTrackListError, selectTrackListState } from "./tracks-list.slice";
import { fetchTrackList } from "./track-list.actions";

export const useTrackListReducer = () => {
  const state = useAppSelector(selectTrackListState);
  const data = useAppSelector(selectTrackListData);
  const error = useAppSelector(selectTrackListError);

  const dispatch = useAppDispatch();

  const getTrackList = useCallback(() => dispatch(fetchTrackList()), [dispatch]);

  return {
    state,
    data,
    error,
    getTrackList,
  };
};
