import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import cardImage from '../../Utilities/Images/card-image.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Plan = () => {
    return (
        <Container className="mt-5">
            <Zoom left cascade>
                <h2 className='text-center' style={{ fontWeight: 500, fontSize: "35px" }}>Choose Your Plan</h2>
            </Zoom>
            <Fade right >
                <p className='text-center text-secondary'>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p>
            </Fade>
            <Zoom bottom >
                <Row xs={1} sm={2} md={3} className="g-4 mt-3">
                    <Col>
                        <Card className="p-4 h-100">
                            <Card.Img variant="top" src={cardImage} className="img-fluid w-50 mx-auto" />
                            <Card.Body>
                                <Card.Title className='text-center mb-3'>Free Plan</Card.Title>
                                <Card.Text className="text-start ms-5">
                                    <Zoom bottom cascade>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Unlimited Bandwitch</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Encrypted Connection</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}No Traffic Logs</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Works on All Devices</p>
                                    </Zoom>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor: "white" }} className='text-center border-0'>
                                <h2 >Free</h2>
                                <button className="btn  w-75 rounded-pill mx-auto" style={{ border: "2px solid #F53838", fontWeight: 500 }}>Select</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-4 h-100">
                            <Card.Img variant="top" src={cardImage} className="img-fluid w-50 mx-auto" />
                            <Card.Body>
                                <Card.Title className='text-center mb-3'>Standard Plan</Card.Title>
                                <Card.Text className="text-start ms-5">
                                    <Zoom bottom cascade>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Unlimited Bandwitch</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Encrypted Connection</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Yes Traffic Logs</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Works on All Devices</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Connect Anyware</p>
                                    </Zoom>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor: "white" }} className='text-center border-0'>
                                <h2 >$9/mo</h2>
                                <button className="btn  w-75 rounded-pill mx-auto" style={{ border: "2px solid #F53838", fontWeight: 500 }}>Select</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-4 h-100 rounded" style={{ border: "2px solid #F53838" }}>
                            <Card.Img variant="top" src={cardImage} className="img-fluid w-50 mx-auto" />
                            <Card.Body>
                                <Card.Title className='text-center mb-3'>Premium Plan</Card.Title>
                                <Card.Text className="text-start ms-5">
                                    <Zoom bottom cascade>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Unlimited Bandwitch</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Encrypted Connection</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Yes Traffic Logs</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Works on All Devices</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Connect Anyware</p>
                                        <p className="text-secondary">
                                            <i className="fas fa-check text-success me-3"></i>
                                            {' '}Get New Features</p>
                                    </Zoom>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor: "white" }} className='text-center border-0'>
                                <h2 >$12/mo</h2>
                                <button className="btn  w-75 rounded-pill mx-auto" style={{ backgroundColor: "#F53838", fontWeight: 500, color: "white", boxShadow: "5px 5px 5px 5px rgba(245, 138, 138, 0.35)" }}>Select</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Zoom>
        </Container >
    );
};

export default Plan;