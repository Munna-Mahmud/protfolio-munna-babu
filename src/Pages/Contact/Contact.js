import React from 'react';
import emailjs from 'emailjs-com';
import Navigation from './../Home/Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Form } from 'react-bootstrap';


const Contact = () => {
   

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3t0rmfh', 'template_la52irp','tWUI8FBhIsNzjV9Li7Lei')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
           e.target.reset()
    };
    return (
        <div id="contact">
            <Navigation></Navigation>

            <Form  onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" placeholder="your name" />
                <label>Email</label>
                <input type="email" name="email" placeholder="your email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Contact;