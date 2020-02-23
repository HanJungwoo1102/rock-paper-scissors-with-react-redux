import React from 'react';
import { useSelector } from 'react-redux';

import SlideDown from '../presentaitional/SlideDown';

import { isWin, isLose } from '../../lib/rock-paper-scissors';
import ScorePlay from '../presentaitional/ScorePlay';

export default () => {
    const { game, set } = useSelector((state) => state.result);

    return (
        <>
            {
                game.map((set, idx) => {
                    let winCountInSet = 0;
                    let loseCountInSet = 0;
                    const playComponents = []
                    
                    set.forEach((play) => {
                        const { player1, player2 } = play;
                        let playComponent;
                        if (isWin(player1, player2)) {
                            playComponent = <ScorePlay
                                playerInfo={[{ type: player1, isWin: true }, { type: player2, isWin: false }]}
                            />;
                            winCountInSet++;
                        }

                        if (isLose(player1, player2)) {
                            playComponent = <ScorePlay
                                playerInfo={[{ type: player1, isWin: false }, { type: player2, isWin: true }]}
                            />;
                            loseCountInSet++;
                        }

                        playComponents.push(playComponent);
                    })
                    
                    return (
                        <SlideDown
                            text={`${idx+1} SET : ${winCountInSet} win / ${loseCountInSet} lose`}
                            key={idx}
                        >
                            { playComponents }
                        </SlideDown>
                    );
                })
            }
            <div>CURRENT SET</div>
            {
                set.map((play, idx) => {
                    const { player1, player2 } = play;
                    return (
                        <div key={idx}>{player1} {player2}</div>
                    );
                })
            }
        </>
    );
};