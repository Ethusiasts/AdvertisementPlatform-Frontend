import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../services/users";
import ButtonWithModal from "./buttonWithModal";
import { changeUSerState } from "../../services/adminStat";
import { useState } from "react";
export default function Table() {
  const [totalPages, setTotalPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: users, isLoading } = useQuery(
    ["admin_proposals", currentPage],
    () => {
      return getAllUsers({ currentPage })
        .then((res) => {
          setTotalPages(Math.ceil(res.count / 6));
          return res;
        })
        .catch((error) => {
          return error;
        });
    },
    [currentPage]
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const mutation = useMutation({
    mutationFn: ([user_id, isBlocked]) => {
      return changeUSerState(user_id, isBlocked);
    },
    onSuccess: () => {},
  });

  const handleDeactivate = (event) => {
    mutation.mutate([
      event.currentTarget.dataset.id,
      {
        is_blocked: true,
      },
    ]);
  };

  const handleActivate = (event) => {
    mutation.mutate([
      event.currentTarget.dataset.id,
      {
        is_blocked: false,
      },
    ]);
  };

  return (
    <div class="mt-4 mx-4">
      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-100">
                <th class="px-4 py-3">User</th>
                <th class="px-4 py-3">Email</th>
                <th class="px-4 py-3">Role</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Joined Date</th>
                <th class="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-300 dark:bg-gray-100">
              {users?.results?.map((user) => (
                <tr class="bg-gray-50 dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-400 text-gray-700 dark:text-black">
                  <td class="px-4 py-3">
                    <div class="flex items-center text-sm">
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src={user.profile_picture}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p class="font-semibold">
                          {user.first_name} {user.last_name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-sm">{user?.user?.email}</td>
                  <td class="px-4 py-3 text-sm">{user?.user?.role}</td>
                  <td class="px-4 py-3 text-xs">
                    {user?.user?.is_blocked ? (
                      <p className="inline-flex rounded-full bg-red-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-red-500">
                        Blocked
                      </p>
                    ) : (
                      <p className="inline-flex rounded-full bg-green-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-green-500">
                        Active
                      </p>
                    )}
                  </td>
                  <td class="px-4 py-3 text-sm">
                    {new Date(user?.created_at).toLocaleDateString()}
                  </td>
                  <td class="px-4 py-3 text-sm flex justify-center gap-4">
                    <ButtonWithModal
                      modalContent={
                        <div class="w-96 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                          <div class="relative z-20 h-35 md:h-48">
                            <div class="h-48 bg-gradient-to-br from-teal-500 to-gray-400"></div>
                            <div class="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4"></div>
                          </div>
                          <div class="px-4 pb-6 text-center lg:pb-8 xl:pb-11">
                            <div className="relative z-30 mx-auto -mt-20 h-30 w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:w-44 sm:p-2">
                              <div className="relative drop-shadow-2">
                                <img
                                  src={user.profile_picture}
                                  alt="profile"
                                  class="h-28 w-28 sm:h-40 sm:w-40 rounded-full"
                                />
                              </div>
                            </div>
                            <div class="mt-4">
                              <h3 class="mb-1 text-2xl font-medium text-gray-900 ">
                                {user.first_name} {user.last_name}
                              </h3>
                              <p class="text-gray-400">{user.username}</p>
                              <h3 class="mb-1 text-xl font-medium text-gray-800 ">
                                {user?.user?.email}
                              </h3>
                              <p class="font-medium text-gray-400">
                                {user?.user?.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      }
                    />

                    {user?.user?.is_blocked ? (
                      <button
                        class="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                        data-id={user?.user?.id}
                        onClick={handleActivate}
                      >
                        {" "}
                        Activate{" "}
                      </button>
                    ) : (
                      <button
                        class="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-red-700 dark:text-green-100"
                        data-id={user?.user?.id}
                        onClick={handleDeactivate}
                      >
                        {" "}
                        Deactivate{" "}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-300 bg-gray-50 sm:grid-cols-9 dark:text-black dark:bg-gray-100">
          <span class="flex items-center col-span-3">
            {" "}
            Showing {(currentPage - 1) * 6 + 1} - {currentPage * 6} of{" "}
            {users?.count}{" "}
          </span>
          <span class="col-span-2"></span>
          <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul class="inline-flex items-center">
                {currentPage > 1 && (
                  <li>
                    <button
                      class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                      aria-label="Previous"
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                )}
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      class={`px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple  ${
                        i + 1 === currentPage ? "bg-gray-300" : "bg-white"
                      }`}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                {currentPage < totalPages && (
                  <li>
                    <button
                      class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                      aria-label="Next"
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      <svg
                        class="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  );
}
