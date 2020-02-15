// action types
export const SHOW_ROCK_PAPER_SCISSORS = 'result/SHOW_ROCK_PAPER_SCISSORS';

// action creator
export const showRockPaperScissors = (playerId, rockPaperScissorsType) => {
    return {
        type: SHOW_ROCK_PAPER_SCISSORS,
        payload: {
            playerId,
            rockPaperScissorsType,
        },
    };
};
