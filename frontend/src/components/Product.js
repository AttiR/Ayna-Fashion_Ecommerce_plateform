import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3  rounded" style={{ border: 'none' }}>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <div className="my-3">
              <Rating
                value={product.rating}
                text={` ${product.numReviews} reviews`}
                color="#f8e825"
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
