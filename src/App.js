import React from 'react';

import Game from './components/container/Game';
import Score from './components/container/Score';

import './App.css';

function App() {
    return (
        <div className="App">
            <div>가위바위보</div>
            <Game/>
            <Score/>
        </div>
    );
}

export default App;
