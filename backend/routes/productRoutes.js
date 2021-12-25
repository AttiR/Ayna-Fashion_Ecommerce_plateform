import express from 'express';
const router = express.Router();
// import from controllers
import { getProducts, getProductByID } from '../controllers/productController.js';

// Products routes

router.route('/').get(getProducts);
router.route('/:id').get(getProductByID);

export default router;

//Note we will test routes using postman
