// src/pages/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  const [cart, setCart] = useState({ items: [], totalAmount: 0, totalQuantity: 0 });

  useEffect(() => {
    // Cart data load करें localStorage से (object format में)
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    }
  }, []);

  const handlePlaceOrder = () => {
    // Order place करने का simulation (आप इसे backend API से connect कर सकते हैं)
    if (cart.items.length > 0) {
      alert(`Order placed successfully! Total Amount: ₹${cart.totalAmount}. Total Items: ${cart.totalQuantity}`);
      // Cart clear करें
      setCart({ items: [], totalAmount: 0, totalQuantity: 0 });
      localStorage.removeItem('cart');
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <div>
      <header>
        <h1>Checkout</h1>
      </header>
      <div className="container mt-20">
        {cart.items.length === 0 ? (
          <div className="text-center">
            <p style={{ color: '#6c757d', fontSize: '18px' }}>Your cart is empty.</p>
            <Link to="/"><button>Go back to shopping</button></Link>
          </div>
        ) : (
          <div>
            <h3>Order Summary</h3>
            <p>Total Items: {cart.totalQuantity} | Grand Total: ₹{cart.totalAmount}</p>
            {cart.items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div style={{ flex: 1 }}>
                  <h4>{item.name}</h4>
                  <p style={{ color: '#6c757d', margin: '0 0 5px 0' }}>{item.description}</p>
                  <p style={{ fontSize: '14px', color: '#495057' }}>{item.details}</p>
                  <p>Quantity: {item.quantity} | Price: ₹{item.price} | Subtotal: ₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="pt-20" style={{ borderTop: '2px solid #dee2e6', textAlign: 'right' }}>
              <p className="total">Grand Total: ₹{cart.totalAmount}</p>
              <button onClick={handlePlaceOrder} style={{ marginRight: '10px', padding: '15px 30px' }}>Place Order</button>
              <Link to="/"><button style={{ padding: '15px 30px' }}>Back to Home</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;