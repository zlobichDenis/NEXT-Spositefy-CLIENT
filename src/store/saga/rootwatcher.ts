import { all } from '@redux-saga/core/effects';

import { fetchTrackListWatcher } from 'features/tracks-list/redux/saga';
import { postNewTrackSagaWatcher } from 'features/track-form/redux/saga';

export function* rootWatcher() {
    yield all([
        fetchTrackListWatcher(),
        postNewTrackSagaWatcher(),
    ]);
}

