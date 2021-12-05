import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation'
import { Typewriter } from 'react-simple-typewriter'
import hero from '../../../Images/munna.jpg.png'
import Particles from "react-tsparticles";

import './Banner.css'

const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 10,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="img">
        <Navigation></Navigation>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className="center justify-content-center align-items-center">
              <div className="justify-content-center hero-content align-items-center">
                <img className=" hero_img rounded-circle  img-fluid" src={hero} alt="" />
                <h1 className=" text-white d-block">HI, I'M MUNNA BABU</h1>
                <p  >
                  <span style={{ color: 'white', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[' Front-End Developer',  ' UI Designer', ' MERN Stack Developer']}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}

                    />
                  </span>
                </p>
              </div>

            </div>
            <ul className="hero_icons text-white justify-content-center align-items-center  d-flex">
              <li><i className="fab fa-google"></i></li>
              <li> <a target="_blank" href="https://www.facebook.com/munnaMaHmud4/"><i className="fab fa-facebook"></i></a> </li>
              <li> <a target="_blank" href="https://www.linkedin.com/in/munna-mahmud-ba3371211/"><i className="fab fa-linkedin"></i></a>
              </li> <li> <a target="_blank" href="https://github.com/Munna-Mahmud"><i className="fab fa-github"></i></a> </li>
              <li><i className="fab fa-instagram"></i></li>
            </ul>

          </Col>
        </Row>
      </div>

    </div>
  );
};

export default Banner;