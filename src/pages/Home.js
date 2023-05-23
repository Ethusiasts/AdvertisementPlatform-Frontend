import "../styles/home.css";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../styles/assets/billboard1.jpg";
import Image2 from "../styles/assets/billboard2.jpg";
import Image3 from "../styles/assets/billboard3.jpg";
import Pagination from "../components/Home/Pagination";
import Footer from "../components/Home/Footer";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import RecommendedCard from "../components/Home/RecommendedCard";
import HomeNavbar from "../components/Home/HomeNavbar";
import BillboardFilterBar from "../components/Home/BillboardFilterBar";
import SearchBox from "../components/Home/SearchBox";
import PopUp from "../components/Home/PopUp";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mouseOverDropdown, setMouseOverDropdown] = useState(false);
  const timeoutRef = useRef(null);
  const childRef = useRef(null);

  const handleChildSort = (property) => {
    childRef.current.handleSort(property);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
    setMouseOverDropdown(true);
  };

  useEffect(() => {
    let timerId;

    if (!mouseOverDropdown) {
      timerId = setTimeout(() => {
        setShowDropdown(false);
      }, 300);
    }

    return () => clearTimeout(timerId);
  }, [mouseOverDropdown]);

  const handleMouseLeave = () => {
    setMouseOverDropdown(false);
  };

  const handleDropdownItemClick = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(false);
  };

  return (
    <div>
      <HomeNavbar />

      <div className="header2 py-11 pl-11">
        <a className="text-[#2785AE]" href="/">
          {" "}
          Billboards
        </a>{" "}
        <span className="md:mr-3 text-[#D0CFCE]">|</span>{" "}
        <a className="" href="/">
          {" "}
          Media Agencies
        </a>
      </div>

      <div className="grid grid-cols-10">
        <div className="col-span-12 col-start-4 -mx-8">
          <div className="font-bold text-3xl ">Connect MarketPlace</div>
          <div className="text-[#7D7D7D]  text-md mb-6">
            Find the best Places In One Place
          </div>

          <SearchBox />
        </div>
      </div>

      <div className="py-4 px-4 overflow-hidden md:lg-20 mr-7">
        <div className="hidden md:block">
          <BillboardFilterBar />
        </div>
        <div className="flex justify-between mb-11">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <span className="pr-1">Filters</span>
            <FontAwesomeIcon
              icon={isOpen ? faCaretUp : faCaretDown}
              className=" text-[#2785AE] text-xl"
            />
          </button>
          <PopUp isOpen={isOpen} onClose={handleClose} />
          <div className="pl-4 font-bold text-lg">3 Results</div>

          <div className="flex relative">
            <button
              className="hidden mt-2 md:flex border-transparent text-black-700"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Sort by
              <span className="pl-2">
                <FontAwesomeIcon icon={faSort} className="text-[#2785AE]" />
              </span>
            </button>
            {showDropdown && (
              <div
                className="sortBy absolute z-10  w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="py-1"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    className={classNames(
                      "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      { "bg-gray-100": sortBy === "name" }
                    )}
                    onClick={() => handleChildSort("place")}
                  >
                    Name
                  </button>
                  <button
                    className={classNames(
                      "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      { "bg-gray-100": sortBy === "location" }
                    )}
                    role="menuitem"
                    onClick={() => handleChildSort("location")}
                  >
                    Location
                  </button>
                  <button
                    className={classNames(
                      "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      { "bg-gray-100": sortBy === "name" }
                    )}
                    role="menuitem"
                    onClick={() => handleChildSort("size")}
                  >
                    Size
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div className="flex">
              <div className="pr-6">
                <FontAwesomeIcon icon={faThList} className="text-[#2785AE]" />
              </div>
              <div>
                <FontAwesomeIcon icon={faList} className="text-[#2785AE]" />
              </div>
            </div>
          </div>
        </div>
        <Pagination ref={childRef} />
      </div>

      <div className="text-3xl font-bold mt-8 mb-4 ml-20">Recommended</div>

      <div className="flex flex-wrap ml-20">
        <RecommendedCard
          location="Jemo, Addis Ababa "
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi"
          imageSrc={Image1}
          alt="Card Image"
        />
        <RecommendedCard
          location="Jemo, Addis Ababa "
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi"
          imageSrc={Image2}
          alt="Card Image"
        />
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
