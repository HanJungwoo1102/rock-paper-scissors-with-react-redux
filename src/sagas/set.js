import { cancel, cancelled, fork, put, select, take, delay } from 'redux-saga/effects';

import * as statusActions from '../actions/status';
import * as resultActions from '../actions/result';

import { MAX_PLAY_COUNT, TIME_BETWEEN_PLAY } from '../constants/game-setting';

function* setTask() {
    try {
        yield put(resultActions.initResultOfSet());
        for(let i =0; i < MAX_PLAY_COUNT; i++) {
            yield put(statusActions.startPlay());
            yield take(statusActions.END_PLAY);
            yield delay(TIME_BETWEEN_PLAY);
        }
        yield put(statusActions.endSet());
    } finally {
        if (yield cancelled()) {
            const { set } = yield select(state => state.result)
            yield put(resultActions.addResultOfSetToResultOfGame(set));
        } else {
            yield put(statusActions.endSet());
        }
    }
}

function* watchSet() {
    while (true) {
        yield take(statusActions.START_SET);
        
        const task = yield fork(setTask);

        yield take(statusActions.END_SET);
        yield cancel(task);
    }
}

export default watchSet;
