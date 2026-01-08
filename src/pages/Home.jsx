import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  });

  const navigate = useNavigate(); // ✅ IMPORTANT

  useEffect(() => {
    // Fetch products
    axios
      .get("http://localhost:3001/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));

    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ ADD TO CART + REDIRECT TO /cart
  const addToCart = (product) => {
    const exist = cart.items.find(item => item.id === product.id);
    let updatedItems;

    if (exist) {
      updatedItems = cart.items.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [...cart.items, { ...product, quantity: 1 }];
    }

    const updatedCart = {
      items: updatedItems,
      totalQuantity: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      totalAmount: updatedItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      )
    };

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // 🔥 THIS IS THE MAIN FIX
    navigate("/cart");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">TechMart</h2>

        <Link to="/cart" className="cart-link">
          🛒 Cart <span>{cart.totalQuantity}</span>
        </Link>
      </nav>

      {/* PRODUCTS */}
      <ProductList products={products} addToCart={addToCart} />
    </>
  );
}

export default Home;
