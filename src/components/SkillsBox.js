import React from 'react';
import SkillsTitle from './animations/SkillsTitle';
import SkillsParaph from './animations/SkillsParaph';


function SkillsBox() {
    return (
        <div className="skillsBox">
            <SkillsTitle />
            <SkillsParaph />
        </div>
    );
}


export default SkillsBox;