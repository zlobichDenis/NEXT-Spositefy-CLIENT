import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { trackListController } from 'api';
import { fulfilledCreateNewTrack, postNewTrack, rejectedCreateNewTrack } from '../track-form.actions';

function* postNewTrackSagaWorker({ payload }) {
    try {
        const newTrack = yield call(trackListController.create, payload);

        yield put(fulfilledCreateNewTrack(newTrack.data));
    } catch (err) {
        const serializedError = (err as AxiosError).serialize();

        yield put(rejectedCreateNewTrack(serializedError));
    }
}

export function* postNewTrackSagaWatcher() {
    yield takeLatest(postNewTrack, postNewTrackSagaWorker);
}