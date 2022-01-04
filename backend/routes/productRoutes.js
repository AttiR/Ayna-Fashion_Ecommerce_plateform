import express from 'express';
const router = express.Router();
// import from controllers
import { getProducts, getProductByID , deleteProduct} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js'

// Products routes

router.route('/').get(getProducts);
router.route('/:id').get(getProductByID).delete(protect, admin, deleteProduct);

export default router;

//Note we will test routes using postman
