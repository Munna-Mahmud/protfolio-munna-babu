import React from 'react';
// import './Projects.css'

import skate from '../../Images/Projects/skateboarding.jpg'
import health from '../../Images/Projects/health.jpg'
import travel from '../../Images/Projects/travelling.jpg'
import islam from '../../Images/Projects/islam.jpg'

const Projects = () => {
    return (
        <div className="mt-5">
          <h2 className="text-start p-4" style={{fontFamily:"Kaushan Script, cursive"}}>Recent Works</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card bg-dark img__wrap">
                       <a target href="https://go-surf-e8722.web.app/"> <img src={skate} className="card-img-top img__img"  alt="..." /></a>
                       <p class="img__description">This image looks super neat.</p>
                       
                        <div className="card-body">
                            <h5 className="card-title text-white">Skateboarding</h5>
                          
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark">
                    <a href="https://travel-with-traveliy.netlify.app/"> <img src={travel} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title text-white">Travel With Travelly</h5>
                           
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark">
                    <a href="https://nordis-health-care-center.web.app/"> <img src={health} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title text-white">Nordis Health Care</h5>
                        
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark ">
                    <a href="https://munna-mahmud.github.io/learn_islam/#"> <img src={islam} className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                            <h5 className="card-title text-white">Learn About Islam</h5>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;