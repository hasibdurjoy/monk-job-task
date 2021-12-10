import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../Utilities/Images/logo.png'

const Footer = () => {
    return (
        <div className='py-5' style={{ backgroundColor: '#F8F8F8' }}>
            <Container>
                <Row>
                    <Col xm={12} md={4} className='text-start'>
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />{' '}
                        <span style={{ fontWeight: 500 }}>Lasles</span ><span style={{ fontWeight: 700 }}>VPN</span>

                        <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                        <p className='text-secondary'>©2020LaslesVPN</p>
                    </Col>
                    <Col xm={12} md={2}>

                    </Col>
                    <Col xm={12} md={2} className='text-start'>
                        <h6>Product</h6>
                        <p>Download </p>
                        <p>Pricing</p>
                        <p>Server</p>
                        <p>Countries</p>
                        <p>Blog</p>
                    </Col>
                    <Col xm={12} md={2} className='text-start'>
                        <h6>Engage</h6>
                        <p>LaslesVPN ? </p>
                        <p>FAQ</p>
                        <p>About Us</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </Col>
                    <Col xm={12} md={2} className='text-start'>
                        <h6>Earn Money</h6>
                        <p>Affiliate</p>
                        <p>Become Partner</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;