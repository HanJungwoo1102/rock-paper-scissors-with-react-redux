import React from 'react';

import './Card.css';

export default ({ text, clickHandler }) => {
    return (
        <div className="card" onClick={clickHandler}>
            {text}
        </div>
    );
};
