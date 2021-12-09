import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import cardImage from '../../Utilities/Images/card-image.png'

const Plan = () => {
    return (
        <Container className="mt-5">
            <h2>Choose Your Plan</h2>
            <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>

            <Row xs={1} md={3} className="g-4 mt-3">
                <Col>
                    <Card className="p-4 h-100">
                        <Card.Img variant="top" src={cardImage} className="img-fluid p-5" />
                        <Card.Body>
                            <Card.Title>Free Plan</Card.Title>
                            <Card.Text>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: "white" }}>
                            <h2>Free</h2>
                            <button className="btn btn-outline-danger w-75 rounded-pill mx-auto">Select</button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-4 h-100">
                        <Card.Img variant="top" src={cardImage} className="img-fluid p-5" />
                        <Card.Body>
                            <Card.Title>Standard Plan</Card.Title>
                            <Card.Text>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: "white" }}>
                            <h2>$9/mo</h2>
                            <button className="btn btn-outline-danger w-75 rounded-pill mx-auto">Select</button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-4 border-danger h-100">
                        <Card.Img variant="top" src={cardImage} className="img-fluid p-5" />
                        <Card.Body>
                            <Card.Title>Premium Plan</Card.Title>
                            <Card.Text>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                                <p>
                                    <i className="fas fa-check text-success"></i>
                                    {' '}Unlimited Bandwitch</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: "white" }}>
                            <h2>$12/mo</h2>
                            <button className="btn btn-danger w-75 rounded-pill mx-auto">Select</button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Plan;