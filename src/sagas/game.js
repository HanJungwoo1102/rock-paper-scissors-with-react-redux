import { cancel, cancelled, fork, put, take } from 'redux-saga/effects';

import * as statusActions from '../actions/status';
import * as resultActions from '../actions/result';

import { MAX_SET_COUNT } from '../constants/game-setting';

function* gameTask() {
    try {
        yield put(resultActions.initResultOfGame()); 

        for (let i = 0; i < MAX_SET_COUNT; i++) {
            yield put(statusActions.startSet());
            yield take(statusActions.END_SET);
        }

        yield put(statusActions.endGame());
    } finally {
        if (yield !cancelled()) {
            yield put(statusActions.endGame());
        }
    }
}

function* watchGame() {
    while (true) {
        yield take(statusActions.START_GAME);
        
        const task = yield fork(gameTask);

        const { type } = yield take([statusActions.END_GAME, statusActions.STOP_GAME]);
        yield cancel(task);
        if (type === statusActions.STOP_GAME) {
            yield put(statusActions.endSet());
            yield put(statusActions.endPlay());
            yield put(statusActions.stopCounting());
        }
    }
}

export default watchGame;
