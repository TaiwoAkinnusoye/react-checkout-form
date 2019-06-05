import React from 'react';

const Header = (props) => {
    return (
        <header>
            <span className="slider-text">
            <input onChange={props.onChange} type="range" min="1" max="30" step="1" /> Slide to change price
            </span>
        </header>
    )
};

export default Header;