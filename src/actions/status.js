// action types
export const START_GAME = 'status/START_GAME';
export const STOP_GAME = 'status/STOP_GAME';
export const END_GAME = 'status/END_GAME';

export const START_SET = 'status/START_SET';
export const END_SET = 'status/END_SET';

export const START_PLAY = 'status/START_PLAY';
export const END_PLAY = 'status/END_PLAY';

export const START_COUNTING = 'status/START_COUNTING';
export const SET_TIMER_COUNT = 'status/SET_TIMER_COUNT';
export const COUNT_OVER = 'status/COUNT_OVER';
export const STOP_COUNTING = 'status/STOP_COUNTING';

// action creator
export const startGame = () => {
    return {
        type: START_GAME,
    };
};

export const stopGame = () => {
    return {
        type: STOP_GAME,
    };
};

export const endGame = () => {
    return {
        type: END_GAME,
    };
};

export const startSet = () => {
    return {
        type: START_SET,
    };
};

export const endSet = () => {
    return {
        type: END_SET,
    };
};

export const startPlay = () => {
    return {
        type: START_PLAY,
    };
};

export const endPlay = () => {
    return {
        type: END_PLAY,
    };
};

export const startCounting = (maxPlayTime) => {
    return {
        type: START_COUNTING,
        payload: {
            maxPlayTime,
        },
    };
};

export const setTimerCount = (newTimerCount) => {
    return {
        type: SET_TIMER_COUNT,
        payload: {
            newTimerCount,
        },
    };
};

export const countOver = () => {
    return {
        type: COUNT_OVER,
    };
};

export const stopCounting = () => {
    return {
        type: STOP_COUNTING,
    };
};
