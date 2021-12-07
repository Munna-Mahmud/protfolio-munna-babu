import Button from '@restart/ui/esm/Button';
import React from 'react';

import { Container, FormControl, Navbar, NavDropdown, Nav, Form, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar className="navbar-light"  expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#" style={{fontFamily:"Kaushan Script, helvetica, Bangla502, sans-serif"}}>MUNNA BABU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel" style={{fontFamily:"Kaushan Script, helvetica, Bangla502, sans-serif"}}>Munna Babu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link  to="/">Home</Link>
                                <Link  to="about">About Me</Link>
                                <Link  to="services">Services</Link>
                                <Link  to="projects">Projects</Link>
                                <Link  to="blogs">Blogs</Link>
                                <Link  to="contact">Contact </Link>
                              
                            </Nav>
                        
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;


