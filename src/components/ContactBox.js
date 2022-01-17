import React from 'react';
import ContactParaph from './animations/ContactParaph';
import ContactTitle from './animations/ContactTitle';

const ContactBox = () => {
    return (
        <div className="contactBox">
            <ContactTitle />
            <ContactParaph />
        </div>
    );
};

export default ContactBox;