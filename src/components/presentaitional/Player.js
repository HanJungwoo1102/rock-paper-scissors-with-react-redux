import React from 'react';

import './Player.css';

export default ({ name, children }) => {
    return (
        <div className="player">
            <div>{name}</div>
            {children}
        </div>
    )
};