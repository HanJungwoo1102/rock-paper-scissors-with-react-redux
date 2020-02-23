import React from 'react';
import { useSelector } from 'react-redux';

import Count from '../presentaitional/Count';

export default () => {
    const { play: playStatus } = useSelector((state) => state.status);

    return (
        <Count count={playStatus.timerCount} />
    );
};
