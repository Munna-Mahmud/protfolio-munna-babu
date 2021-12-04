import Button from '@restart/ui/esm/Button';
import React from 'react';

import { Container, FormControl, Navbar, NavDropdown, Nav, Form, Offcanvas } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar  expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#" style={{fontFamily:"Kaushan Script, helvetica, Bangla502, sans-serif"}}>MUNNA BABU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel" style={{fontFamily:"Kaushan Script, helvetica, Bangla502, sans-serif"}}>Munna Babu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About Me</Nav.Link>
                                <Nav.Link href="#services">My Services</Nav.Link>
                                <Nav.Link href="#projects">Recent Projects</Nav.Link>
                                <Nav.Link href="#blogs">Blogs</Nav.Link>
                                <Nav.Link href="/contact">Contact Me</Nav.Link>
                              
                            </Nav>
                        
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;