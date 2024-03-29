import { useQuery } from "@tanstack/react-query";
import { getBillboardContracts } from "../../services/contract";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function BillboardTable() {
  const [totalPages, setTotalPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: contracts, isLoading } = useQuery(
    ["billboard_Contracts", currentPage],
    () => {
      return getBillboardContracts({ currentPage })
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

  if (isLoading) {
    return (
      <div class="flex justify-center items-center h-screen">
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div class="mt-4 mx-4">
      <div class="w-full overflow-hidden rounded-lg shadow-sm">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-300 bg-gray-50 dark:text-gray-500 dark:bg-gray-100">
                <th class="px-4 py-3">Contract</th>
                <th class="px-4 py-3">Total Price</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Created Date</th>
                <th class="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-300 dark:bg-gray-100">
              {contracts?.results?.map((contract) => (
                <tr class="bg-gray-50 dark:bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-400 text-gray-700 dark:text-black">
                  <td class="px-4 py-3">
                    <div class="flex items-center text-sm">
                      <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          class="object-cover w-full h-full rounded-full"
                          src="https://firebasestorage.googleapis.com/v0/b/billboard-images.appspot.com/o/Advertisement%2Fimages%2Fanalysis-2030261_1920.jpg?alt=media&token=138e2961-6d4b-4419-848e-33bd32aa4007&_gl=1*bcw3mw*_ga*MTg0MjY2MzM4Mi4xNjg1NDUxMDYx*_ga_CW55HF8NVT*MTY4NTc0MTk3My44LjAuMTY4NTc0MTk3My4wLjAuMA.."
                          alt=""
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p class="font-semibold">"Contract</p>
                        <p class="text-xs text-gray-600 dark:text-black">
                          10x Developer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-sm">
                    $ {contract.gross_total_fee}
                  </td>
                  <td class="px-4 py-3 text-xs">
                    {contract.customer_signature &&
                    contract.agency_signature ? (
                      <p className="inline-flex rounded-full bg-green-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-green-500">
                        Approved
                      </p>
                    ) : (
                      <p className="inline-flex rounded-full bg-yellow-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-yellow-500">
                        Pending
                      </p>
                    )}
                  </td>

                  <td class="px-4 py-3 text-sm">
                    {new Date(contract?.created_at).toLocaleDateString()}
                  </td>
                  <td class="px-4 py-3 text-sm">
                    <div className="flex justify-center items-center space-x-3">
                      {
                        <Link
                          to={`/BillboardContractDetail/${contract.id}`}
                          className="text-blue"
                        >
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            // onClick={}
                          >
                            View Contract
                          </button>
                        </Link>
                      }
                      {/* <Link
                        to={`/contractDetail/${contract.id}`}
                        className="text-blue"
                      >
                        <button
                          className="text-blue-500"
                          // onClick={}
                        >
                          <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </Link> */}
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
            {contracts.count}{" "}
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
