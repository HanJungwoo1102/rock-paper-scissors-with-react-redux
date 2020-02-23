import * as resultActions from '../actions/result';

import { PLAYER_ID } from '../constants/player';

const {
    INIT_RESULT_OF_GAME, INIT_RESULT_OF_PLAY, INIT_RESULT_OF_SET,
    ADD_RESULT_OF_SET_TO_RESULT_OF_GAME, ADD_RESULT_OF_PLAY_TO_RESULT_OF_SET, SET_RESULT_OF_PLAY,
} = resultActions;

const initialStatePlay = Object.values(PLAYER_ID).reduce((acc, curId) => {
    const newPlay = { ...acc }
    newPlay[curId] = null;
    return newPlay;
}, {})

const initialState = {
    play: initialStatePlay,
    set: [],
    game: [],
};

const resultReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case INIT_RESULT_OF_GAME: {
            return {
                ...state,
                game: [],
            };
        }
        case INIT_RESULT_OF_SET: {
            return {
                ...state,
                set: [],
            };
        }
        case INIT_RESULT_OF_PLAY: {
            return {
                ...state,
                play: {
                    ...initialStatePlay,
                }
            }
        }
        case ADD_RESULT_OF_SET_TO_RESULT_OF_GAME: {
            const { resultOfSet } = payload;
            const newResultOfSet = [...resultOfSet];

            return {
                ...state,
                game: [...state.game, newResultOfSet],
            };
        }
        case ADD_RESULT_OF_PLAY_TO_RESULT_OF_SET: {
            const { resultOfPlay } = payload;
            const newResultOfPlay = { ...resultOfPlay }
            return {
                ...state,
                set: [...state.set, newResultOfPlay],
            };
        }
        case SET_RESULT_OF_PLAY: {
            const { playerId, rockPaperScissorsType } = payload;

            const newResultOfPlay = { ...state.play };
            newResultOfPlay[playerId] = rockPaperScissorsType;

            return {
                ...state,
                play: newResultOfPlay,
            };
        }
        default:
            return state;
    }
};

export default resultReducer;