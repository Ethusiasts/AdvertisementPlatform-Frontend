import { Link } from "react-router-dom";
import { getCookie } from "../../utils";
import getUser from "../../utils/utils";
import { getUserStats } from "../../services/userStat";
import { useQuery } from "@tanstack/react-query";

export default function UserProfileCard() {
  const user = getUser();
  const userProfile = JSON.parse(getCookie("user_profile"));

  const { data: stat, isLoading } = useQuery(["stats"], () => {
    return getUserStats()
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        return error;
      });
  });
  return (
    <div class="w-full overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div class="relative z-20 h-35 md:h-48">
        <div class="h-48 bg-gradient-to-br from-teal-500 to-gray-400"></div>
        <div class="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
          <Link to="/UserEditProfile">
            <label
              for="cover"
              class="flex cursor-pointer items-center justify-center gap-2 rounded bg-blue-700 py-1 px-2 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
            >
              <span class="mx-5">Edit Profile</span>
            </label>
          </Link>
        </div>
      </div>
      <div class="px-4 pb-6 text-center lg:pb-8 xl:pb-11">
        <div className="relative z-30 mx-auto -mt-20 h-30 w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:w-44 sm:p-2">
          <div className="relative drop-shadow-2">
            <img
              src={userProfile.profile_picture}
              alt="profile"
              class="h-28 w-28 sm:h-40 sm:w-40 rounded-full"
            />
          </div>
        </div>
        <div class="mt-4">
          <h3 class="mb-1 text-2xl font-medium text-gray-900 ">
            {userProfile.first_name} {userProfile.last_name}
          </h3>
          <p class="text-gray-400">{userProfile.username}</p>
          <h3 class="mb-1 text-xl font-medium text-gray-800 ">{user.email}</h3>
          <p class="font-medium text-gray-400">{user.role}</p>
          <div class="text-gray-400 mx-auto mt-4 mb-5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2 shadow-5">
            <div class="flex items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
              <span class="font-semibold text-gray-900 ">
                {stat?.total_advertisements}
              </span>
              <span class="text-sm">Advertisements</span>
            </div>
            <div class="flex items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
              <span class="font-semibold text-gray-900 ">
                {stat?.total_proposals}
              </span>
              <span class="text-sm">Proposals</span>
            </div>
            <div class="flex items-center justify-center gap-1 px-4 xsm:flex-row">
              <span class="font-semibold text-gray-900 ">
                {stat?.total_contracts}
              </span>
              <span class="text-sm">Contracts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
