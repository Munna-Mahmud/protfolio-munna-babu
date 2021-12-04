import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className="mt-5 p-2">
            <div className="pg-footer">
                <footer className="footer">
                    <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                    </svg>
                    <div className="footer-content">
                        <div className="footer-content-column">
                            <div className="footer-logo">
                                <a className="footer-logo-link" href="/home">
                            
                                   <h2>MUNNA BABU</h2>
                                </a>
                            </div>
                             <p>Front-End Developer @ MERN Stack Developer</p>
                         
                        </div>
                        <div className="footer-content-column">
                            <div className="footer-menu">
                                <h2 className="footer-menu-name"> Munna Babu</h2>
                                <ul id="menu-company" className="footer-menu-list">
                                    <li >
                                        <a href="/">Contact</a>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <h2 className="footer-menu-name"> Legal</h2>
                                <ul id="menu-legal" className="footer-menu-list">
                                    <li >
                                        <a href="/home">Privacy Notice</a>
                                    </li>
                                    <li>
                                        <a href="/home">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-column">
                            <div className="footer-menu">
                                <h2 className="footer-menu-name"> Quick Links</h2>
                                <ul id="menu-quick-links" className="footer-menu-list">
                                 
                                    <li>
                                        <a target="_blank" href="/home">Services</a>
                                    </li>

                                    <li >
                                        <a href="/home">Blogs</a>
                                    </li>
                                    <li >
                                        <a href="/">Projects</a></li>
                                    <li >
                                        <a href="/home#testimonials">About Me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-column">
                            <div className="footer-call-to-action">
                                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                                <p className="footer-call-to-action-description"> Have a support question?</p>
                            
                            </div>
                            <div className="footer-call-to-action">
                                <h3 > You Call Me</h3>
                                <p > +8801904625620</p>
                            </div>
                            <ul className="footer-social-list d-flex">
                                <li><i className="fab fa-google"></i></li>
                                <li> <a target="_blank" href="https://www.facebook.com/munnaMaHmud4/"><i className="fab fa-facebook"></i></a> </li>
                                <li> <a target="_blank" href="https://www.linkedin.com/in/munna-mahmud-ba3371211/"><i className="fab fa-linkedin"></i></a>
                                </li> <li> <a target="_blank" href="https://github.com/Munna-Mahmud"><i className="fab fa-github"></i></a> </li>
                                <li><i className="fab fa-instagram"></i></li>

                            </ul>

                        </div>

                    </div>
                    <div className="footer-copyright">
                        <div className="footer-copyright-wrapper">
                            <p className="footer-copyright-text">
                                <a className="footer-copyright-link" href="/home" target="_self"> ©2021. | Designed By: Munna Mahmud. || All rights reserved. </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;