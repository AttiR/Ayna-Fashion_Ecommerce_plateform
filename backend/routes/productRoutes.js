import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

// import Product Model
import Product from '../models/productModel.js';
// in order to handle exceptions insted of try catch, using expressasynchandler

//@desc     Fetch all Products
//@route  Get /api/products
//@access public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); // {} object will ftech all data
    res.json(products);
  })
);

//@desc     Fetch sinle Product
//@route  Get /api/products/:id
//@access public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    //const product = products.find((p) => p._id === req.params.id);

    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      //res.status(404).json({ message: 'Product not found' });
      res.status(404)
      throw new Error('Product Not found')
    }
  })
);

export default router;

//Note we will test routes using postman
