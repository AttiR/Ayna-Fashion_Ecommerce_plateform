import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/fa';

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
            <p>About Us</p>
          </Row>
          <Row>
            <p>Products</p>
          </Row>
          <Row>
            <p>Partners</p>
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
