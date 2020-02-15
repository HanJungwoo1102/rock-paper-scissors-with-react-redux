import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as statusActions from '../../actions/status';

import Count from '../presentaitional/Count';

export default ({ children }) => {
    const dispatch = useDispatch();
    const { play: playStatus } = useSelector((state) => state.status);

    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        if (playStatus.isStart) {
            // play 시작했을 때
            if (!!!timerId) {
                // 타이머 돌아가는게 없을 때
                setTimerId(setInterval(() => dispatch(statusActions.countDown()), 1000));
            }
        } else {
            // play end 됐을 때
            clearInterval(timerId);
            setTimerId(null);
        }
    }, [playStatus.isStart, timerId]);

    return (
        <>
            <Count count={playStatus.timerCount} />
            {
                children
            }
        </>
    );
};
