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
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">About Me</Nav.Link>
                                <Nav.Link href="#action2">My Services</Nav.Link>
                                <Nav.Link href="#action2">Recent Projects</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            {/* <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                {/* <Button variant="outline-success">Search</Button> */}
                            {/* </Form> */} 
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;