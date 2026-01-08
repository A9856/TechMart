import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">TechMart</span>
      </div>

      <div className="nav-right">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
         <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-icon">
          🛒 <span>{cart.totalQuantity}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

