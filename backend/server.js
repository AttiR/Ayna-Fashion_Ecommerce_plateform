import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
//import products from './data/products.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();

app.use(express.json()); // will allow us to accept us data in body

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
// mount the userRoutes
app.use('/api/users', userRoutes);

// mount the orderRoutes
app.use('/api/orders', orderRoutes);

// paypal client id

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set stattic folder
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'forntend', 'build', 'index.html'));
  });
}

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
