import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import icon1 from '../../Utilities/Images/cardIcon1.png'
import icon2 from '../../Utilities/Images/cardIcon2.png'
import icon3 from '../../Utilities/Images/cardIcon3.png'
import './Testimonial.css';

const Testimonial = () => {

    const options = {
        responsiveClass: true,
        nav: true,
        autoplay: false,
        navText: [`<Button className="btn btn-danger rounded-circle"><i class="fas fa-arrow-left"></i></Button>`, `<Button className="btn btn-danger rounded-circle"><i class="fas fa-arrow-right"></i></Button>`],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        },
    };

    return (
        <>
            <Container className='mt-5'>
                <h2>Trusted by Thousands of Happy Customer</h2>
                <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            </Container>

            <OwlCarousel className="slider-items owl-carousel ps-5" {...options}>
                <div class="item mx-3">
                    <Card className='p-4 h-100'>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <img src={icon1} alt="" className='card-icon' />
                                    </Col>
                                    <Col>
                                        <h6>Name</h6>
                                        <p>Designation</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <p>4.5 {''}<i className="fas fa-star" style={{ color: 'orange' }}></i></p>
                            </Col>
                        </Row>

                        <Card.Body>
                            <Card.Text>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="item mx-3">
                    <Card className='p-4 h-100'>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <img src={icon1} alt="" className='card-icon' />
                                    </Col>
                                    <Col>
                                        <h6>Name</h6>
                                        <p>Designation</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <p>4.5 {''}<i className="fas fa-star" style={{ color: 'orange' }}></i></p>
                            </Col>
                        </Row>

                        <Card.Body>
                            <Card.Text>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="item mx-3">
                    <Card className='p-4 h-100'>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <img src={icon1} alt="" className='card-icon' />
                                    </Col>
                                    <Col>
                                        <h6>Name</h6>
                                        <p>Designation</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <p>4.5 {''}<i className="fas fa-star" style={{ color: 'orange' }}></i></p>
                            </Col>
                        </Row>

                        <Card.Body>
                            <Card.Text>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="item mx-3">
                    <Card className='p-4 h-100'>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <img src={icon1} alt="" className='card-icon' />
                                    </Col>
                                    <Col>
                                        <h6>Name</h6>
                                        <p>Designation</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <p>4.5 {''}<i className="fas fa-star" style={{ color: 'orange' }}></i></p>
                            </Col>
                        </Row>

                        <Card.Body>
                            <Card.Text>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </OwlCarousel>

        </>
    );
};

export default Testimonial;