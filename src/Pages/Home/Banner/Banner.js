import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner from '../../../Images/slide-bg-1.jpg'
import Navigation from '../Navigation/Navigation'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="img">
        <Navigation></Navigation>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className="center d-flex justify-content-center align-items-center">
              <h1 className="text-white">Front-End Developer</h1>

            </div>
            <ul className="text-white justify-content-center align-items-center  d-flex">
              <i className=" m-2  fas fa-envelope-open-text"></i>
              <i className=" m-2  fas fa-envelope-open-text"></i>
              <i className=" m-2  fas fa-envelope-open-text"></i>
            </ul>

          </Col>
        </Row>
      </div>

    </div>
  );
};

export default Banner;