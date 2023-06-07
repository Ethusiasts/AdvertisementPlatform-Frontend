import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { itemsCount } from "../../utils/cart";
import { useEffect } from "react";
function Cart({ cartItems, itemCount }) {
  const [count, setCount] = useState(0);

  return (
    <div className="cart-container">
      <div className="cart-icon">
        <span className="item-count">{itemCount}</span>
        <FontAwesomeIcon icon={faCartPlus} className="text-xl" />
        {/* <span className="pb-4 pl-1 text-md">Cart</span> */}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-dropdown">
          <ul>
            {/* {cartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))} */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cart;
