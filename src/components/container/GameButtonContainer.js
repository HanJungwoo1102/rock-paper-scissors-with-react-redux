import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as statusActions from '../../actions/status';

export default () => {
    const dispatch = useDispatch();
    const { game: gameStatus } = useSelector((state) => state.status);

    return (
        <>
        {
            !gameStatus.isStart ?
                <div className="game-button"
                    onClick={() => dispatch(statusActions.startGame())}
                >
                    START
                </div>
            :
                <>
                    <div className="game-button"
                        onClick={() => {
                            dispatch(statusActions.stopGame());
                            dispatch(statusActions.startGame());
                        }}
                    >
                        RESTART
                    </div>
                    <div className="game-button"
                        onClick={() => dispatch(statusActions.stopGame())}
                    >
                        END
                    </div>
                </>
        }
        </>
    );
};
