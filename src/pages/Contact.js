import React from 'react';
import ContactContent from '../components/ContactContent';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Preloader from '../components/Preloader';

function Contact() {

    return (
        <div className="contact">
            <Navigation />
            <ContactContent />
            <Preloader />
            <Layout name="Contact" />
        </div>
    );
};

export default Contact;