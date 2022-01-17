import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import WorkContent from '../components/WorkContent';
import Preloader from '../components/Preloader';

function Work() {

    return (
        <div className="work">
            <Navigation />
            <WorkContent />
            <Preloader />
            <Layout name="Work" />
        </div>
    );
};

export default Work;