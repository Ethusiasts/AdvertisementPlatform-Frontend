import { Link } from "react-router-dom";
import getUser from "../../utils/utils";
import { getCookie } from "../../utils";

export default function InfoCard() {
  const user = getUser();
  const userProfile = JSON.parse(getCookie("user_profile"));
  return (
    <div className="w-96 bg-gray-100 rounded-lg overflow-hidden shadow-md mb-8">
      <div class="ml-2 mt-5 mb-5 grid grid-cols-5">
        <div class="mb-3 flex justify-center items-center col-span-1">
          <img
            className="h-12 w-12 rounded-full object-cover mx-2"
            src={userProfile.profile_picture}
            alt=""
            loading="lazy"
          />
        </div>
        <div class="mb-3 flex items-center col-span-4">
          <h1 className="text-xl font-semibold text-gray-800">
            {userProfile.first_name} {userProfile.last_name}
          </h1>
        </div>
        <div class="mb-3 flex justify-center items-center col-span-1">
          <svg
            className="w-6 h-6 mr-2 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <div class="mb-3 flex items-center col-span-4">
          <div className="text-base text-gray-500 font-semibold tracking-wide">
            {user.email}
          </div>
        </div>
        <div class="mb-3 flex justify-center items-center col-span-1">
          <svg
            className="w-6 h-6 mr-2 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
        </div>
        <div class="mb-3 flex items-center col-span-4">
          <div className="text-base text-gray-500 font-semibold tracking-wide">
            {userProfile.phone_number}
          </div>
        </div>

        <div class="flex items-center col-start-2 col-span-3">
          <a
            href="/UserEditProfile"
            class="text-center border border-green-600 text-green-600 rounded-md w-full py-1.5 px-3 text-base hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition duration-500 ease select-none"
          >
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
}
