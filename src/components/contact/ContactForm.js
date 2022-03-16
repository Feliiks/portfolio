import React, { useState, useEffect } from 'react';


const ContactForm = () => {
    useEffect(() => {
        let charts = document.querySelectorAll('.chart');

        Array.from(charts).forEach((chart, index) => {
            chart.firstChild.addEventListener('focus', () => {
                Array.from(charts).forEach((chart, index) => chart.lastChild.style.width = "0");
                chart.lastChild.style.width = "100%";
            });
        });
    });

// ---------------------------------------------------------------------

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

// --------------------------------------------------------------------
    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send("service_h4ih047", templateId, variables)
            .then((res) => {
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch(
                (err) => {
                    console.log('error');
                }
            )
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        doVerif()
    };

// ---------------------------------------------------------------------------------
const doVerif = () => {
    let formMsg = document.querySelector('.form-message');
    let form = document.querySelector('.contactForm');
    let charts = document.querySelectorAll('.chart');

    if (name && isEmail() && subject && message)
    {
        formMsg.innerHTML = 'Thank you! Your message has been sent.';
        formMsg.style.color = 'green';
        formMsg.style.transform = 'translate(10%, -1200%)'
        formMsg.style.fontSize = "20px";
        form.style.opacity = '0'
        sendFeedback("template_vpmw3ha", {
            toEmail: "sobrero.ludovic@gmail.com",
            fromName: name,
            fromEmail: email,
            subject,
            message
        });
    }
    else {
        formMsg.innerHTML = 'Oh no! Something went wrong.<br />Please check if all fields are correctly filled and retry. ';
        formMsg.style.color = 'red';
        formMsg.style.animation = 'error 0.4s ease-in-out'
        setTimeout(() => {
            formMsg.style.animation = ''
        }, 500)
        Array.from(charts).forEach((chart, index) => {
            chart.lastChild.style.width = "0";
        });
    }
}

const isEmail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
        return true;
    } else {
        return false;
    }
}

// ----------------------------------------------------------------------------------
    return (
        <>
            <form className="contactForm" id="contactForm">
                <div className="form-content">
                    <div className="chart">
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            value={name}
                        />
                        <div className="input-al"></div>
                    </div>
                    <div className="chart">
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            value={email}
                        />
                        <div className="input-al"></div>
                    </div>
                    <div className="chart">
                        <input
                            type="text"
                            id="subject"
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Subject"
                            value={subject}
                            autoComplete="off"
                        />
                        <div className="input-al"></div>
                    </div>
                    <div className="chart">
                        <textarea
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            value={message}
                        />
                        <div className="input-al"></div>
                    </div>
                </div>
                <div className="btn" onClick={handleSubmit}>
                    <div className="bg"></div>
                    <div className="base"></div>
                    <div className="text"> Submit </div>
                </div>
            </form>
            <div className="form-message"></div>
        </>
    );
};

export default ContactForm;