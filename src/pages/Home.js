import React from 'react'
import Navigation from '../components/Navigation';
import Wbox from '../components/Wbox';
import Preloader from '../components/Preloader';
import Layout from '../components/Layout';


function Home() {
    return (
        <div className="home">
            <Navigation />
            <Wbox />
            <Preloader />
            <Layout name="Home" />
        </div>
    );
};

export default Home;