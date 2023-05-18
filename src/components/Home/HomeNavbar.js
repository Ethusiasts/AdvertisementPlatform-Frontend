import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function HomeNavbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:pl-10 pl-7 pr-7">
        <div className="font-bold text-2xl  cursor-pointer flex items-center text-gray-800">
          Advert
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-6 top-6"
        >
          <FontAwesomeIcon
            icon={open ? faTimes : faBars}
            className="text-[#2785AE] text-2xl"
          />
        </button>
        <ul
          className={`${open ? "top-100" : "hidden"} md:flex md:items-center`}
        >
          <li className="md:ml-8 text-xl md:py-0 py-5">
            <a href="/">
              <span className="md:mr-3 text-[#D0CFCE]">|</span>Login
            </a>
          </li>
          <Button text="Register - It's free" searchBtn="false" />
        </ul>
      </div>
    </div>
  );
}
