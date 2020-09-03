import React from 'react';
import { Row, Col, Jumbotron, Container } from 'reactstrap';

const Profile = () => {
    return (
        <div>
            <Jumbotron>
                <Container >
                    <Row className="mx-auto pl-4 pr-4 portfolio-description">
                        <Col>
                            <h1 className="display-4 header-font">Nicholas Kniola</h1>
                        </Col>
                    </Row>
                    <Row className="mx-auto pl-4 pr-4 portfolio-description">
                        <Col className="text-justify" >
                            <p className="lead">Exceptionally focused and reliable front end developer, with an emphasis in Javascript and React, eager to contribute to developing projects with a passion for creating, attention to detail, and excellent problem solving skills. Able to work both independently or as a part of a development team. Motivated to learn, grow and excel in the software industry.</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Profile;