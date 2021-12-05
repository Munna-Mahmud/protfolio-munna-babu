// import React from 'react';
import emailjs from 'emailjs-com';
import Navigation from './../Home/Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Form } from 'react-bootstrap';
import React, { useState } from "react";

import './Contact.css';

const Result = () => {
    return (
        <p>Your Message has been Succesfully</p>
    )
}

const Contact = () => {
    const [result, showResult] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_la52irp', e.target, 'user_tWUI8FBhIsNzjV9Li7Lei')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true);

    };

    return (
        <div id="contact" className="bg-dark" >
            <Navigation></Navigation>

            <section class="vh-100 bg-image" style={{ backgroundImage: "url('https://images.pexels.com/photos/842948/pexels-photo-842948.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')" }}>
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card" style={{ borderRadius: " 15px" }}>
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mb-5">Contact Me</h2>

                                        <form onSubmit={sendEmail}>

                                            <div class="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="name" placeholder="Your Name" />
                                                {/* <label class="form-label" for="form3Example1cg">Your Name</label> */}
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" class="form-control form-control-lg" name="email" placeholder="Your Email" />
                                                {/* <label class="form-label" for="form3Example3cg" placeholder="Your Email">Your Email</label> */}
                                            </div>

                                            <div class="form-outline mb-4">

                                                <textarea class="form-control form-control-lg" id="form3Example4cg" rows="4" name="message" placeholder="Your Message" ></textarea>

                                                {/* <label class="form-label" for="form3Example4cg">Your Message</label> */}
                                            </div>

                                            <div class="d-flex  justify-content-center">
                                                <input className="btn bg-primary text-white" type="submit" value="Send" />

                                            </div>
                                            <div className="row text-center  text-success">
                                                {result ? <Result /> : null}
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Contact;