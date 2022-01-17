import React from 'react';
import SkillsProgress from '../components/SkillsProgress';
import SkillsRow from '../components/SkillsRow';

function SkillsDetails () {
    return (
        <div className="skillsDetails">
            <SkillsProgress />
            <SkillsRow />
        </div>
    )
}

export default SkillsDetails;