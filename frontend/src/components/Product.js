import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={`/prodcut/${product._id}`}>
          <Card.Img src={product.image} />
        </a>
        <Card.Body>
          <a href={`/prodcut/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            <div className="my-3">
              <Rating
                value={product.rating}
                text={`${product.numReview} reviews`}
              />
            </div>
          </Card.Text>
          <Card.Text as="h4">€ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
