import React from 'react';
import './Projects.css'
import skate from '../../Images/Projects/skateboarding.jpg'
import health from '../../Images/Projects/health.jpg'
import travel from '../../Images/Projects/travelling.jpg'
import islam from '../../Images/Projects/islam.jpg'

const Projects = () => {
    return (
        <div id="projects" className=" text-white container mt-5">
            <h2 className="text-start p-4" style={{ fontFamily: "Kaushan Script, cursive" }}>Recent Works</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="card bg-dark img__wrap">
                        <img src={skate} className="card-img-top img__img" alt="..." />

                        <a class="img__description text-center text-white" href="https://go-surf-e8722.web.app/">
                        <h4 style={{ fontFamily: "Kaushan Script, cursive" }}>Skateboarding</h4>
                            Live View
                            <p>NodeJs, MongoDB, Express.JS, ReactJS, Boostrap, Firebase etc </p>

                            <div className="text-start ps-4">
                                <li>Full  Responsive React Skateboard Project.</li>
                                <li>This Project with an Admin  Dashboard and full stack react app with a dynamic Routing system .
                                </li>
                                <li> Admin can add, delete, edit, see all orders status , Customer Review system, and Admin can make a new Admin  etc.
                                </li>
                            </div>
                        </a>


                    </div>
                    {/* <div className="card-body">
                        <h5 className="card-title text-white bg-dark">Skateboarding</h5>

                    </div> */}
                </div>
                <div className="col" data-aos="flip-right" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="card bg-dark img__wrap">
                        <img src={travel} className="card-img-top img__img" alt="..." />

                        <a class="img__description text-center text-white" href="https://travel-with-traveliy.netlify.app/">
                            <h4 style={{ fontFamily: "Kaushan Script, cursive" }}>Travel with Traveliy</h4>
                            Live View
                            <p>NodeJs, MongoDB, Express.JS, ReactJS, Boostrap, Firebase etc </p>

                            <div className="text-start ps-4">
                                <li>Full Responsive React Travel Agency related Project</li>
                                <li>This is Full authentication and the user can book a travel place where the user wants to trave.
                                </li>
                                <li> Treveliy is a full stack project where users can manage their Orders
                                </li>
                            </div>
                        </a>

                    </div>
                    {/* <div className="card-body">
                            <h5 className="card-title text-white">Travel With Travelly</h5>

                        </div> */}
                </div>
                <div className="col" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="card bg-dark img__wrap">
                        <img src={health} className="card-img-top img__img" alt="..." />

                        <a class="img__description text-center text-white" href="https://nordis-health-care-center.web.app/">
                        <h4 style={{ fontFamily: "Kaushan Script, cursive" }}>Nordis Health Center</h4>
                            Live View
                            <p>ReactJS, Boostrap, hooks, Netlify, Firebase etc </p>

                            <div className="text-start ps-4">
                                <li>Full  Responsive React Skateboard Project.</li>
                                <li>This Project with an Admin  Dashboard and full stack react app with a dynamic Routing system .
                                </li>
                                <li> Admin can add, delete, edit, see all orders status , Customer Review system, and Admin can make a new Admin  etc.
                                </li>
                            </div>
                        </a>

                    </div>
                    {/* <div className="card-body">
                            <h5 className="card-title text-white">Nordis Health Care</h5>

                        </div> */}
                </div>
                <div className="col">
                    <div className="card bg-dark img__wrap " data-aos="flip-right" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={islam} className="card-img-top img__img" alt="..." />

                        <a class="img__description text-center text-white" href="https://munna-mahmud.github.io/learn_islam/">
                        <h4 style={{ fontFamily: "Kaushan Script, cursive" }}>Learn Islam</h4>
                            Live View
                            <p>HTML, CSS, Bootstrap etc </p>

                            <div className="text-start ps-4">
                                <li>This website is about learning Islam.</li>
                                <li>This Totally Resposive By using Bootstrap.
                                </li>
                                <li>In this website people will get some resuroces about learning Islam.
                                </li>
                            </div>
                        </a>
                    </div>
                    {/* <div className="card-body">
                            <h5 className="card-title text-white">Learn About Islam</h5>

                        </div> */}
                </div>
            </div>
        </div>
    );
};

export default Projects;