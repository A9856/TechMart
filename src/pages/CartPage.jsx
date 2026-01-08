import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, updateQty, removeItem } = useCart();

  return (
    <>
      <header><h1>Your Cart</h1></header>

      <Cart
        cart={cart}
        updateQuantity={updateQty}
        removeFromCart={removeItem}
      />

      {cart.items.length > 0 && (
        <div className="container text-center mt-20">
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default CartPage;
