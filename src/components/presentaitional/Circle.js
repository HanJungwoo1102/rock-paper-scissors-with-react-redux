import React from 'react';

import { ROCK_PAPER_SCISSORS_IMAGE } from '../../constants/rock-paper-scissors';

export default ({ show }) => {
    return (
        <div>
            <img src={ROCK_PAPER_SCISSORS_IMAGE[show]}/>
        </div>
    );
};