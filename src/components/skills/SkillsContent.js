import React from 'react';
import SkillsBox from './SkillsBox';
import SkillsDetails from './SkillsDetails';


function SkillsContent () {
    return (
        <div className="skillsContent">
            <SkillsBox />
            <SkillsDetails />
        </div>
    )
}

export default SkillsContent;