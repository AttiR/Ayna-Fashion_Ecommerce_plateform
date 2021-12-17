import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center">
      <Row>
        <Col xs={6} md={4}>
          <Row>
            <strong>
              <p>Contact</p>
            </strong>
          </Row>
        </Col>
        <Col xs={6} md={4}>
          <Row>
            <strong>
              <p>Links</p>
            </strong>
          </Row>
        </Col>
        <Col xs={6} md={4}>
          <Row>
            <h2>Ayna's Fashion</h2>
          </Row>
          <Row>
            <p>&copy; Ayna's Fashion 2021</p>
          </Row>
          <Row>
            <Col>
              <FaFacebookF />
              <FaFacebookF />
              <FaFacebookF />
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
