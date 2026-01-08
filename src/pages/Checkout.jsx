import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState({ items: [], totalAmount: 0, totalQuantity: 0 });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const placeOrder = () => {
    if (cart.items.length === 0) {
      alert("Cart is empty");
      return;
    }

    alert(`✅ Order placed successfully via ${paymentMethod.toUpperCase()}
Total Amount: ₹${cart.totalAmount}`);

    localStorage.removeItem("cart");
    navigate("/home");
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-grid">
        {/* LEFT – ORDER SUMMARY */}
        <div className="checkout-card">
          <h3>Order Summary</h3>

          {cart.items.map(item => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Qty: {item.quantity}</p>
                <p>₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}

          <hr />
          <h4>Total Items: {cart.totalQuantity}</h4>
          <h2 className="amount">₹{cart.totalAmount}</h2>
        </div>

        {/* RIGHT – PAYMENT */}
        <div className="checkout-card">
          <h3>Payment Method</h3>

          <label className="payment-option">
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI / Google Pay / PhonePe
          </label>

          <label className="payment-option">
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit / Debit Card
          </label>

          {paymentMethod === "card" && (
            <div className="card-form">
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Name on Card" />
              <div className="card-row">
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVV" />
              </div>
            </div>
          )}

          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>

          <Link to="/cart" className="back-link">← Back to Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
