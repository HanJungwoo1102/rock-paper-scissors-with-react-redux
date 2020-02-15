import { ROCK_PAPER_SCISSORS } from '../constants/rock-paper-scissors';

const createCheckShowFunction = (
    allNotShowCallback,
    notAllShowCallback,
    allShowCallback,
) => {
    return (myRpsType, otherRpsType) => {
        if (myRpsType === null && otherRpsType === null) {
            // 둘 다 안 낸 경우
            return allNotShowCallback(myRpsType, otherRpsType);
        } else if (myRpsType === null || otherRpsType === null) {
            // 둘 중 하나 안 낸 경우
            return notAllShowCallback(myRpsType, otherRpsType);
        } else {
            // 둘 다 낸 경우
            return allShowCallback(myRpsType, otherRpsType);
        }
    }
}

const createJudgeRockPaperScissors = (
    callbackIsMyTypeIsRock,
    callbackIsMyTypeIsPaper,
    callbackIsMyTypeIsScissors,
) => {
    return (myRpsType, otherRpsType) => {
        if (myRpsType === ROCK_PAPER_SCISSORS.ROCK) {
            // 내가 바위 낸 경우
            return callbackIsMyTypeIsRock(myRpsType, otherRpsType);
        } else if (myRpsType === ROCK_PAPER_SCISSORS.PAPER) {
            // 내가 보 낸 경우
            return callbackIsMyTypeIsPaper(myRpsType, otherRpsType);
        } else if (myRpsType === ROCK_PAPER_SCISSORS.SCISSORS){
            // 내가 가위 낸 경우
            return callbackIsMyTypeIsScissors(myRpsType, otherRpsType);
        }
    }
}

export const isDraw = createCheckShowFunction(
    () => true,
    () => false,
    createJudgeRockPaperScissors(
        (myRpsType, otherRpsType) => otherRpsType === ROCK_PAPER_SCISSORS.ROCK,
        (myRpsType, otherRpsType) => otherRpsType === ROCK_PAPER_SCISSORS.PAPER,
        (myRpsType, otherRpsType) => otherRpsType === ROCK_PAPER_SCISSORS.SCISSORS,
    ),
);

export const isWin = createCheckShowFunction(
    () => false,
    (myRpsType, otherRpsType) => otherRpsType === null,
    createJudgeRockPaperScissors(
        (myRpsType, otherRpsType) => otherRpsType === ROCK_PAPER_SCISSORS.SCISSORS,
        (myRpsType, otherRpsType) => otherRpsType === ROCK_PAPER_SCISSORS.ROCK,
        (myRpsType, otherRpsType) => otherRpsType === ROCK_PAPER_SCISSORS.PAPER,
    ),
);

export const isLose = createCheckShowFunction(
    () => false,
    (myRpsType, otherRpsType) => myRpsType === null,
    createJudgeRockPaperScissors(
        (myRpsType, otherRpsType) => otherRpsType === ROCK_PAPER_SCISSORS.PAPER,
        (myRpsType, otherRpsType) => otherRpsType === ROCK_PAPER_SCISSORS.SCISSORS,
        (myRpsType, otherRpsType) => otherRpsType === ROCK_PAPER_SCISSORS.ROCK,
    ),
)
