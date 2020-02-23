// action types
export const INIT_RESULT_OF_PLAY = 'result/INIT_RESULT_OF_PLAY';
export const INIT_RESULT_OF_SET = 'result/INIT_RESULT_OF_SET';
export const INIT_RESULT_OF_GAME = 'result/INIT_RESULT_OF_GAME';

export const SET_RESULT_OF_PLAY = 'result/SET_RESULT_OF_PLAY';
export const ADD_RESULT_OF_PLAY_TO_RESULT_OF_SET = 'result/ADD_RESULT_OF_PLAY_TO_RESULT_OF_SET';
export const ADD_RESULT_OF_SET_TO_RESULT_OF_GAME = 'result/ADD_RESULT_OF_SET_TO_RESULT_OF_GAME';

// action creator
export const initResultOfPlay = () => {
    return { type: INIT_RESULT_OF_PLAY };
};

export const initResultOfSet = () => {
    return { type: INIT_RESULT_OF_SET };
};

export const initResultOfGame = () => {
    return { type: INIT_RESULT_OF_GAME };
};

export const setResultOfPlay = (playerId, rockPaperScissorsType) => {
    return {
        type: SET_RESULT_OF_PLAY,
        payload: {
            playerId,
            rockPaperScissorsType,
        },
    };
};

export const addResultOfPlayToResultOfSet = (resultOfPlay) => {
    return {
        type: ADD_RESULT_OF_PLAY_TO_RESULT_OF_SET,
        payload: {
            resultOfPlay,
        },
    };
};

export const addResultOfSetToResultOfGame = (resultOfSet) => {
    return {
        type: ADD_RESULT_OF_SET_TO_RESULT_OF_GAME,
        payload: {
            resultOfSet,  
        },
    };
};
