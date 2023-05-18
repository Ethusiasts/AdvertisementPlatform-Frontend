import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PriceFilter from "./PriceFilter";
export default function BillboardFilterBar({ onClose }) {
  return (
    <div className=" bg-white p-4 rounded-md shadow-lg md:float-left md:w-1/4 mt-8">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-[#2E4541]">Filters</h1>
          <button className="hidden mt-2 md:flex border-transparent text-red-700">
            Clear All
          </button>
          <button
            className="border-transparent md:hidden flex float-right text-red-700 font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <ul>
          <li className=" text-[#2E4541] font-bold text-xl py-4 ml-2">
            Location
          </li>
          <div className="text-center items-center rounded-full relative ">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-xs absolute left-10 top-3 xs:left-6 text-[#869EA0]"
            />
            <input
              className="w-4/5 placeholder-shown:whitespace-pre-wrap text-black border outline-none py-2 pl-8 placeholder-[#869EA0] rounded-md "
              type="text"
              placeholder="Addis Ababa, Ethiopia"
            />
          </div>

          <li className=" text-[#2E4541] text-xl font-bold pt-5 pb-4 ml-2">
            Type
          </li>
          <div className="flex items-center px-6">
            <input
              id="checkbox1"
              type="checkbox"
              className="form-checkbox h-4 w-4 accent-[#3f51b5]  bg-white-500"
              checked
            />
            <label htmlFor="checkbox1" className="ml-6 block text-gray-500">
              Production
            </label>
          </div>
          <div className="flex items-center px-6">
            <input
              id="checkbox1"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="checkbox1" className="ml-6 block text-gray-500">
              Without Production
            </label>
          </div>
          <li className="text-[#2E4541] text-xl font-bold pt-4 pb-2 ml-2">
            Price
          </li>
          <PriceFilter />
          <li className="text-[#2E4541] text-xl font-bold pt-5 pb-3 ml-2">
            Size
          </li>

          <div className="flex pl-6 rounded-full text-[#D9D9D9]">
            <input
              className=" w-1/2 bg-[#D9D9D9] text-black border outline-none py-2 pl-2 placeholder-gray-900 rounded-md "
              type="text"
              placeholder="300"
            />
            <div className="pl-4 pt-4 text-[#7D7D7D] font-bold">Max</div>
          </div>
        </ul>
      </div>
    </div>
  );
}
