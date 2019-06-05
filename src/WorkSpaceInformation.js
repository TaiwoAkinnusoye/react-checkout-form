import React from 'react';

const WorkSpaceInformation = (props) => {
        if (props.duration > 1) {
            var duration = props.duration + 'days';
        } else {
            var duration = props.duration + 'day';
        }
        return (
            <div className="WorkspaceInformation">
                <div className="Workspacename">{props.name}</div>
                <div className="WorkspacePrice">
                    <div className="Price">{props.price} GBP</div>
                    <div className="Duration">/ {duration}</div>
                </div>
            </div>
        )
    
};

export default WorkSpaceInformation;