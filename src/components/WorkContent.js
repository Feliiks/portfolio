import React from 'react';
import WorkBox from './WorkBox';
import WorkWall from './WorkWall';


function WorkContent () {
    return (
        <div className="workContent">
            <WorkBox />
            <WorkWall />
        </div>
    )
}

export default WorkContent;