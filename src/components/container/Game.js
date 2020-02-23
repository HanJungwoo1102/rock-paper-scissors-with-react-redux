import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as resultActions from '../../actions/result';

import Player from '../presentaitional/Player';
import Circle from '../presentaitional/Circle';
import CardPanel from '../presentaitional/CardPanel';

import { ROCK_PAPER_SCISSORS_TYPE } from '../../constants/rock-paper-scissors';
import { PLAYER_ID } from '../../constants/player';

export default () => {
    const dispatch = useDispatch();
    const { play: playStatus } = useSelector(state => state.status);
    const { play: playResult } = useSelector(state => state.result);

    const [handOfPlayer1, setHandOfPlayer1] = useState('');
    const [handOfPlayer2, setHandOfPlayer2] = useState('');

    useEffect(() => {
        if (playStatus.isStart) {
            setHandOfPlayer1('');
            setHandOfPlayer2('');
        } else {
            setHandOfPlayer1(playResult[PLAYER_ID.PLAYER1]);
            setHandOfPlayer2(playResult[PLAYER_ID.PLAYER2]);
        }
    }, [playStatus.isStart, playResult]);

    return (
        <>
            <Player name='PLAYER 1'>
                <Circle text={handOfPlayer1} />
                <CardPanel
                    rockClickHandler={() => dispatch(resultActions.setResultOfPlay(PLAYER_ID.PLAYER1, ROCK_PAPER_SCISSORS_TYPE.ROCK))}
                    paperClickHandler={() => dispatch(resultActions.setResultOfPlay(PLAYER_ID.PLAYER1, ROCK_PAPER_SCISSORS_TYPE.PAPER))}
                    scissorsClickHandler={() => dispatch(resultActions.setResultOfPlay(PLAYER_ID.PLAYER1, ROCK_PAPER_SCISSORS_TYPE.SCISSORS))}
                />
            </Player>
            <Player name='PLAYER 2'>
                <Circle text={handOfPlayer2} />
            </Player>
        </>
    );
};
