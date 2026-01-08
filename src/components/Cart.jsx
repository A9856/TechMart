// src/components/Cart.jsx
import React from 'react';

function Cart({ cart, updateQuantity, removeFromCart }) {
  return (
    <div className="container mt-20">
      <h2>Your Cart</h2>
      <p>Total Items: {cart.totalQuantity} | Total Amount: ₹{cart.totalAmount}</p>
      {cart.items.length === 0 ? (
        <p style={{ color: '#6c757d' }}>Your cart is empty. Start shopping!</p>
      ) : (
        <div>
          {cart.items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p style={{ color: '#6c757d', margin: '0 0 5px 0' }}>{item.description}</p>
                <p style={{ fontSize: '14px', color: '#495057' }}>{item.details}</p>
                <p style={{ color: '#007bff', fontWeight: 'bold' }}>₹{item.price} each</p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <button onClick={() => updateQuantity(item.id, -1)} style={{ marginRight: '10px' }}>-</button>
                  <span style={{ margin: '0 10px', fontWeight: 'bold' }}>Quantity: {item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} style={{ marginRight: '10px' }}>+</button>
                  <button className="danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;