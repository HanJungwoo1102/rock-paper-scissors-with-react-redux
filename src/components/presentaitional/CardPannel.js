import React from 'react';

import Card from '../presentaitional/Card';

import { ROCK_PAPER_SCISSORS_IMAGE, ROCK_PAPER_SCISSORS } from '../../constants/rock-paper-scissors';

export default ({ rockClickHandler, paperClickHandler, scissorsClickHandler }) => {
    return (
        <div>
            <Card
                image={ROCK_PAPER_SCISSORS_IMAGE[ROCK_PAPER_SCISSORS.ROCK]}
                clickHandler={rockClickHandler}
            />
            <Card
                image={ROCK_PAPER_SCISSORS_IMAGE[ROCK_PAPER_SCISSORS.PAPER]}
                clickHandler={paperClickHandler}
            />
            <Card
                image={ROCK_PAPER_SCISSORS_IMAGE[ROCK_PAPER_SCISSORS.ROCK]}
                clickHandler={scissorsClickHandler}
            />
        </div>
    );
};