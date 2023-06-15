import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";
import { addItem, checkBillboard, removeItem } from "../../utils/cart";
export default function Card({
  id,
  item,
  status,
  rate,
  price,
  production,
  width,
  height,
  location,
  adult_content,
  imageSrc,
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
      <Link key={id} to={`/billboards/${id}`}>
        <img
          src={imageSrc}
          alt={alt}
          className="card-image w-full object-cover"
        />
      </Link>

      <div className=" rounded-lg px-6 float-right  mt-2">
        <span
          className={`${
            status === "Occupied" ? "text-red-500" : "text-[#0FA958]"
          } font-bold text-md`}
        >
          {status}
        </span>
      </div>

      <div className="p-4">
        <p className="text-sm font-bold  text-[#7D7D7D] pt-2">Features</p>
        <div className="flex pt-3">
          <FontAwesomeIcon
            icon={faDollar}
            className=" text-[#7D7D7D] pr-3 text-xs"
          />
          <span className="text-xs">{price} birr</span>
        </div>
        <div className="flex pt-3">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="production-icon text-[#7D7D7D] pr-3 text-xs"
          />
          <span className="production-text text-xs">
            {production ? "With Production" : "Without Production"}
          </span>
        </div>
        <div className="flex pt-2">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className=" text-[#7D7D7D] pr-3 text-xs"
          />
          <span
            className={`${
              adult_content === false ? "text-red-500" : "text-[#0FA958]"
            }  text-xs`}
          >
            {adult_content
              ? "Adult content Allowed"
              : "Adult content not allowed"}
          </span>
        </div>
        <div className="flex pt-3">
          <FontAwesomeIcon
            icon={faExpandArrowsAlt}
            className="text-[#7D7D7D] pr-3 text-xs"
          />
          <span className="text-xs">
            W{width} : H{height}
          </span>
        </div>

        {/* <div className="flex pt-3">
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            className=" text-[#7D7D7D] pr-3 text-xs"
          />
          <span className="text-xs">{location}</span>
        </div> */}
        <div className="flex pt-2">
          <FontAwesomeIcon
            icon={faTrophy}
            className=" text-[#7D7D7D] pr-2 text-xs"
          />
          <p className="text-xs pb-2">
            <RatingStars rating={rate} />
          </p>
        </div>

        {/* <div className="mt-4">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full float-right"
            onClick={handleAddToCart}
          ></button>
        </div> */}

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
