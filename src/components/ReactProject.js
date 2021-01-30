import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const ReactProject = () => {
    return (
        <React.Fragment>
            <div className="main-space" id="portfolio"></div>
            <Container className="my-4 py-2">
                <Row>
                    <Col className="d-flex justify-content-center my-4">
                        <h2 className="portfolio-header">Portfolio</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <figure className="box-shadow">
                            <a href="https://hang-web-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/hang_image.png" className="image-width" alt="Hang Web App" />
                            </a>
                        </figure>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                <figure className="box-shadow py-4 px-4 portfolio-description">
                    <Row className="m-0" >
                        <Col xs={7} >
                            <div>
                                <h4>Hang</h4>
                            </div>
                            <div>
                                <p className="text-justify">Pair up with people in your location based on common interests in a variety of activities. The only web app which makes plans for you!</p>
                                <p className="text-justify">React.js | Node.js | Express | PostgreSQL | Socket.io | Google Maps API | Semantic UI </p>
                            </div>
                        </Col>
                        <Col xs={5} className="d-flex justify-content-center">
                            <Button color="link"><a href="https://hang-web-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Site</a></Button>
                            <Button color="link"><a href="https://github.com/nickkniola/hang" target="_blank" rel="noopener noreferrer">View Github</a></Button>
                        </Col>
                    </Row>
                </figure>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default ReactProject;
