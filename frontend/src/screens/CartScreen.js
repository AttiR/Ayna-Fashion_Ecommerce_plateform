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
  ListGroup,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const productId = params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1; // quantity number on index o of Array
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart) // cart from store
  const {cartItems} = cart

  console.log(cartItems)


  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  },[dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
