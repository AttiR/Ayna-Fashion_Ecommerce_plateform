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
  if(order){

    res.json(order)

  }else{

    res.status(404)
    throw new Error('Order Not found')

  }
});
export { addOrderItems, getOrderById };
