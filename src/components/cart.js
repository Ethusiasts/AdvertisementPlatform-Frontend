import { useState, useEffect } from "react";
import { getCart } from "../utils/cartHelpers";
import Navigation from "./Landing/Navigation";

const Cart = () => {
  const [cartItems, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cart Detail</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded p-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-gray-600">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-bold text-gray-700">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
