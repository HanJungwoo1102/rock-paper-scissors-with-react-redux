import * as gameActions from '../actions/status';
import * as resultActions from '../actions/result';

import { PLAYER_ID } from '../constants/player';

import { ROCK_PAPER_SCISSORS } from '../constants/rock-paper-scissors';

const {
    START_GAME, END_GAME,
    START_SET, END_SET,
    START_PLAY, END_PLAY,
} = gameActions;
const { SHOW_ROCK_PAPER_SCISSORS } = resultActions;

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
        case START_GAME:
            return {
                ...state,
                game: [],
            };
        case END_GAME:
            return {
                ...state,
                set: [],
                play: {
                    ...state.play,
                    player1: null,
                    player2: null,
                },
            }
        case START_SET:
            return {
                ...state,
                set: [],
            };
        case END_SET:
            return {
                ...state,
                game: [...state.game, state.set],
            };
        case START_PLAY:
            return {
                ...state,
                play: {
                    ...state.play,
                    player1: null,
                    player2: Object.values(ROCK_PAPER_SCISSORS)[Math.floor(Math.random()*3)],
                },
            };
        case END_PLAY:
            return {
                ...state,
                set: [...state.set, state.play],
            }
        case SHOW_ROCK_PAPER_SCISSORS:
            const newPlay = { ...state.play };
            newPlay[payload.playerId] = payload.rockPaperScissorsType;
            return {
                ...state,
                play: newPlay,
            };
        default:
            return state;
    }
};

export default resultReducer;