import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className="navbar" expand="lg" fixed="top">
        <Container fluid className="mx-5">
          <Navbar.Brand href="#">Ayna's Fashion</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action2">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action2">
                {' '}
                <i class="fas fa-user"></i> Sign In
              </Nav.Link>
              <Nav.Link href="#action2">
                {' '}
                <i class="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="#" className="nav_contact ">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
