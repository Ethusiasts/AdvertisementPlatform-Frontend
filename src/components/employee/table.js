import { useMutation, useQuery } from "@tanstack/react-query";
import {
  changeBillboardState,
  getEmployeeBillboards,
} from "../../services/employee";
import { Link } from "react-router-dom";
import ButtonWithModal from "./buttonWithModal";
import AdPopup from "./advertisementDetail";
import { useState } from "react";
export default function Table() {
  const [totalPages, setTotalPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: users, isLoading } = useQuery(
    ["user.billboard_ids", currentPage],
    () => {
      return getEmployeeBillboards({ currentPage })
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
  console.log(users);
  const mutation = useMutation({
    mutationFn: ([billboard_id, approved]) => {
      return changeBillboardState(billboard_id, approved);
    },
    onSuccess: () => {
      alert("successfully posted");
    },
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleReject = (event) => {
    mutation.mutate([
      event.currentTarget.dataset.id,
      {
        approved: 0,
      },
    ]);
  };

  const handleApprove = (event) => {
    mutation.mutate([
      event.currentTarget.dataset.id,
      {
        approved: 2,
      },
    ]);
  };

  return (
    <div class="mt-4 mx-4">
      <div class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-300 bg-gray-50 dark:text-gray-500 dark:bg-gray-100">
                <th class="px-4 py-3">Location</th>
                <th class="px-4 py-3">Daily Fee per square feet</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Approved</th>
                <th class="px-4 py-3">Paid</th>
                <th class="px-4 py-3">Created Date</th>
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
                          src={user.billboard_id.image}
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
                          {user.billboard_id.location}
                        </p>
                        <p class="text-xs font-bold text-gray-600 dark:text-black">
                          {user.billboard_id.height} X {user.billboard_id.width}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-sm">
                    ${user.billboard_id.daily_rate_per_sq}
                  </td>
                  <td class="px-4 py-3 text-xs">
                    {user.billboard_id.status === "Free" ? (
                      <p className="inline-flex rounded-full bg-green-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-green-500">
                        Free
                      </p>
                    ) : (
                      <p className="inline-flex rounded-full bg-red-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-red-500">
                        Occupied
                      </p>
                    )}
                  </td>
                  <td class="px-4 py-3 text-xs">
                    {user.billboard_id.approved === 2 ? (
                      <p className="inline-flex rounded-full bg-green-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-green-500">
                        Approved
                      </p>
                    ) : user.billboard_id.approved === 1 ? (
                      <p className="inline-flex rounded-full bg-yellow-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-yellow-500">
                        Pending
                      </p>
                    ) : (
                      <p className="inline-flex rounded-full bg-red-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-red-500">
                        Rejected
                      </p>
                    )}
                  </td>
                  <td class="px-4 py-3 text-xs">
                    {user.billboard_id.paid ? (
                      <p className="inline-flex rounded-full bg-green-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-green-500">
                        Paid
                      </p>
                    ) : (
                      <p className="inline-flex rounded-full bg-yellow-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-yellow-500">
                        Pending
                      </p>
                    )}
                  </td>

                  <td class="px-4 py-3 text-sm">
                    {new Date(user.billboard_id.created_at).toLocaleDateString(
                      "en-US"
                    )}
                  </td>
                  <td class="px-4 py-3 text-sm">
                    <div className="flex justify-center items-center space-x-3">
                      <ButtonWithModal
                        modalContent={<AdPopup billboard={user.billboard_id} />}
                      />
                      <Link
                        to={`/user/${user.id}/billboards/${user.billboard_id.id}`}
                        className="text-blue"
                      >
                        <button class="px-2 py-1 text-xs font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">
                          {" "}
                          View Billboard{" "}
                        </button>
                      </Link>
                      <button
                        class="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                        data-id={user.billboard_id.id}
                        onClick={handleApprove}
                      >
                        {" "}
                        Approve{" "}
                      </button>

                      <button
                        class="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-red-700 dark:text-green-100"
                        data-id={user.billboard_id.id}
                        onClick={handleReject}
                      >
                        {" "}
                        Reject{" "}
                      </button>
                      {/* <ButtonWithModal
                              modalContent={<PaymentForm user.billboard_id={user.billboard_id} />}
                            /> */}
                    </div>
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
