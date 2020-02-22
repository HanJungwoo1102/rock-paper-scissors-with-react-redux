import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as statusActions from '../actions/status';

function startGame() {
    console.log(111111)
}

function startSet() {

}

function startPlay() {

}

function* watchGetData() {
    yield takeEvery(statusActions.START_GAME, startGame);
    yield takeEvery(statusActions.START_SET, startSet);
    yield takeEvery(statusActions.START_PLAY, startPlay);
}

export default function* infoSaga() {
    yield all([
        fork(watchGetData),
    ]);
}
