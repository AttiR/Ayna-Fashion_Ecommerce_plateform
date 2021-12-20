import React from 'react';
import products from '../products';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Buttom,
  Container,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

/** use params for getting the products with ids */
/* find() higher array methode to find the individual product with id */

const ProductScreen = () => {
  let params = useParams();
  const product = products.find((p) => p._id === params.id);
  return (
    <>
      <Container>
        <Link className="btn btn-info my-5" to="/">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
              </ListGroup.Item>
              <ListGroup.Item>
                Price: {product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductScreen;
