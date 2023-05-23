import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import React, { useState } from "react";
import PopUp from "./PopUp";
export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="max-w-md flex text-center items-center bg-white rounded-full shadow-sm py-2 my-4">
        <FontAwesomeIcon icon={faSearch} className="text-[#2785AE] text-2xl" />
        <input
          className="bg-transparent ml-4 mr-11 outline-none placeholder-[#2785AE]"
          type="text"
          placeholder="Search Here"
        />
        <Button text="Find" searchBtn="true" />
      </div>
      <div className="flex justify-center">
        <button className=" md:hidden rounded-lg bg-[#2785AE] text-white py-2 px-6 md:ml-8 hover:bg-indigo-400 duration-500">
          Find
        </button>
        <PopUp isOpen={isOpen} onClose={handleClose} />
      </div>
    </div>
  );
}
