import React from 'react';
import './About.css';
import about from '../../Images/munna mahmud.jpg' 

const About = () => {
    return (
        <div className=" pt-4 mb-2 about-details text-dark  ">
            <div className="container">
                <div className="row ">
                    <div className=" col-12 col-md-4">
                        <div>
                            <img className=" img-fluid" src={about} alt="" />
                        </div>


                    </div>
                    <div className="col-12 col-md-8 text-start">

                        <h1 style={{fontFamily:"Kaushan Script, helvetica, Bangla502, sans-serif"}}>Hi I'm Munna Mahmud, Front-End Developer & MERN Stack Developer From Bangladesh.</h1>
                        <p>I have rich experience in web site design & building and customization. Also I am good at HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, MongoDB, Express.JS, Firebase Authentication and wordpress etc. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea.</p>
                        <a href="https://drive.google.com/file/d/1jNNRpKsb9pB_VPI5Zyc3MguXSstYH4bG/view?usp=sharing">Download CV</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;