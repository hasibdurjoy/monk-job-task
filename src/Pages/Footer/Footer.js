import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../Utilities/Images/logo.png'

const Footer = () => {
    return (
        <div className='py-5' style={{ backgroundColor: '#F8F8F8' }}>
            <Container>
                <Row>
                    <Col xm={12} md={4} className='text-start'>
                        <span className='d-flex align-items-center'>
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />{' '}
                            <span style={{ fontWeight: 500, marginLeft: '5px', fontSize: "20px" }}>Lasles</span ><span style={{ fontWeight: 700, fontSize: "20px" }}>VPN</span>
                        </span>

                        <p className='my-4'>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                        <p className='text-secondary'>©2020LaslesVPN</p>
                    </Col>
                    <Col xm={12} md={2}>

                    </Col>
                    <Col xm={12} md={2} className='text-start'>
                        <h5>Product</h5>
                        <p className="text-secondary">Download </p>
                        <p className="text-secondary">Pricing</p>
                        <p className="text-secondary">Server</p>
                        <p className="text-secondary">Countries</p>
                        <p className="text-secondary">Blog</p>
                    </Col>
                    <Col xm={12} md={2} className='text-start'>
                        <h5>Engage</h5>
                        <p className="text-secondary">LaslesVPN ? </p>
                        <p className="text-secondary">FAQ</p>
                        <p className="text-secondary">About Us</p>
                        <p className="text-secondary">Privacy Policy</p>
                        <p className="text-secondary">Terms of Service</p>
                    </Col>
                    <Col xm={12} md={2} className='text-start'>
                        <h5>Earn Money</h5>
                        <p className="text-secondary">Affiliate</p>
                        <p className="text-secondary">Become Partner</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;