import React from 'react';
import HTML from '../../Images/services/HTml Css.svg';
import Javascript from '../../Images/services/Javscript.svg';
import Node from '../../Images/services/Node JS.svg';
import react from '../../Images/services/React Js.svg';
import theme from '../../Images/services/Theme Services.svg';
import './Services.css'

const Services = () => {
    return (
        <div>
            <div className=" mt-5 Service-details text-dark  ">
                <div className="container text-start">
                    <h2 style={{fontFamily:"Kaushan Script, cursive"}}>What I DO?</h2>
                    <div className="row ">
                        <div className=" col-12 col-md-4 text-start">
                            <div>
                                <img className=" img-fluid " src={HTML} alt="" />
                                <h5>HTML & CSS Resposive Web Design</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugiat quis sint labore explicabo officiis consequatur impedit perferendis possimus voluptas.</p>
                            </div>


                        </div>
                        <div className="col-12 col-md-4 text-start">
                            <div>
                                <img className=" img-fluid" src={react} alt="" />
                                <h5>React JS Development</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugiat quis sint labore explicabo officiis consequatur impedit perferendis possimus voluptas.</p>
                            </div>

                        </div>
                        <div className="col-12 col-md-4 text-start">
                            <div>
                                <img className=" img-fluid" src={Javascript} alt="" />
                                <h5>JavasScript Development</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugiat quis sint labore explicabo officiis consequatur impedit perferendis possimus voluptas.</p>
                            </div>

                        </div>
                    </div>

                    <div className="row ">
                        <div className=" col-12 col-md-4 text-start">
                            <div>
                                <img className=" img-fluid " src={Node} alt="" />
                                <h5>Node.JS Development</h5>
                                <p>orem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugiat quis sint labore explicabo officiis consequatur impedit perferendis possimus voluptas.</p>
                            </div>


                        </div>
                        <div className="col-12 col-md-4 text-start">
                            <div>
                                <img className=" img-fluid" src={HTML} alt="" />
                                <h5>PSD To HTML Design </h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugiat quis sint labore explicabo officiis consequatur impedit perferendis possimus voluptas.</p>
                            </div>

                        </div>
                        <div className="col-12 col-md-4 text-start">
                            <div>
                                <img className=" img-fluid" src={theme} alt="" />
                                <h5>CMS Theming Services</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugiat quis sint labore explicabo officiis consequatur impedit perferendis possimus voluptas.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;