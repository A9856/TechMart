// src/context/CartContext.jsx - Simplified (no json-server)
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  });

  const calculateAndSet = (items) => {
    setCart({
      items,
      totalQuantity: items.reduce((s, i) => s + i.quantity, 0),
      totalAmount: items.reduce((s, i) => s + i.quantity * i.price, 0)
    });
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.items.find(item => item.id === product.id);
      let updatedItems;
      
      if (existing) {
        updatedItems = prev.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...prev.items, { ...product, quantity: 1 }];
      }
      
      calculateAndSet(updatedItems);
      return { ...prev };
    });
  };

  const updateQty = (id, change) => {
    setCart(prev => {
      const updatedItems = prev.items.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + change;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
      
      calculateAndSet(updatedItems);
      return { ...prev };
    });
  };

  const removeItem = (id) => {
    setCart(prev => {
      const updatedItems = prev.items.filter(item => item.id !== id);
      calculateAndSet(updatedItems);
      return { ...prev };
    });
  };

  const clearCart = () => {
    calculateAndSet([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);


// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const CartContext = createContext();
// const API_URL = "http://localhost:3001/cart";

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState({
//     items: [],
//     totalQuantity: 0,
//     totalAmount: 0
//   });

//   /* ================= LOAD FROM JSON SERVER ================= */
//   useEffect(() => {
//     axios.get(API_URL).then(res => {
//       calculateAndSet(res.data);
//     });
//   }, []);

//   /* ================= HELPER ================= */
//   const calculateAndSet = (items) => {
//     setCart({
//       items,
//       totalQuantity: items.reduce((s, i) => s + i.quantity, 0),
//       totalAmount: items.reduce((s, i) => s + i.quantity * i.price, 0)
//     });
//   };

//   /* ================= ADD TO CART ================= */
//   const addToCart = async (product) => {
//     const res = await axios.get(`${API_URL}?id=${product.id}`);

//     if (res.data.length > 0) {
//       const item = res.data[0];
//       await axios.patch(`${API_URL}/${item.id}`, {
//         quantity: item.quantity + 1
//       });
//     } else {
//       await axios.post(API_URL, {
//         ...product,
//         quantity: 1
//       });
//     }

//     const updated = await axios.get(API_URL);
//     calculateAndSet(updated.data);
//   };

//   /* ================= UPDATE QTY ================= */
//   const updateQty = async (id, change) => {
//     const res = await axios.get(`${API_URL}/${id}`);

//     if (res.data.quantity + change <= 0) {
//       await axios.delete(`${API_URL}/${id}`);
//     } else {
//       await axios.patch(`${API_URL}/${id}`, {
//         quantity: res.data.quantity + change
//       });
//     }

//     const updated = await axios.get(API_URL);
//     calculateAndSet(updated.data);
//   };

//   /* ================= REMOVE ITEM ================= */
//   const removeItem = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     const updated = await axios.get(API_URL);
//     calculateAndSet(updated.data);
//   };

//   /* ================= CLEAR CART ================= */
//   const clearCart = async () => {
//     const res = await axios.get(API_URL);
//     await Promise.all(
//       res.data.map(item => axios.delete(`${API_URL}/${item.id}`))
//     );
//     calculateAndSet([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, updateQty, removeItem, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);

