// import Product Model
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// in order to handle exceptions insted of try catch, using expressasynchandler

//@desc     Fetch all Products
//@route  Get /api/products
//@access public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // {} object will ftech all data
  res.json(products);
});

//@desc     Fetch sinle Product
//@route  Get /api/products/:id
//@access public

const getProductByID = asyncHandler(async (req, res) => {
  //const product = products.find((p) => p._id === req.params.id);
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    //res.status(404).json({ message: 'Product not found' });
    res.status(404);
    throw new Error('Product Not found');
  }
});

// Delete Product
// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProducts, getProductByID, deleteProduct};
