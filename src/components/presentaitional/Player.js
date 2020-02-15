import React from 'react';

export default ({ name, children }) => {
    return (
        <div>
            <div>{name}</div>
            <div>
                {children}
            </div>
        </div>
    )
};