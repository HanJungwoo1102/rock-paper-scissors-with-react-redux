import React from 'react';

import Game from './components/container/Game';
import Score from './components/container/Score';
import PlayTimeManager from './components/container/PlayTimeManager';
import GameStartButton from './components/container/GameStartButton';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="app-title">Rock Paper Scissors</div>
            <PlayTimeManager/>
            <div className="game-wrapper">
                <Game/>
            </div>
            <div className="button-container">
                <GameStartButton/>
            </div>
            <div className="score-wrapper">
                <Score/>
            </div>
        </div>
    );
}

export default App;
