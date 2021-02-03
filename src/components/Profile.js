import React from 'react';
import { Row, Col, Jumbotron, Container } from 'reactstrap';

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
                                        <h1 className="display-4 header-font">Nicholas Kniola</h1>
                                    </Col>
                                </Row>
                                <Row className="mx-auto portfolio-description">
                                    <Col className="text-justify" >
                                        <p>Exceptionally focused and reliable full stack developer, with an emphasis in Javascript and React, eager to contribute to developing projects with a strong attention to detail. I attended both NuCamp Coding Bootcamp and the intensive web development program at LearningFuze, which has both a development first approach to learning and an extensive curriculum in the foundations of JavaScript, HTML, and CSS, and more advanced technologies, such as React, Node, Express, and PostgreSQL. During my time at LearningFuze, I developed full stack web applications, relying heavily on documentation and improved my problem-solving approach. I have a passion for creating quality user interfaces and meaningful functionality, and work well independently or as part of a development team. I am motivated to learn, grow, and excel in the software industry.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={{ size: 'auto', 'text-align': 'center' }} sm="4">
                                <img className="box-shadow" src="assets/images/profile.jpg" alt="Profile" />
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
