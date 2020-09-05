import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

const Contact = () => {
    return (
        <React.Fragment >
            <div className="main-space"></div>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center my-4" xs={12}>
                        <h2>Contact</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="d-flex justify-content-center">
                        <a className="email-me" href="mailto: nickkniola@me.com">Nickkniola@me.com</a>
                    </Col>
                </Row>
                <Row className="justify-content-center my-4">
                    <div className="justify-content-center">
                        <Col xs={12} className="d-flex justify-content-center">
                            <a href="https://github.com/nickkniola" rel="noopener noreferrer" target="_blank"><Media object src="assets/images/GitHub-Logo.png" alt="Github logo" /></a>
                        </Col>
                        <Col xs={12} className="d-flex justify-content-center">
                            <a href="https://github.com/nickkniola" rel="noopener noreferrer" target="_blank">Github</a>
                        </Col>
                    </div>
                    <div className="justify-content-center">
                        <Col xs={12} className="d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/nicholaskniola/" rel="noopener noreferrer" target="_blank"><Media object src="assets/images/LinkedIn.png" alt="Github logo" /></a>
                        </Col>
                        <Col xs={12} className="d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/nicholaskniola/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                        </Col>
                    </div>
                </Row>
            </Container>
            <div className="main-space"></div>
        </React.Fragment>
    );
}

export default Contact;