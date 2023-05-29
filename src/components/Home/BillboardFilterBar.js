import { MdEditLocationAlt } from "react-icons/md";
import PriceFilter from "./PriceFilter";
import { useState } from "react";
export default function BillboardFilterBar({ onClose }) {
  const [size, setSize] = useState(0);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [resetPriceFilter, setResetPriceFilter] = useState(false);

  const handleSize = (event) => {
    setSize(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleClearAllButton = () => {
    setSize(0);
    setLocation("");
    setType("");
    setResetPriceFilter(true); // Set the resetPriceFilter state to trigger PriceFilter reset
  };

  return (
    <div className=" bg-white p-4 rounded-md shadow-lg md:float-left md:w-1/4 mt-8">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-[#2E4541]">Filters</h1>
          <button
            className="hidden mt-2 md:flex border-transparent text-red-700"
            onClick={handleClearAllButton}
          >
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
          <li className=" text-[#2E4541] font-bold text-l py-4 ">Location</li>
          <div className=" rounded-full relative ">
            <MdEditLocationAlt
              size={15}
              className=" absolute left-3 top-3 xs:left-6 text-[#869EA0]"
            />

            <input
              className="w-4/5  text-black border outline-none py-2 pl-8 placeholder-[#869EA0] rounded-md "
              type="text"
              value={location}
              placeholder="Addis Ababa, Ethiopia"
              onChange={handleLocation}
            />
          </div>

          <li className=" text-[#2E4541] font-bold text-l py-4 ">Type</li>
          <div className="flex items-center ">
            <input
              id="checkbox1"
              type="checkbox"
              className="form-checkbox h-4 w-4 accent-[#3f51b5]  bg-white-500"
              checked={type === "Production"}
              onChange={() => setType("Production")}
            />
            <label htmlFor="checkbox1" className="ml-6 block text-gray-500">
              Production
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkbox1"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              checked={type === "Without Production"}
              onChange={() => setType("Without Production")}
            />
            <label htmlFor="checkbox1" className="ml-6 block text-gray-500">
              Without Production
            </label>
          </div>
          <li className="text-[#2E4541] font-bold text-l py-4">Price</li>
          <PriceFilter resetPriceFilter={resetPriceFilter} />
          <li className="text-[#2E4541] font-bold text-l py-4">Size (max)</li>

          <div className="flex  rounded-full text-[#D9D9D9]">
            <input
              className=" w-1/2 bg-[#D9D9D9] text-black border outline-none py-2 pl-2 placeholder-gray-900 rounded-md "
              type="number"
              placeholder="300"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
            <div className="pl-4 pt-4 text-[#7D7D7D]">
              {Math.sqrt(size)}m x {Math.sqrt(size)}m
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
