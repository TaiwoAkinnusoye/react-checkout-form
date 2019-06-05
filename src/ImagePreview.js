import React from 'react';
import WorkSpaceInformation from './WorkSpaceInformation';
import WorkSpaceMeta from './WorkSpaceMeta';

const ImagePreview = (props) => {
    return (
        <div className="ImagePreview" style={{'backgroundImage': 'url(' + props.image + ')'}}>
            <div className="WorkspaceOverview">
                <WorkSpaceInformation name="Coworking Space, London" price={props.price} duration="1" />
                <WorkSpaceMeta people={props.people} />
            </div>
        </div>
    );
};

export default ImagePreview;