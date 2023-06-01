import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import PopUp from "./PopUp";
export default function SearchBox({ handleSearchChange, query }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="max-w-md flex text-center items-center bg-white rounded-full shadow-sm py-2 my-4">
        <FontAwesomeIcon icon={faSearch} className="text-[#2785AE] text-2xl" />
        <input
          className="bg-transparent ml-4 mr-11 outline-none border-none placeholder-[#2785AE]"
          type="text"
          value={query}
          placeholder="Search Here"
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex justify-center">
        <PopUp isOpen={isOpen} onClose={handleClose} />
      </div>
    </div>
  );
}
