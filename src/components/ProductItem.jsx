// src/components/ProductItem.jsx
import React from 'react';

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div style={{ padding: '15px' }}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">Price: ₹{product.price}</p>
        <button onClick={() => addToCart(product)} style={{ width: '100%' }}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;