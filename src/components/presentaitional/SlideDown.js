import React, { useState } from 'react';

import './SlideDown.css';

export default ({ text, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="slide-down">
            <div onClick={() => setIsOpen(!isOpen)}>{text}</div>
            {
                isOpen &&
                children
            }
        </div>
    );
};
