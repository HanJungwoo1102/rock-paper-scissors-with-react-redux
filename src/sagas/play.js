import { cancel, cancelled, fork, put, select, take } from 'redux-saga/effects';

import * as statusActions from '../actions/status';
import * as resultActions from '../actions/result';

import { getRandomRockPapaerScissorsType, isDraw } from '../lib/rock-paper-scissors';

import { MAX_PLAY_TIME } from '../constants/game-setting';
import { PLAYER_ID } from '../constants/player';

function* playTask() {
    try {
        while (true) {
            yield put(resultActions.initResultOfPlay()); 
            yield put(statusActions.startCounting(MAX_PLAY_TIME));
            yield put(resultActions.setResultOfPlay(PLAYER_ID.PLAYER2, getRandomRockPapaerScissorsType()));
            
            const { type, payload: { playerId } } = yield take([resultActions.SET_RESULT_OF_PLAY, statusActions.COUNT_OVER]);
            if (type === resultActions.SET_RESULT_OF_PLAY) {
                if (playerId === PLAYER_ID.PLAYER1) {
                    const { play } = yield select(state => state.result);
                    yield put(statusActions.stopCounting());
                    if (!isDraw(play[PLAYER_ID.PLAYER1], play[PLAYER_ID.PLAYER2])) {
                        yield put(statusActions.endPlay());
                    }
                }
            }
            if (type === statusActions.stopCounting) {
                yield put(statusActions.endPlay());
            }
        }
    } finally {
        const { play } = yield select(state => state.result);
        yield put(resultActions.addResultOfPlayToResultOfSet(play));
        if (yield cancelled()) {
        } else {
            yield put(statusActions.endPlay());
        }
    }
}

function* watchPlay() {
    while(true) {
        yield take(statusActions.START_PLAY);

        const task = yield fork(playTask);

        yield take(statusActions.END_PLAY);
        yield cancel(task);
    }
}

export default watchPlay;
