import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
export default function Card({
  status,
  place,
  city,
  width,
  height,
  location,
  imageSrc,
  alt,
}) {
  return (
    <div className="billboard-card flex-1 bg-white rounded-lg overflow-hidden shadow-md mb-8">
      <img
        src={imageSrc}
        alt={alt}
        className="card-image w-full object-cover"
      />
      <div className="bg-[#D3F1DA] rounded-lg px-6 inline-block float-right mr-6 mt-2">
        <span className="text-[#0FA958] font-bold text-xs">{status}</span>
      </div>
      <div className="p-4">
        <p className="font-medium text-gray-800 pt-4 text-xs">{place}</p>
        <p className="font-medium text-[#7D7D7D] text-xs">{city}</p>
        <p className="text-sm font-bold  text-[#7D7D7D] pt-2">Features</p>
        <div className="flex pt-3">
          <FontAwesomeIcon
            icon={faExpandArrowsAlt}
            className="text-[#7D7D7D] pr-3 text-xs"
          />
          <span className="text-xs">
            W{width} : H{height}
          </span>
        </div>
        <div className="flex pt-3">
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            className=" text-[#7D7D7D] pr-3 text-xs"
          />
          <span className="text-xs">{location}</span>
        </div>
      </div>
    </div>
  );
}
