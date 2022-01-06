import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Container className="mt-5">
        <section className="about-section mt-5" id="about">
          <div className="container">
            <div className="about">
              <div className="about-text">
                <Typography component="h1" variant="h4">
                  About Us
                </Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique perferendis doloremque officia possimus magnam quo
                  facilis aliquid recusandae eveniet repudiandae corrupti
                  architecto itaque mollitia, beatae necessitatibus vitae cum
                  laboriosam tempora. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Similique perferendis doloremque officia
                  possimus magnam quo facilis aliquid recusandae eveniet
                  repudiandae corrupti architecto itaque mollitia, beatae
                  necessitatibus vitae cum laboriosam tempora!
                </p>
                <Link to="/contact" className="btn btn-info">
                  Get a quote
                </Link>
              </div>
              <div class="about-image">
                <img src="/images1/image11.jpg" alt="img" />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default About;
