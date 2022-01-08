import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-center footer">
      <Row>
        <Col xs={6} md={3}>
          <Row>
            <Link
              to={'/contact'}
              style={{ textDecoration: 'none' }}
              className="text-white"
            >
              <p>Contact</p>
            </Link>
          </Row>
          <Row>
            <Link
              to={'/signup'}
              style={{ textDecoration: 'none' }}
              className="text-white"
            >
              <p>Register</p>
            </Link>
          </Row>
          <Row>
            <Link
              to={'/signin'}
              style={{ textDecoration: 'none' }}
              className="text-white"
            >
              <p>Sign In</p>
            </Link>
          </Row>
        </Col>
        <Col xs={6} md={3}>
          <Row>
            <Link
              to={'/about'}
              style={{ textDecoration: 'none' }}
              className="text-white"
            >
              <p>Brands</p>
            </Link>
          </Row>
          <Row>
            <Link
              to={'/about'}
              style={{ textDecoration: 'none' }}
              className="text-white"
            >
              <p>Designers</p>
            </Link>
          </Row>

          <Row>
            <Link
              to={'/'}
              style={{ textDecoration: 'none' }}
              className="text-white"
            >
              {' '}
              <p>Top Products</p>
            </Link>
          </Row>
        </Col>
        <Col xs={6} md={3}>
          <Row>
            <Link
              to={'/contact'}
              style={{ textDecoration: 'none' }}
              className="text-white"
            >
              {' '}
              <p>Feedback</p>
            </Link>
          </Row>
          <Row>
            <p>Partners</p>
          </Row>
          <Row>
            <p>All Stores</p>
          </Row>
        </Col>
        <Col xs={6} md={3}>
          <Row>
            <h2>Ayna's Fashion</h2>
          </Row>
          <Row>
            <p>&copy; Ayna's Fashion 2022_ATTI</p>
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
