// src/context/CartContext.jsx - 100% WORKING
import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  
  const calculateTotals = useCallback((items) => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    return { totalQuantity, totalAmount };
  }, []);

  const addToCart = useCallback((product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }, []);

  const updateQty = useCallback((id, change) => {
    setCartItems(prevItems => {
      const newItems = prevItems
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
      return newItems;
    });
  }, []);

  const removeItem = useCallback((id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const { totalQuantity, totalAmount } = calculateTotals(cartItems);

  const value = {
    cart: {
      items: cartItems,
      totalQuantity,
      totalAmount
    },
    addToCart,
    updateQty,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

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

