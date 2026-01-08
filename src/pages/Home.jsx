// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const productsData = [
      { id: 1, name: "Red T-Shirt", price: 499, description: "Cotton t-shirt", details: "M,L,XL", image: "/images/product 1.jpg" },
      { id: 2, name: "Blue Jeans", price: 999, description: "Slim fit jeans", details: "28-34", image: "/images/product 2.jpg" },
      { id: 3, name: "Black Shoes", price: 1299, description: "Sports shoes", details: "EU 40-44", image: "/images/product 3.jpg" },
      { id: 4, name: "White Shirt", price: 799, description: "Formal shirt", details: "38-42", image: "/images/product 4.jpg" },
      { id: 5, name: "Grey Hoodie", price: 1499, description: "Winter hoodie", details: "S-XXL", image: "/images/product 5.jpg" },
       { id: 6, name: "Red T-Shirt", price: 499, description: "Cotton t-shirt", details: "M,L,XL", image: "/images/product 6.jpg" },
      { id: 7, name: "Blue Jeans", price: 999, description: "Slim fit jeans", details: "28-34", image: "/images/product 7.jpg" },
      { id: 8, name: "Black Shoes", price: 1299, description: "Sports shoes", details: "EU 40-44", image: "/images/product 8.jpg" },
      { id: 9, name: "White Shirt", price: 799, description: "Formal shirt", details: "38-42", image: "/images/product 9.jpg" },
      { id: 10, name: "Grey Hoodie", price: 1499, description: "Winter hoodie", details: "S-XXL", image: "/images/product 10.jpg" },
       { id: 11, name: "Red T-Shirt", price: 499, description: "Cotton t-shirt", details: "M,L,XL", image: "/images/product 11.jpg" },
      { id: 12, name: "Blue Jeans", price: 999, description: "Slim fit jeans", details: "28-34", image: "/images/product 12.jpg" },
    ];
    setProducts(productsData);
  }, []);

  const handleAdd = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return <ProductList products={products} addToCart={handleAdd} />;
}

export default Home;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductList from "../components/ProductList";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:3001/products")
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleAdd = (product) => {
//     addToCart(product);
//     navigate("/cart");
//   };

//   return <ProductList products={products} addToCart={handleAdd} />;
// }

// export default Home;
