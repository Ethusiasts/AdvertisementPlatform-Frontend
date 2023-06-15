import { faClock, faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import RatingStars from "./RatingStars";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { addItem, checkBillboard, removeItem } from "../../utils/cart";
import { useState } from "react";

export default function AgencyCard({
  id,
  item,
  image,
  channel_name,
  peak_hour,
  production,
  normal_hour,
  rate,
  alt,
  onAddClick,
}) {
  const handleAddToCart = (event) => {
    event.stopPropagation();
    if (isInCart) {
      removeItem(id);
    } else {
      addItem(item);
    }
    setIsInCart(checkBillboard(id));
    // console.log("counted");
    onAddClick();
    // Call the remove from cart function
    // onRemoveFromCart(id);
    // Call the add to cart function

    // console.log("itemssssss");
    // console.log(getCart());
  };
  const [isInCart, setIsInCart] = useState(checkBillboard(id));
  return (
    <div className="billboard-card flex-1 bg-white rounded-lg overflow-hidden shadow-md mb-8">
      <Link key={id} to={`/medias/${id}`}>
        <img src={image} alt={alt} className="card-image w-full object-cover" />
      </Link>
      <div className="bg-[#D3F1DA] rounded-lg px-6 inline-block float-right mr-6 mt-2">
        <span className="text-[#0FA958] font-bold text-xs">{channel_name}</span>
      </div>
      <div className="p-4">
        <p className="text-sm font-bold  text-[#7D7D7D] pt-2">Features</p>
        <div className="flex pt-3">
          <span>Normal Hour</span>
          <span className="text-xs pl-6 pt-1">{normal_hour} birr</span>
        </div>
        <div className="flex pt-3">
          <span>Peak Hour</span>
          <span className="text-xs pl-6 pt-1">{peak_hour} birr</span>
        </div>
        <div className="flex pt-3">
          <span>Production</span>
          <span className="production-text text-xs pl-6 pt-1">
            {production} birr
          </span>
        </div>
        <div className="flex pt-2">
          <FontAwesomeIcon
            icon={faTrophy}
            className=" text-[#7D7D7D] pr-2 text-xs"
          />
          <p className="text-xs pb-2">
            <RatingStars rating={rate} />
          </p>
        </div>
        <div className="bg-[#D3F1DA] rounded-lg px-6 inline-block mt-2">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className=" text-[#7D7D7D] pr-3 text-xs"
          />
          <button
            className="text-[#0FA958] font-bold text-xs"
            onClick={handleAddToCart}
          >
            {checkBillboard(id) ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
