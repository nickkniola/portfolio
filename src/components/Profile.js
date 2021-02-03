import React from 'react';
import { Row, Col, Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = (props) => {
    return (
        <div id="home-section">
            <Jumbotron className="main-background bg-light">
                <Container className="pl-4 pr-4">
                    <Col xs="12" lg="10" className="mx-auto">
                        <Row className="justify-content-center row">
                            <Col sm="8">
                                <Row className="mx-auto portfolio-description">
                                    <Col>
                                        <h1 className="display-4 header-font main-header">Nicholas Kniola</h1>
                                    </Col>
                                </Row>
                                <Row className="mx-auto portfolio-description">
                                    <Col>
                                        <h2 className="display-5 header-font">Full Stack Developer</h2>
                                    </Col>
                                </Row>
                                <Row className="mx-auto portfolio-description">
                                    <Col className="text-justify" >
                                        <p>Exceptionally focused and reliable full stack developer, with an emphasis in JavaScript and React, eager to contribute to developing projects with a strong attention to detail. I completed both NuCamp Web and Mobile Development Program and the intensive web development program at LearningFuze, with a hands-on development first approach and extensive curriculum in the foundations of JavaScript, HTML, and CSS, and more advanced technologies, such as React, Node, Express, and PostgreSQL. During my time at LearningFuze, I developed full stack web applications, relying heavily on documentation and improved my problem-solving approach. I have a passion for creating quality user interfaces and meaningful functionality, and work well independently or as part of a development team. I am motivated to learn, grow, and excel in the software industry.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={{ size: 'auto' }} sm="4">
                                <Row className="mb-2">
                                    <img className="box-shadow profile-image mx-auto" src="assets/images/profile.jpg" alt="Profile" />
                                </Row>
                                <Row>
                                    <Col className="icon-column">
                                        <p className="location-text"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />{" "}Los Angeles, CA</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="icon-column mx-4">
                                        <a className="email-me" href="mailto: nickkniola@me.com">
                                            <FontAwesomeIcon className="envelope-mini-icon" icon={faEnvelope} size="lg" />
                                        </a>
                                        <a href="https://github.com/nickkniola" rel="noopener noreferrer" target="_blank">
                                            <img className="contact-icon" src="assets/images/github.svg" alt="GitHub"></img>
                                        </a>
                                        <a href="https://www.linkedin.com/in/nicholaskniola/" rel="noopener noreferrer" target="_blank">
                                            <img className="contact-icon" src="assets/images/linkedin.svg" alt="LinkedIn"></img>
                                        </a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <div className="second-space"></div>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Profile;
