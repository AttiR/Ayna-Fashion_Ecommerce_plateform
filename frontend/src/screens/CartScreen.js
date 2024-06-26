import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Form,
  Card,
  Image,
  Container,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import Message from '../components/Message';

import { Typography } from '@material-ui/core';


import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const productId = params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1; // quantity number on index o of Array
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart); // cart from store
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // useSelector hook is used to get cartItems from the state

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    }
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty, userInfo, navigate]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    if (userInfo) {
      navigate('/shipping');
    } else {
      navigate('/signin');
    }
  };

  return (
   
    <Container className="mt-5">
    
      <Row >
        <Col md={8}>
          <Typography component="h1" variant="h4" className='mb-5'>
            Shopping Cart
          </Typography>

          {cartItems.length === 0 ? (
            <Message variant="info">
              Cart is Empty <Link to="/">Go back</Link>{' '}
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroupItem key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>€ {item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block btn-success"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
