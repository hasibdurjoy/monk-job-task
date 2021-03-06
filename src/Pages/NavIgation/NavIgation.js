import React from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Utilities/Images/logo.png'
import './Navigation.css';

const NavIgation = () => {
    return (
        <Navbar expand="lg" className="navigation">
            <Container >
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    <span style={{ fontWeight: 500 }}>Lasles</span ><span style={{ fontWeight: 700 }}>VPN</span>
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
                    <Nav.Link to="/" className="text-dark"><b>Sign in</b></Nav.Link>
                    <Nav.Link to="/"><button className="btn rounded-pill" style={{ color: "#F53838", borderColor: "#F53838" }}><b>Sign up</b> </button></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavIgation;