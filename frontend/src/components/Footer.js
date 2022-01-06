import React from 'react';
import { Row, Col } from 'react-bootstrap';



const Footer = () => {
  return (
    <footer className="text-center footer">
      <Row>
        <Col xs={6} md={3}>
          <Row>
            <p>Contact</p>
          </Row>
          <Row>
            <p>Register</p>
          </Row>
          <Row>
            <p>Sign In</p>
          </Row>
        </Col>
        <Col xs={6} md={3}>
          <Row>
            <p>Brands</p>
          </Row>
          <Row>
            <p>Designers</p>
          </Row>
          <Row>
            <p>Top Products</p>
          </Row>
        </Col>
        <Col xs={6} md={3}>
          <Row>
            <p>Partners</p>
          </Row>
          <Row>
            <p>All Stores</p>
          </Row>
          <Row>
            <p>Feedback</p>
          </Row>
        </Col>
        <Col xs={6} md={3}>
          <Row>
            <h2>Ayna's Fashion</h2>
          </Row>
          <Row>
            <p>&copy; Ayna's Fashion 2021</p>
          </Row>
          <Row>
           
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
