import React from 'react';
import ContactBox from './ContactBox';
import ContactDeco from './ContactDeco';
import ContactForm from './ContactForm';

const ContactContent = () => {
    return (
        <div className="contactContent">
            <ContactBox />
            <ContactForm />
            <ContactDeco />
        </div>
    );
};

export default ContactContent;