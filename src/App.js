import React from 'react';

import Game from './components/container/Game';
import Score from './components/container/Score';
import PlayTime from './components/container/PlayTime';
import GameButtonContainer from './components/container/GameButtonContainer';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="app-title">Rock Paper Scissors</div>
            <PlayTime/>
            <div className="game-wrapper">
                <Game/>
            </div>
            <div className="button-container">
                <GameButtonContainer/>
            </div>
            <div className="score-wrapper">
                <Score/>
            </div>
        </div>
    );
}

export default App;
