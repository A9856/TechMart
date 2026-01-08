// src/components/Home.jsx - Complete with all fields (name, price, description, details, image)
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const staticProducts = [
      { 
        id: 1, 
        name: "Red Cotton T-Shirt", 
        price: 499, 
        description: "100% pure cotton, breathable fabric", 
        details: "Size: M, L, XL | Color: Red", 
        image: "/images/product 1.jpg" 
      },
      { 
        id: 2, 
        name: "Slim Fit Blue Jeans", 
        price: 999, 
        description: "Stretchable denim with perfect fit", 
        details: "Size: 28-34 | Wash: Medium", 
        image: "/images/product 2.jpg" 
      },
      { 
        id: 3, 
        name: "Black Running Shoes", 
        price: 1299, 
        description: "Lightweight with extra grip", 
        details: "EU: 40-44 | Type: Sports", 
        image: "/images/product 3.jpg" 
      },
      { 
        id: 4, 
        name: "White Formal Shirt", 
        price: 799, 
        description: "Slim fit cotton formal shirt", 
        details: "Size: 38-42 | Collar: Classic", 
        image: "/images/product 4.jpg" 
      },
      { 
        id: 5, 
        name: "Grey Hoodie", 
        price: 1499, 
        description: "Fleece lined winter hoodie", 
        details: "Size: S-XXL | Hood: Yes", 
        image: "/images/product 5.jpg" 
      },
      { 
        id: 6, 
        name: "Brown Leather Belt", 
        price: 599, 
        description: "Genuine leather with metal buckle", 
        details: "Length: 42 inch | Width: 1.5\"", 
        image: "/images/product 6.jpg" 
      },
      { 
        id: 7, 
        name: "Black Analog Watch", 
        price: 1999, 
        description: "Stainless steel with leather strap", 
        details: "Waterproof: 30m | Glass: Mineral", 
        image: "/images/product 7.jpg" 
      },
      { 
        id: 8, 
        name: "Black Baseball Cap", 
        price: 299, 
        description: "Adjustable snapback cap", 
        details: "Material: Cotton | Adjustable: Yes", 
        image: "/images/product 8.jpg" 
      },
      { 
        id: 9, 
        name: "Navy Running Shorts", 
        price: 699, 
        description: "Quick dry athletic shorts", 
        details: "Size: S-L | Pocket: Yes", 
        image: "/images/product 9.jpg" 
      },
      { 
        id: 10, 
        name: "Khaki Cargo Pants", 
        price: 1199, 
        description: "6-pocket utility cargo pants", 
        details: "Size: 30-36 | Fabric: Cotton", 
        image: "/images/product 10.jpg" 
      },
      { 
        id: 11, 
        name: "White Casual Sneakers", 
        price: 899, 
        description: "Canvas sneakers for daily wear", 
        details: "EU: 39-43 | Lace-up", 
        image: "/images/product 11.jpg" 
      },
      { 
        id: 12, 
        name: "Blue Bomber Jacket", 
        price: 1799, 
        description: "Water resistant bomber jacket", 
        details: "Size: M-XXL | Lining: Quilted", 
        image: "/images/product 12.jpg" 
      }
    ];
    setProducts(staticProducts);
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
