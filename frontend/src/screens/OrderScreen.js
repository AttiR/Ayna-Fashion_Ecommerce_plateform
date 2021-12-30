import React, { useEffect } from 'react';
import {
  Col,
  Row,
  Image,
  Card,
  ListGroup,
  ListGroupItem,
  Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { getOrderDetails } from '../actions/orderActions';

import Message from '../components/Message';

const OrderScreen = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const orderId = params.id;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    // Calculate Price
    order.ItemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Container className="mt-5">
        <h2>Order {order._id}</h2>
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong>
                  {order.user.name}
                </p>
                <p>
                  <strong>Email:</strong>
                  <a href={`mailto:${order.user.name}`}>{order.user.email}</a>
                </p>
                <p>
                  <strong>Adress:</strong>
                  {order.shippingAddress.address},{order.shippingAddress.city},
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <Message variant="success">Delivered On {order.deliveredAt}</Message>
                ) : (
                  <Message variant="danger">Not Delivered</Message>
                )}
              </ListGroupItem>

              <ListGroupItem>
                <h2>Payment Methode</h2>
                <p>
                  <strong>Methode:</strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Message variant="success">Paid On {order.paidAt}</Message>
                ) : (
                  <Message variant="danger">Not Paid</Message>
                )}
              </ListGroupItem>

              <ListGroupItem>
                <h2>Order Items</h2>
                {order.orderItems.length === 0 ? (
                  <Message> Order is Empty </Message>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item, index) => (
                      <ListGroupItem key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              rounded
                              fluid
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>

                          <Col md={4}>
                            {item.qty} x ${item.price} = $
                            {item.qty * item.price}
                          </Col>
                        </Row>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                )}
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h2>Order Summary</h2>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Items</Col>
                    <Col>$ {order.ItemsPrice}</Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>$ {order.shippingPrice}</Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>Tax</Col>
                    <Col>$ {order.taxPrice}</Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>Total</Col>
                    <Col>$ {order.totalPrice}</Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default OrderScreen;
