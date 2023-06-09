import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Cart({ itemCount }) {
  return (
    <div className="cart-container">
      <div className="cart-icon">
        <span className="item-count">{itemCount}</span>
        <FontAwesomeIcon icon={faCartPlus} className="text-xl" />
        {/* <span className="pb-4 pl-1 text-md">Cart</span> */}
      </div>
    </div>
  );
}

export default Cart;
