import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { getCookie, removeCookie } from "../../utils";
import { Link, useNavigate } from "react-router-dom";

const UserProfileDropDown = ({ style }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetProfile = async () => {
    const user_profile = JSON.parse(getCookie("user_profile")) ?? "";

    if (!user_profile) {
      const cookieValue = await getCookie("user_profile");
      const parsedValue = JSON.parse(cookieValue) ?? {};

      setUsername(parsedValue.username ?? "");
      setProfilePic(parsedValue.profile_picture ?? "");
    } else {
      setUsername(user_profile.username ?? "");
      setProfilePic(user_profile.profile_picture ?? "");
    }
  };

  const handleLogout = () => {
    // Remove the token from the cookie
    removeCookie("user");
    removeCookie("user_profile");
    // Redirect to the home page
    return navigate("/signin");
  };

  useEffect(() => {
    handleSetProfile();
  }, []);

  return (
    <div className={`relative ${style ?? ""} hidden lg:block`}>
      <div className="flex flex-row gap-4 items-center">
        <div>{userName}</div>

        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile Pic"
            className="w-6 h-6 rounded-full cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <FaUserCircle
            onClick={toggleMenu}
            size={30}
            className="cursor-pointer"
          />
        )}
      </div>
      {/* Menu options */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg">
          <ul className="">
            <li>
              <Link
                to={"/userprofile"}
                className="block px-4 py-2 text-gray-800 bg-white font-black hover:bg-gray-200 rounded-tl rounded-tr"
              >
                User Profile
              </Link>
            </li>

            <li>
              <a
                onClick={handleLogout}
                className="block px-4 py-2 text-white bg-red-700 font-black hover:bg-red-800 rounded-bl rounded-br cursor-pointer"
              >
                Log out{" "}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropDown;
