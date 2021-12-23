import express from 'express';
import dotenv from 'dotenv';
//import products from './data/products.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('API is running.....');
});
// We are moving routes to routes folder we will ftech products routes from productRoutes
/*app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});*/

// mount the prodcutRoutes
app.use('/api/products', productRoutes);

// Custom Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on Port ${PORT}`
  )
);
