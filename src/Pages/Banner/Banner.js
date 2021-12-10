import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bannerImage from '../../Utilities/Images/banner.png'

const Banner = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col sm={12} md={8} lg={6} className="d-flex flex-column align-items-start justify-content-evenly">
                    <h1 className="text-start " style={{ fontSize: '50px' }}>Want anything to be easy with LaslesVPN</h1>
                    <p className="text-start ">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                    <Button className="rounded px-5 border-0" style={{ backgroundColor: "#F53838" }}>Get Started</Button>
                </Col>
                <Col sm={12} md={4} lg={6}>
                    <img src={bannerImage} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;