import React from 'react';
import Navigation from '../components/Navigation';
import SkillsContent from '../components/SkillsContent';
import Preloader from '../components/Preloader';
import Layout from '../components/Layout';

function Skills() {

    return (
        <div className="skills">
            <Navigation />
            <SkillsContent />
            <Preloader />
            <Layout name="Skills" />
        </div>
    );
};

export default Skills;