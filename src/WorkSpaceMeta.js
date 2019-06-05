import React, {Component} from 'react';

const WorkSpaceMeta = (props) => {
        if(props.people > 1) {
            var people = props.people + 'people'
        } else {
            var people = props.people + 'person';
        }
        return (
            <div className="WorkspaceMeta">
                <div className="Description">Entire Space for <strong>{people}</strong> </div>
                <div className="Dates"> <strong>Mon, Aug 22, 2019</strong> to <strong>Fri, Aug 26, 2019</strong> </div>
            </div>
        );
};

export default WorkSpaceMeta;