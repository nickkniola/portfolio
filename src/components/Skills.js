import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Skills = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center my-4">
              <h2 className="portfolio-header">Skills</h2>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="6" sm="3" className="mb-2">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/react.svg" alt="React.js"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              React.js
            </Row>
          </Col>
          <Col xs="6" sm="3" className="mb-2">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/javascript.svg" alt="JavaScript"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              JavaScript ES6
            </Row>
          </Col>
          <Col xs="6" sm="3">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/html5.svg" alt="HTML5"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              HTML5
            </Row>
          </Col>
          <Col xs="6" sm="3">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/css3.svg" alt="CSS3"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              CSS3
            </Row>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="6" sm="3"  className="mb-2">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/node-js.svg" alt="Node"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              Node.js
            </Row>
          </Col>
          <Col xs="6" sm="3" className="mb-2">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/express.svg" alt="Express"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              Express
            </Row>
          </Col>
          <Col xs="6" sm="3">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/postgresql.svg" alt="Express"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              PostgreSQL
            </Row>
          </Col>
          <Col xs="6" sm="3">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/bootstrap.svg" alt="Express"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              Bootstrap 4
            </Row>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="6" sm="3"  className="mb-2">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/git.png" alt="Git"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              Git
            </Row>
          </Col>
          <Col xs="6" sm="3" className="mb-2">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/vs-code.svg" alt="VS Code"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              VS Code
            </Row>
          </Col>
          <Col xs="6" sm="3">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/npm.svg" alt="NPM"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              npm
            </Row>
          </Col>
          <Col xs="6" sm="3">
            <Row className="d-flex justify-content-center">
              <img className="skill-icon" src="assets/images/aws.svg" alt="AWS"></img>
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              AWS
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="second-space"/>
    </React.Fragment>
  );
}

export default Skills;
