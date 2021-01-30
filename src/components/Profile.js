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
                                        <p className="lead">Exceptionally focused and reliable full stack developer, with an emphasis in Javascript and React, eager to contribute to developing projects, with a passion for creating, attention to detail, and excellent problem solving skills. Able to work both independently or as a part of a development team. Motivated to learn, grow, and excel in the software industry.</p>
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
