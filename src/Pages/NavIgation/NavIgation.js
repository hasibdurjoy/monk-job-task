import React from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Utilities/Images/logo.png'

const NavIgation = () => {
    return (
        <Navbar expand="lg" className="bg-light">
            <Container >
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    LaslesVPN
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav.Link to="/" className="text-secondary">Pricing</Nav.Link>
                    <Nav.Link to="/" className="text-secondary">Testimonial</Nav.Link>
                    <Nav.Link to="/" className="text-dark">Sign in</Nav.Link>
                    <Nav.Link to="/"><button className="btn btn-outline-danger rounded-pill">Sign up</button></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavIgation;