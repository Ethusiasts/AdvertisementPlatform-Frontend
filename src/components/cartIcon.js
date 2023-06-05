import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { itemsCount } from "../utils/cartHelpers";

const CartIcon = () => {
  return (
    <div className="cart-icon flex items-center">
      <FaShoppingCart className="text-gray-600 mr-1" />
      <span className="cart-count bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
        {itemsCount()}
      </span>
    </div>
  );
};

export default CartIcon;
