import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const BootstrapProject = () => {
    return (
        <Container className="my-4 py-4">
            <Row>
                <Col className="d-flex justify-content-center">
                    <figure className="box-shadow">
                        <a href="https://nickkniola.github.io/wireless/index.html" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/wireless-project-image.png" className="image-width" alt="Wireless Website" />
                        </a>
                    </figure>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
            <figure className="box-shadow py-4 px-4 portfolio-description">
                <Row className="m-0" >
                    <Col xs={7} >
                        <div>
                            <h4>Wireless</h4>
                        </div>
                        <div>
                            <p className="text-justify">Wireless is a mobile network Bootstrap website, which allows the user to easily select plans and checkout.</p>
                            <p className="text-justify">jQuery | JavaScript | Bootstrap | CSS</p>
                        </div>
                    </Col>
                    <Col xs={5} className="d-flex justify-content-center">
                        <Button color="link"><a href="https://nickkniola.github.io/wireless/index.html" target="_blank" rel="noopener noreferrer">View Site</a></Button>
                        <Button color="link"><a href="https://github.com/nickkniola/wireless" target="_blank" rel="noopener noreferrer">View Github</a></Button>
                    </Col>
                </Row>
            </figure>
            </Row>
        </Container>
    );
}

export default BootstrapProject;
