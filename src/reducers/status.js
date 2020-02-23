import * as gameActions from '../actions/status';

const {
    START_GAME, END_GAME,
    START_SET, END_SET,
    START_PLAY, END_PLAY,
    START_COUNTING, SET_TIMER_COUNT,
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
    const { type, payload } = action;

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
        case START_COUNTING:
            const { maxPlayTime } = payload;
            return {
                ...state,
                play: {
                    ...state.play,
                    timerCount: maxPlayTime,
                }
            };
        case SET_TIMER_COUNT:
            return {
                ...state,
                play: {
                    ...state.play,
                    timerCount: payload.newTimerCount,
                }
            };
        case gameActions.STOP_COUNTING:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default statusReducer;
