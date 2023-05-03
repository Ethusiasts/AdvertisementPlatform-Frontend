import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PriceFilter from './PriceFilter';
export default function BillboardFilterBar() { 
    return (
        <div className="filter bg-white p-4 rounded-md shadow-lg float-left w-1/4 mt-8">
            <h1 className="text-3xl font-bold mb-2">Filter</h1>
            <ul>
                <li className=" text-[#7F8386] text-2xl py-5">Location</li>
                <div className="text-center items-center rounded-full relative">
                    <FontAwesomeIcon icon={faLocationDot} className="absolute left-10 top-3 text-[#2785AE] text-base" />
                    <input
                        className=" border outline-none py-2 pl-11  placeholder-[#2785AE] rounded-md "
                        type="text"
                        placeholder="Addis Ababa, Ethiopia"
                    />
                </div>
                
                <li className=" text-[#7F8386] text-2xl py-5">Type</li>
                    <div className="flex items-center px-6">
                        <input id="checkbox1" type="checkbox" className="form-checkbox h-5 w-5 accent-[#0FA958]  bg-white-700 text-red-500" checked/>
                        <label htmlFor="checkbox1" className="ml-6 block text-gray-700">Production</label>
                    </div>
                    <div className="flex items-center px-6">
                            <input id="checkbox1" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                            <label htmlFor="checkbox1" className="ml-6 block text-gray-700">Without Production</label>
                    </div>
                <li className=" text-[#7F8386] text-2xl py-4">Price</li>
                <PriceFilter />
                <li className=" text-[#7F8386] text-2xl py-5">Size</li>

            </ul>
        </div>
    ); 
}