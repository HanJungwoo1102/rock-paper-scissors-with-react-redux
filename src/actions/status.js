// action types
export const START_GAME = 'status/START_GAME';
export const END_GAME = 'status/END_GAME';

export const START_SET = 'status/START_SET';
export const END_SET = 'status/END_SET';

export const START_PLAY = 'status/START_PLAY';
export const END_PLAY = 'status/END_PLAY';

export const COUNT_DOWN_TIMER = 'status/COUNT_DOWN_TIMER';

// action creator
export const startGame = () => {
    return {
        type: START_GAME,
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

export const countDown = () => {
    return {
        type: COUNT_DOWN_TIMER,
    }
}
