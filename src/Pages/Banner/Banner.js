import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bannerImage from '../../Utilities/Images/banner.png'

const Banner = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col sm={12} md={8} lg={6} className='d-flex align-items-center'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <h1 className="mb-3" style={{ fontSize: '50px' }}>Want anything to be easy with LaslesVPN</h1>
                            <p className="mb-3">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                            <Button className="rounded px-5 border-0" style={{ backgroundColor: "#F53838", boxShadow: "0 10px -2px -2px #F53838" }}>Get Started</Button>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={6}>
                    <img src={bannerImage} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container >
    );
};

export default Banner;