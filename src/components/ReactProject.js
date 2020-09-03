import React from 'react';
import { Container, Row, Col, Media, Button } from 'reactstrap';

const ReactProject = () => {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center my-4">
                    <h2>Portfolio</h2>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <figure className="box-shadow">
                        <Media object src="assets/images/Hang_Web_App_Image.png" alt="Generic placeholder image" />
                    </figure>
                </Col>
            </Row>
            <figure className="box-shadow py-4 px-4">
            <Row className="m-0">
                <Col xs={7}>
                    <div>
                        <h4>Hang</h4>
                    </div>
                    <div>
                        <p className="text-justify">A passion project which pairs up users with people in their location based on common interests for activities. The only app which makes plans for you!</p>
                    </div>
                </Col>
                <Col xs={5} className="d-flex justify-content-center">
                    <Button color="link"><a href="https://hangwebapp.netlify.app/">View Site</a></Button>
                    <Button color="link"><a href="https://github.com/nickkniola/hang">View Github</a></Button>
                </Col>
            </Row>
            </figure>
        </Container>
    );
}

export default ReactProject;