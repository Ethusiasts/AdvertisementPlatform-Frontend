import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpandArrowsAlt,
  faMapMarkerAlt,
  faDollarSign,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import RatingStars from "./RatingStars";

export default function Card({
  status,
  rate,
  price,
  production,
  width,
  height,
  location,
  imageSrc,
  alt,
}) {
  return (
    <div className="w-[220px] bg-white rounded-lg shadow-lg p-4 cursor-pointer transform hover:scale-105 transition-transform duration-300">
      <img
        src={imageSrc}
        alt={alt}
        className="card-image2 w-full h-40 object-cover rounded-t-lg"
      />
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-[#0FA958] font-bold text-xs">{status}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="text-[#7D7D7D] text-xs"
          />
          <span className="text-xs">{price} birr</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-[#7D7D7D] text-xs"
          />
          <span className="text-xs">
            {production ? "With Production" : "Without Production"}
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <FontAwesomeIcon
            icon={faExpandArrowsAlt}
            className="text-[#7D7D7D] text-xs"
          />
          <span className="text-xs">
            W{width} : H{height}
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-[#7D7D7D] text-xs"
          />
          <span className="text-xs">{location}</span>
        </div>
        <div className="mt-4">
          <RatingStars rating={rate} />
        </div>
      </div>
    </div>
  );
}
