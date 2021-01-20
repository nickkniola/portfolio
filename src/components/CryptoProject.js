import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const CryptoProject = () => {
    return (
        <Container className="my-4 py-4">
            <Row>
                <Col className="d-flex justify-content-center">
                    <figure className="box-shadow">
                        <a href="https://nickkniola.github.io/crypto/" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/crypto_image.png" className="image-width" alt="Crypto Web App" />
                        </a>
                    </figure>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
            <figure className="box-shadow py-4 px-4 portfolio-description">
                <Row className="m-0" >
                    <Col xs={7} >
                        <div>
                            <h4>Crypto</h4>
                        </div>
                        <div>
                            <p className="text-justify">Quickly track prices of cryptocurrencies and save favorites, with up-to-date information.</p>
                            <p className="text-justify">JavaScript ES6 | CSS3 | HTML5 | AJAX</p>
                        </div>
                    </Col>
                    <Col xs={5} className="d-flex justify-content-center">
                        <Button color="link"><a href="https://nickkniola.github.io/crypto/" target="_blank" rel="noopener noreferrer">View Site</a></Button>
                        <Button color="link"><a href="https://github.com/nickkniola/crypto" target="_blank" rel="noopener noreferrer">View Github</a></Button>
                    </Col>
                </Row>
            </figure>
            </Row>
        </Container>
    );
}

export default CryptoProject;
