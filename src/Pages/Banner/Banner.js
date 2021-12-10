import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bannerImage from '../../Utilities/Images/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col sm={12} md={6} lg={6} className='d-flex align-items-center'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <h1 className="mb-4 banner-title">Want anything to  be <br /> easy with <span style={{ fontWeight: 700 }}>LaslesVPN</span></h1>
                            <p className="mb-4 text-secondary">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                            <Button className="mt-2 rounded px-5 py-2 border-0 banner-button">Get Started</Button>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img src={bannerImage} alt="" className="img-fluid banner-image" />
                </Col>
            </Row>
        </Container >
    );
};

export default Banner;