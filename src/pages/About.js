import React from 'react';
import Navigation from '../components/Navigation';
import AboutContent from "../components/AboutContent";
import Preloader from '../components/Preloader';
import Layout from '../components/Layout';

function About() {

    return (
        <div className="about">
            <Navigation />
            <AboutContent />
            <Preloader />
            <Layout name="About" />
        </div>
    );
};

export default About;