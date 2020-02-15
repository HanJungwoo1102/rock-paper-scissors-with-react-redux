import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as statusActions from '../../actions/status';

import Play from './Play';

import { MAX_PLAY_COUNT, MAX_SET_COUNT } from '../../constants/game-setting';

export default () => {
    const dispatch = useDispatch();
    const { game: gameResult, set: setResult } = useSelector((state) => state.result);
    const { game: gameStatus, set: setStatus } = useSelector((state) => state.status);

    useEffect(() => {
        if (gameStatus.isStart && !setStatus.isStart && gameResult.length < MAX_SET_COUNT) {
            // 게임 시작했고 세트 시작 안했고
            // 이제까지 한 세트수가 최대 세트 수 안넘었을 경우 start set
            dispatch(statusActions.startSet());
        }
    }, [gameStatus.isStart, setStatus.isStart, gameResult]);

    useEffect(() => {
        if (setResult.length >= MAX_PLAY_COUNT) {
            // 세트 당 판 수 채우면 세트 종료
            dispatch(statusActions.endSet());
        }
    }, [setResult]);

    useEffect(() => {
        // 게임 당 세트 수 채우면 게임 종료
        if (gameResult.length >= MAX_SET_COUNT) {
            dispatch(statusActions.endGame());
        }
    }, [gameResult]);

    return (
        <>
            <div className="play-wrapper">
                <Play/>
            </div>
        </>
    );
};
