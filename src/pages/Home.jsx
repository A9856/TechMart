import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return <ProductList products={products} addToCart={handleAdd} />;
}

export default Home;
