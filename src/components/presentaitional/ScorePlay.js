import React from 'react';

import './ScorePlay.css';

export default ({ playerInfo }) => {
    return (
        <div className="score-play">
            {
                playerInfo.map((play, idx) => {
                    return <div className={`score-player score-player${idx + 1} ${play.isWin ? 'win' : ''}`}>{play.type}</div>
                })
            }
        </div>
    );
};
