import { all } from '@redux-saga/core/effects';

import { fetchTrackListWatcher } from 'features/tracks-list/redux/saga';

export function* rootWatcher() {
    yield all([
        fetchTrackListWatcher(),
    ]);
}

