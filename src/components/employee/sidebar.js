import { removeCookie } from "../../utils";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from the cookie
    removeCookie("user");
    removeCookie("user_profile");
    // Redirect to the home page
    return navigate("/signin");
  };
  return (
    <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
      <ul class="flex flex-col">
        <li class="py-6 pt-5">
          <a
            href="#"
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-400 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
          >
            <span class="inline-flex justify-center items-center ml-4">
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M20.4 14.5L16 10 4 20" />
              </svg>{" "}
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">
              {" "}
              <div className="font-bold text-2xl  cursor-pointer flex items-center">
                Advert
              </div>
            </span>
          </a>
        </li>
        <li class="px-5 hidden md:block">
          <div class="flex flex-row items-center h-8">
            <div class="text-sm font-light tracking-wide text-gray-400 uppercase">
              Main Menu
            </div>
          </div>
        </li>
        <li>
          <a
            href="/EmployeeDashboard"
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-400 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
          >
            <span class="inline-flex justify-center items-center ml-4">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
          </a>
        </li>
        <li>
          <button
            onClick={handleLogout}
            class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-400 text-black hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
          >
            <span class="inline-flex justify-center items-center ml-4">
              <svg
                class="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
              </svg>{" "}
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Sign Out</span>
          </button>
        </li>
      </ul>
      <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">
        Copyright @2023
      </p>
    </div>
  );
}
