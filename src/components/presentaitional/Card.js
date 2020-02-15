import React from 'react';

export default ({ image, clickHandler }) => {
    return (
        <div onClick={clickHandler}>
            <img src={image}/>
        </div>
    );
};
