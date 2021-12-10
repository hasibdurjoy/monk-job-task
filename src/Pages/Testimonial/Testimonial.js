import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import icon1 from '../../Utilities/Images/cardIcon1.png'
import icon2 from '../../Utilities/Images/cardIcon2.png'
import icon3 from '../../Utilities/Images/cardIcon3.png'
import './Testimonial.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Testimonial = () => {

    const options = {
        responsiveClass: true,
        nav: true,
        autoplay: false,
        navText: ['<button class="left-arrow"><i class="fas fa-arrow-left"></i></button>', `<button class="right-arrow"><i class="fas fa-arrow-right"></i></button>`],
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
        <Container className='mt-5'>
            <Fade bottom big>
                <h2 className='text-center' style={{ fontWeight: 500, fontSize: "35px" }}>Trusted by Thousands of <br /> Happy Customer</h2>
            </Fade>
            <Fade right>
                <p className='text-center text-secondary mt-3 mb-5'>These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.</p>
            </Fade>

            <Zoom bottom big>
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                    <div class="item mx-3 mb-5" style={{ height: "230px" }}>
                        <Card className='px-3 py-4 h-100 rounded border-danger mb-5'>
                            <Row>
                                <Col sm={9} md={9} lg={9}>
                                    <Row className='text-start'>
                                        <Col sm={4} md={4} lg={4}>
                                            <img src={icon1} alt="" className='card-icon' />
                                        </Col>
                                        <Col sm={8} md={8} lg={8} className='text-start'>
                                            <h6>Viezh Robert</h6>
                                            <p className='text-secondary' style={{ fontSize: "14px" }}>Warsaw, Poland</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3} md={3} lg={3}>
                                    <p className='d-flex align-items-center'>4.5 <i className="ms-2 fas fa-star card-star"></i></p>
                                </Col>
                            </Row>

                            <Card.Body>
                                <Card.Text>
                                    <Fade left cascade>
                                        “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                                    </Fade>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="item mx-3" style={{ height: "230px" }}>
                        <Card className='px-3 py-4 h-100 rounded  mb-5'>
                            <Row>
                                <Col sm={9} md={9} lg={9}>
                                    <Row className='text-start'>
                                        <Col sm={4} md={4} lg={4}>
                                            <img src={icon2} alt="" className='card-icon' />
                                        </Col>
                                        <Col sm={8} md={8} lg={8} className='text-start'>
                                            <h6>Yessica Christy</h6>
                                            <p className='text-secondary' style={{ fontSize: "14px" }}>Shanxi, China</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3} md={3} lg={3}>
                                    <p className='d-flex align-items-center'>4.5 <i className="ms-2 fas fa-star card-star"></i></p>
                                </Col>
                            </Row>

                            <Card.Body>
                                <Card.Text>
                                    <Fade left cascade>
                                        “I like it because I like to travel far and still can connect with high speed.”.
                                    </Fade>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="item mx-3" style={{ height: "230px" }}>
                        <Card className='px-3 py-4 h-100 rounded  mb-5'>
                            <Row>
                                <Col sm={9} md={9} lg={9}>
                                    <Row className='text-start'>
                                        <Col sm={4} md={4} lg={4}>
                                            <img src={icon3} alt="" className='card-icon' />
                                        </Col>
                                        <Col sm={8} md={8} lg={8} className='text-start'>
                                            <h6>Kim Young Jou</h6>
                                            <p className='text-secondary' style={{ fontSize: "14px" }}>Seoul, South Korea</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3} md={3} lg={3}>
                                    <p className='d-flex align-items-center'>4.5 <i className="ms-2 fas fa-star card-star"></i></p>
                                </Col>
                            </Row>

                            <Card.Body>
                                <Card.Text>
                                    <Fade left cascade>
                                        “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                                    </Fade>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="item mx-3 mb-5" style={{ height: "230px" }}>
                        <Card className='px-3 py-4 h-100 rounded  mb-5'>
                            <Row>
                                <Col sm={9} md={9} lg={9}>
                                    <Row className='text-start'>
                                        <Col sm={4} md={4} lg={4}>
                                            <img src={icon1} alt="" className='card-icon' />
                                        </Col>
                                        <Col sm={8} md={8} lg={8} className='text-start'>
                                            <h6>Viezh Robert</h6>
                                            <p className='text-secondary' style={{ fontSize: "14px" }}>Warsaw, Poland</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3} md={3} lg={3}>
                                    <p className='d-flex align-items-center'>4.5 <i className="ms-2 fas fa-star card-star"></i></p>
                                </Col>
                            </Row>

                            <Card.Body>
                                <Card.Text>
                                    <Fade left cascade>
                                        “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                                    </Fade>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="item mx-3" style={{ height: "230px" }}>
                        <Card className='px-3 py-4 h-100 rounded  mb-5'>
                            <Row>
                                <Col sm={9} md={9} lg={9}>
                                    <Row className='text-start'>
                                        <Col sm={4} md={4} lg={4}>
                                            <img src={icon2} alt="" className='card-icon' />
                                        </Col>
                                        <Col sm={8} md={8} lg={8} className='text-start'>
                                            <h6>Yessica Christy</h6>
                                            <p className='text-secondary' style={{ fontSize: "14px" }}>Shanxi, China</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3} md={3} lg={3}>
                                    <p className='d-flex align-items-center'>4.5 <i className="ms-2 fas fa-star card-star"></i></p>
                                </Col>
                            </Row>

                            <Card.Body>
                                <Card.Text>
                                    <Fade left cascade>
                                        “I like it because I like to travel far and still can connect with high speed.”.
                                    </Fade>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="item mx-3" style={{ height: "230px" }}>
                        <Card className='px-3 py-4 h-100 rounded  mb-5'>
                            <Row>
                                <Col sm={9} md={9} lg={9}>
                                    <Row className='text-start'>
                                        <Col sm={4} md={4} lg={4}>
                                            <img src={icon3} alt="" className='card-icon' />
                                        </Col>
                                        <Col sm={8} md={8} lg={8} className='text-start'>
                                            <h6>Kim Young Jou</h6>
                                            <p className='text-secondary' style={{ fontSize: "14px" }}>Seoul, South Korea</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3} md={3} lg={3}>
                                    <p className='d-flex align-items-center'>4.5 <i className="ms-2 fas fa-star card-star"></i></p>
                                </Col>
                            </Row>

                            <Card.Body>
                                <Card.Text>
                                    <Fade left cascade>
                                        “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                                    </Fade>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </OwlCarousel>
            </Zoom>
        </Container>
    );
};

export default Testimonial;