import { MdEditLocationAlt } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmericanSignLanguageInterpreting,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PriceFilter from "./PriceFilter";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { searchBillboards } from "../../services/billboard_api";
import { searchAgencies } from "../../services/agency_api";
import Geocode from "react-geocode";
import axios from "axios";
import { getLocations } from "../../services/location_api";
import RadiusFilter from "./RadiusFilter";
export default function BillboardFilterBar({
  onClose,
  query,
  onFilterStateChange,
  setFilterResults,
  currentPage,
  isBillboard,
}) {
  const [size, setSize] = useState(0);
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [type, setType] = useState("");
  const [promotionTime, setpromotionTime] = useState("");
  const [resetPriceFilter, setResetPriceFilter] = useState(false);
  const [resetSearchDistance, setResetSearchDistance] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [priceValue, setPriceValue] = useState([0, 2000]);
  const [searchDistanceValue, setsearchDistanceValue] = useState(1);
  const [channelType, setchannelType] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [adultContent, setAdultContent] = useState(false);
  const options = ["TV", "RADIO"];

  let min_price = priceValue[0];
  let max_price = priceValue[1];

  const handleSize = (event) => {
    setSize(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleCheckboxChange = () => {
    setAdultContent(!adultContent);
  };

  useEffect(() => {
    getLocations({ location })
      .then((res) => {
        //         //         //         setSuggestions(res.data);
        return res;
      })
      .catch((error) => {
        return error;
      });

    // const fetchSuggestions = async () => {
    //   try {
    //     const response = await getLocations({ location });
    //     setSuggestions(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    if (!location) {
      setSuggestions([]);
    }
  }, [location]);

  const handleLocationChange = (event) => {
    const inputValue = event.target.value;
    setLocation(inputValue);
  };

  const handleLocationSelect = (selectedLocation) => {
    // Get the latitude and longitude of the selected location
    const { lat, lon } = selectedLocation;

    // Further processing or actions with the selected location
    setLatitude(lat);
    setLongitude(lon);

    setLocation(selectedLocation.display_name);
    setSuggestions([]); // Clear suggestions
  };

  const handleType = (event) => {
    setType(event.target.value);
  };
  const handlePriceValueChange = (value) => {
    setPriceValue(value);
  };
  const handleSearchDistanceValueChange = (value) => {
    setsearchDistanceValue(value);
  };
  const handleOptionClick = (option) => {
    setchannelType(option);
    setIsDropdownOpen(false);
  };

  const handleClearAllButton = () => {
    setSize(0);
    setAdultContent(false);
    setLocation("");
    setType("");
    setResetPriceFilter(true); // Set the resetPriceFilter state to trigger PriceFilter reset
    setResetSearchDistance(true);
    onFilterStateChange(false);
    setpromotionTime("");
    setchannelType(null);
  };

  const { mutate, data, isLoading, isError, error } = useMutation(() => {
    if (isBillboard) {
      searchBillboards({
        currentPage,
        query,
        latitude,
        longitude,
        type,
        adultContent,
        size,
        min_price,
        max_price,
        searchDistanceValue,
      })
        .then((res) => {
          setFilterResults(res.results);
          return res.results;
        })
        .catch((error) => {
          return error;
        });
    } else {
      searchAgencies({
        currentPage,
        query,
        channelType,
        type,
        promotionTime,
        min_price,
        max_price,
      })
        .then((res) => {
          setFilterResults(res.results);
          return res.results;
        })
        .catch((error) => {
          return error;
        });
    }
  });
  useEffect(() => {
    mutate();
  }, [currentPage, mutate]);

  const filterClick = () => {
    // Trigger the API request when the button is clicked
    mutate();
    onFilterStateChange(true);
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
        <ul className="relative">
          {isBillboard === true && (
            <>
              <li className=" text-[#2E4541] font-bold text-l py-4 ">
                Location
              </li>
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
                  onChange={handleLocationChange}
                />
              </div>
              {location && (
                <>
                  <ul
                    style={
                      {
                        // position: "absolute",
                        // bottom: "60%",
                        // left: 0,
                        // zIndex: 1,
                      }
                    }
                    className="pt-2"
                  >
                    {suggestions
                      .filter((suggest) => suggest.display_name !== location)
                      .map((suggest) => (
                        <li
                          key={suggest.place_id}
                          onClick={() => handleLocationSelect(suggest)}
                          className="cursor-pointer transition duration-300 hover:bg-gray-200"
                        >
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="text-gray-500 pr-3"
                          />

                          <span className="py-2">{suggest.display_name}</span>
                        </li>
                      ))}
                  </ul>
                </>
              )}
              <div className="py-2">
                <li className=" text-[#2E4541] font-bold text-l pt-3  ">
                  Search Distance(KM)
                </li>

                <RadiusFilter
                  onResetSearchDistance={resetSearchDistance}
                  onSearchDistanceValueChange={handleSearchDistanceValueChange}
                  setResetSearchDistance={setResetSearchDistance}
                />
              </div>
              <li className=" text-[#2E4541] font-bold text-l pt-2 pb-2 ">
                Content
              </li>
              <div className="flex items-center ">
                <input
                  id="checkbox3"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 accent-[#3f51b5]  bg-white-500"
                  checked={adultContent}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="checkbox1" className="ml-6 block text-gray-500">
                  With Adult Content
                </label>
              </div>
            </>
          )}

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
              id="checkbox2"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              checked={type === "Without Production"}
              onChange={() => setType("Without Production")}
            />
            <label htmlFor="checkbox1" className="ml-6 block text-gray-500">
              Without Production
            </label>
          </div>

          {!isBillboard && (
            <>
              <li className=" text-[#2E4541] font-bold text-l py-4 ">
                Promotion Time
              </li>
              <div className="flex items-center ">
                <input
                  id="checkbox3"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 accent-[#3f51b5]  bg-white-500"
                  checked={promotionTime === "Peak Hour"}
                  onChange={() => setpromotionTime("Peak Hour")}
                />
                <label htmlFor="checkbox3" className="ml-6 block text-gray-500">
                  Peak Hour
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="checkbox4"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={promotionTime === "Normal Hour"}
                  onChange={() => setpromotionTime("Normal Hour")}
                />
                <label htmlFor="checkbox4" className="ml-6 block text-gray-500">
                  Normal Hour
                </label>
              </div>
            </>
          )}

          <li className="text-[#2E4541] font-bold text-l py-4">Price</li>
          <PriceFilter
            onResetPriceFilter={resetPriceFilter}
            onPriceValueChange={handlePriceValueChange}
            setResetPriceFilter={setResetPriceFilter}
          />

          {isBillboard === true && (
            <>
              <li className="text-[#2E4541] font-bold text-lg py-6">
                Size (max)
              </li>
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
            </>
          )}

          {!isBillboard && (
            <div className="dropdown py-8">
              <div
                className="dropdown-btn text-l"
                onClick={() => setIsActive(!isActive)}
              >
                {channelType ? channelType : "Channel Type"}

                <span className="pl-8 pr-2">
                  <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                </span>
              </div>

              {isActive && (
                <div className="dropdown-content">
                  {options.map((option) => (
                    <div
                      onClick={() => {
                        setchannelType(option);
                        setIsActive(false);
                      }}
                      className="dropdown-item"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="float-right mt-11">
            <button
              className=" md:flex  rounded-lg bg-[#2785AE] py-1 px-4"
              onClick={filterClick}
            >
              Filter
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
