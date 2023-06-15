import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import RatingStars from "./RatingStars";

export default function AgencyRecommendedCard({
  channel_name,
  rate,
  peak_hour,
  production,
  normal,
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
          <span className="text-[#0FA958] font-bold text-xs">
            {channel_name}
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span>Peak Hour</span>
          <span className="text-xs">{peak_hour} birr</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span>Normal</span>
          <span className="text-xs">{normal} birr</span>
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
        <div className="mt-4">
          <RatingStars rating={rate} />
        </div>
      </div>
    </div>
  );
}
