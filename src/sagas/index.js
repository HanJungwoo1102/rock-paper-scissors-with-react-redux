import { all, fork } from 'redux-saga/effects';

import game from './game';
import set from './set';
import play from './play';
import count from './count';

export default function* rootSaga() {
    yield all([
        fork(game),
        fork(set),
        fork(play),
        fork(count),
    ])
}