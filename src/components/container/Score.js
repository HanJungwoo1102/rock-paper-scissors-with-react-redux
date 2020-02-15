import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
    const { game, set, play } = useSelector((state) => state.result);
    const status = useSelector((state) => state.status);
    return (
        <>
            {
                <>
                    <div>game {status.game.isStart ? 'start' : 'end'}</div>
                    <div>set {status.set.isStart ? 'start' : 'end'}</div>
                    <div>play {status.play.isStart ? 'start' : 'end'}</div>
                </>
            }
            {
                game && game.map(set => {
                    return (
                        <>
                            <div>set 승리</div>
                            {
                                set.map((play) => {
                                    const { player1, player2 } = play;
                                    return (
                                        <div>{player1} {player2}</div>
                                    );
                                })
                            }
                        </>
                    );
                })
            }
            <div>현재 set</div>
            {
                set && set.map((play) => {
                    const { player1, player2 } = play;
                    return (
                        <div>{player1} {player2}</div>
                    );
                })
            }
        </>
    );
};