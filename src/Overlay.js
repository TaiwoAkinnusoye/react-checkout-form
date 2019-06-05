import React from 'react';

const Overlay = (props) => {
    return (
        <div className="Overlay" style={{'backgroundImage': 'url(' + props.image + ')'}}>
            anything
        </div>
    )
};

export default Overlay;