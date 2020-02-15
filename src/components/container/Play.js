import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isDraw } from '../../lib/rock-paper-scissors';

import * as gameActions from '../../actions/status';
import * as resultActions from '../../actions/result';

import Player from '../presentaitional/Player';
import Circle from '../presentaitional/Circle';
import CardPannel from '../presentaitional/CardPannel';
import PlayTimeManager from './PlayTimeManager';

import { ROCK_PAPER_SCISSORS } from '../../constants/rock-paper-scissors';
import { PLAYER_ID } from '../../constants/player';
import { MAX_PLAY_COUNT } from '../../constants/game-setting';

export default () => {
    const dispatch = useDispatch();
    const { set: setResult, play: playResult } = useSelector((state) => state.result);
    const { game: gameStatus, set: setStatus, play: playStatus } = useSelector((state) => state.status);

    useEffect(() => {
        if (gameStatus.isStart && setStatus.isStart && !playStatus.isStart && setResult.length < MAX_PLAY_COUNT) {
            // game, set 시작했는데 play 끝났으면 start play
            // 최대 판 수 안 넘을 때까지만 start play
            dispatch(gameActions.startPlay());
        }
    }, [gameStatus.isStart, setStatus.isStart, playStatus.isStart, setResult]);

    useEffect(() => {
        if (playStatus.isStart && playResult[PLAYER_ID.PLAYER1] !== null) {
            // card 골랐을 때
            if (!isDraw(playResult[PLAYER_ID.PLAYER1], playResult[PLAYER_ID.PLAYER2])) {
                // 안 비겨야만 play 끝냄
                dispatch(gameActions.endPlay());
            } else {
                // 비기면 다시 시작
                dispatch(gameActions.startPlay());
            }
        }
    }, [playStatus.isStart, playResult]);

    useEffect(() => {
        if (playStatus.timerCount < 1) {
            dispatch(gameActions.endPlay());
        }
    }, [playStatus.timerCount]);

    return (
        <PlayTimeManager>
            <Player name='PLAYER 1'>
                <Circle show={playResult[PLAYER_ID.PLAYER1]} />
                <CardPannel
                    rockClickHandler={() => dispatch(resultActions.showRockPaperScissors(PLAYER_ID.PLAYER1, ROCK_PAPER_SCISSORS.ROCK))}
                    paperClickHandler={() => dispatch(resultActions.showRockPaperScissors(PLAYER_ID.PLAYER1, ROCK_PAPER_SCISSORS.PAPER))}
                    scissorsClickHandler={() => dispatch(resultActions.showRockPaperScissors(PLAYER_ID.PLAYER1, ROCK_PAPER_SCISSORS.SCISSORS))}
                />
            </Player>
            <Player name='PLAYER 2'>
                <Circle show={playResult[PLAYER_ID.PLAYER2]} />
            </Player>
        </PlayTimeManager>
    );
};
