import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      {/* LEFT LOGO */}
      <div className="nav-left">
        <span className="logo">TechMart</span>
      </div>

      {/* RIGHT MENU */}
      <div className="nav-right">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
         <Link to="/checkout">Checkout</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/cart" className="cart-icon">
          🛒 <span>{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
