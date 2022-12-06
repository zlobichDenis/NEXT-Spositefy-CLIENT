import { put, takeLatest, call } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { trackListController } from 'api';
import { fetchTrackList, fulfilledTrackList, rejectedTrackList } from '../track-list.actions';

function* fetchTrackListWorker() {

    try {
        const trackList = yield call(trackListController.get);

        yield put(fulfilledTrackList(trackList.data));
    } catch (err) {
        const serializedError = (err as AxiosError).serialize();

        yield put(rejectedTrackList(serializedError));
    }
}

export function* fetchTrackListWatcher() {
    yield takeLatest(fetchTrackList, fetchTrackListWorker);
}