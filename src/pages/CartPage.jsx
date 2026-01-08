import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart.jsx';

function CartPage() {
  const [cart, setCart] = useState({ items: [], totalAmount: 0, totalQuantity: 0 });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (id, change) => {
    let updatedItems = cart.items
      .map(item => {
        if (item.id === id) {
          const qty = item.quantity + change;
          return qty > 0 ? { ...item, quantity: qty } : null;
        }
        return item;
      })
      .filter(Boolean);

    const updatedCart = {
      items: updatedItems,
      totalAmount: updatedItems.reduce((s, i) => s + i.price * i.quantity, 0),
      totalQuantity: updatedItems.reduce((s, i) => s + i.quantity, 0)
    };

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedItems = cart.items.filter(item => item.id !== id);
    const updatedCart = {
      items: updatedItems,
      totalAmount: updatedItems.reduce((s, i) => s + i.price * i.quantity, 0),
      totalQuantity: updatedItems.reduce((s, i) => s + i.quantity, 0)
    };

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <header>
        <h1>Your Cart</h1>
      </header>

      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      {cart.items.length > 0 && (
        <div className="container text-center mt-20">
          <Link to="/checkout">
            <button style={{ padding: '15px 30px' }}>
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
