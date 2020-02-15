import React from 'react';

import Card from './Card';

import { ROCK_PAPER_SCISSORS_IMAGE, ROCK_PAPER_SCISSORS } from '../../constants/rock-paper-scissors';

import './CardPanel.css';

export default ({ rockClickHandler, paperClickHandler, scissorsClickHandler }) => {
    return (
        <div className="card-panel">
            <Card
                text={ROCK_PAPER_SCISSORS.ROCK}
                clickHandler={rockClickHandler}
            />
            <Card
                text={ROCK_PAPER_SCISSORS.PAPER}
                clickHandler={paperClickHandler}
            />
            <Card
                text={ROCK_PAPER_SCISSORS.SCISSORS}
                clickHandler={scissorsClickHandler}
            />
        </div>
    );
};