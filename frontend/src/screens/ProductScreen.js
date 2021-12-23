import React, { useEffect } from 'react';

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

/** use params for getting the products with ids */
/* find() higher array methode to find the individual product with id */

const ProductScreen = () => {
  let params = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    /*const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);
      setProduct(data);
    };
    fetchProduct();*/

    dispatch(listProductsDetails(params.id));
  }, [dispatch]);

  return (
    <>
      <Container>
        <Link className="btn btn-info my-5" to="/">
          Go Back
        </Link>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row className="product-details">
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h4>{product.name}</h4>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    color="#f8e825"
                  />
                </ListGroupItem>
                <ListGroupItem>Price: {product.price}</ListGroupItem>
                <ListGroupItem>
                  Description: {product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card className="card">
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Button
                      className="btn btn-success
                    "
                      style={{ width: '100%' }}
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductScreen;
