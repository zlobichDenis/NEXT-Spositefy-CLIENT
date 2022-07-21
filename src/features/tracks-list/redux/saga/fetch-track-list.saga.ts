import { put, takeLatest, call } from "redux-saga/effects";

import { trackListController } from "api";
import { fetchTrackList, fulfilledTrackList, rejectedTrackList } from "../track-list.actions";

function * fetchTrackListWorker() {
  try {
    const trackList = yield call(trackListController.get);

    yield put(fulfilledTrackList(trackList));
  } catch (err: any) {
    yield put(rejectedTrackList(err));
  }
}

export function* fetchTrackListWatcher() {
  yield takeLatest(fetchTrackList, fetchTrackListWorker);
}