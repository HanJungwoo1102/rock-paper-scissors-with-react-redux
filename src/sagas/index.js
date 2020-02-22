import { all, fork } from 'redux-saga/effects';

import play from './play';

export default function* rootSaga() {
    yield all([
        fork(play),
    ])
}