import React from 'react';
import WorkParaph from '../animations/WorkParaph';
import WorkTitle from '../animations/WorkTitle';


function WorkBox() {
    return (
        <div className="workBox">
            <WorkTitle />
            <WorkParaph />
        </div>
    );
}


export default WorkBox;