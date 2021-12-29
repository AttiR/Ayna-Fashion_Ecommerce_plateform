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

export {addOrderItems}
