import * as gameActions from '../actions/status';

import { MAX_PLAY_TIME } from '../constants/game-setting';

const {
    START_GAME, END_GAME,
    START_SET, END_SET,
    START_PLAY, END_PLAY,
    COUNT_DOWN_TIMER,
} = gameActions;

const initialState = {
    play: {
        isStart: false,
        timerCount: 0,
    },
    set: {
        isStart: false,
    },
    game: {
        isStart: false,
    },
};

const statusReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case START_GAME:
            return {
                ...state,
                game: {
                    isStart: true,
                },
            };
        case END_GAME:
            return {
                ...state,
                game: {
                    isStart: false,
                },
            };
        case START_SET:
            return {
                ...state,
                set: {
                    isStart: true,
                },
            };
        case END_SET:
            return {
                ...state,
                set: {
                    isStart: false,
                },
            };
        case START_PLAY:
            return {
                ...state,
                play: {
                    ...state.play,
                    isStart: true,
                    timerCount: MAX_PLAY_TIME,
                },
            };
        case END_PLAY:
            return {
                ...state,
                play: {
                    ...state.play,
                    isStart: false,
                },
            };
        case COUNT_DOWN_TIMER: {
            return {
                ...state,
                play: {
                    ...state.play,
                    timerCount: state.play.timerCount -1,
                }
            }
        }
        default:
            return state;
    }
};

export default statusReducer;
