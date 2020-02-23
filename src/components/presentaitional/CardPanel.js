import React from 'react';

import Card from './Card';

import { ROCK_PAPER_SCISSORS_TYPE } from '../../constants/rock-paper-scissors';

import './CardPanel.css';

export default ({ rockClickHandler, paperClickHandler, scissorsClickHandler }) => {
    return (
        <div className="card-panel">
            <Card
                text={ROCK_PAPER_SCISSORS_TYPE.ROCK}
                clickHandler={rockClickHandler}
            />
            <Card
                text={ROCK_PAPER_SCISSORS_TYPE.PAPER}
                clickHandler={paperClickHandler}
            />
            <Card
                text={ROCK_PAPER_SCISSORS_TYPE.SCISSORS}
                clickHandler={scissorsClickHandler}
            />
        </div>
    );
};