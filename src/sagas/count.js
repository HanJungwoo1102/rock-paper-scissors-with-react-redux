import { eventChannel, END } from 'redux-saga';
import { call, fork, put, take, cancel, cancelled } from 'redux-saga/effects';
import {
  START_COUNTING,
  STOP_COUNTING,
  setTimerCount,
  stopCounting,
  countOver,
  COUNT_OVER,
} from '../actions/status';

const countdown = secs =>
    eventChannel(emit => {
        const counter = setInterval(() => {
            secs -= 1;
            emit(secs);
        }, 1000);

        return () => clearInterval(counter);
    });

function* countdownTask(secs) {
    const chan = yield call(countdown, secs);

    try {
        while (true) {
            const sec = yield take(chan);
            yield put(setTimerCount(sec));
            if (sec <= 0) yield put(countOver())
        }
    } finally {
        if (yield cancelled()) {
            chan.close();
        } else {
            yield put(countOver());
        }
    }
}

function* watchCountDown() {
    while (true) {
        const { payload: { maxPlayTime } } = yield take(START_COUNTING);
        const task = yield fork(countdownTask, maxPlayTime);

        const { type } = yield take([STOP_COUNTING, COUNT_OVER]);
        if (type === STOP_COUNTING) {
        } else if (type === COUNT_OVER) {
            yield put(stopCounting());
        }
        yield cancel(task);
    }
}

export default watchCountDown;
