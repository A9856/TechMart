// src/components/ProductList.jsx
import React from 'react';
import ProductItem from './ProductItem.jsx';

function ProductList({ products, addToCart }) {
  return (
    <div className="container">
      <h2 className="text-center mb-30">Our Products</h2>
      <div className="grid">
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;