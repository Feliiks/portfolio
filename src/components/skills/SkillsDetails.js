import React from 'react';
import SkillsProgress from './SkillsProgress';
import SkillsRow from './SkillsRow';

function SkillsDetails () {
    return (
        <div className="skillsDetails">
            <SkillsProgress />
            <SkillsRow />
        </div>
    )
}

export default SkillsDetails;