import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//@desc    Create New Order
//@route  POST /api/orders
//@access private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order Items');
    return;

    // send order in database
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    // svaeorder in database

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// Get order by id

//@desc   Get order by id
//@route  GET /api/orders/:id
//@access private

const getOrderById = asyncHandler(async (req, res) => {
  // fetch data from database
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order Not found');
  }
});

//@desc   Update Order to paid
//@route  GET /api/orders/:id/pay
//@access private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();

    // order payment result will come for paypal
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order Not found');
  }
});

//@desc   Get logged in user Orders
//@route  GET /api/orders/myorders
//@access private

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

export { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders };