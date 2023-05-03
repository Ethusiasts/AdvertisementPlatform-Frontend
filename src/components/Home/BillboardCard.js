import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
export default function Card({ status, place, city, width, height, location, imageSrc, alt }) {
    return (
      <div className="billboard-card flex-1 m-4 bg-white rounded-lg overflow-hidden shadow-md">
        <img src={imageSrc} alt={alt} className="h-48 w-full object-cover" />
            <div className="bg-[#D3F1DA] rounded-lg px-6 inline-block float-right mr-6 mt-4">
                <span className="text-[#0FA958] font-bold">{status}</span>
            </div>
        <div className="p-4">
            <p className="text-xl font-medium text-gray-800 pt-8">{place}</p>
            <p className="text-xl font-medium text-[#7D7D7D]">{city}</p>
            <p className="text-xl font-bold  text-[#7D7D7D] pt-4">Features</p>
            <div className='flex pt-3'>
                <FontAwesomeIcon icon={faExpandArrowsAlt} className="text-[#7D7D7D] pr-3" />
                <span>W{ width } : H{ height }</span>
            </div>
            <div className='flex pt-3'>
                <FontAwesomeIcon icon={faLocationCrosshairs} className=" text-[#7D7D7D] pr-3" />
                    <span>{ location }</span>
            </div>
        </div>
      </div>
    );
  }