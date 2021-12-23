import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
import { Link} from 'react-router-dom';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <section className="intro-section">
        <div className="container">
          <div className="intro">
            <p className="intro-text">For your delicacies.</p>
            <h1 className="p-head">
              Welcome to <span>foody dinner restaurant</span>
            </h1>
            <p className="white-text">
              Our meals are exquisite and tasty Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sit voluptatibus sapiente, ullam
              iste amet temporibus corporis itaque!
            </p>
            <Link className="btn btn-info" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Container className="py-5">
        <Row>
          <h1>Features Products</h1>

          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
