import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>TechMart</h3>
          <p>
            Your trusted destination for quality electronics and accessories.
            Fast delivery, secure checkout, and best prices.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 Prayagraj, India</p>
          <p>📞 9506640798</p>
          <p>✉️ adilkhanofficial74@gmail.com</p>
          <p>
            🔗 <a href="https://github.com/a9856" target="_blank">GitHub</a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TechMart. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
