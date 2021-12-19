import React from 'react';
import { useParams } from 'react-router-dom';

/** use params for getting the products with ids */

const ProductScreen = () => {
  let params = useParams();
  return (
    <div>
      <h2>Product {params.id}</h2>
    </div>
  );
};

export default ProductScreen;
