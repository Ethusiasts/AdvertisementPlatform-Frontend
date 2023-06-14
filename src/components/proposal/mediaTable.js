import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getMediaAgencyProposals } from "../../services/proposal";
import ButtonWithModal from "./buttonWithModal";
import MediaProposalPopup from "./mediaProposalDetail";
export default function MediaTable() {
  const { data: proposals, isLoading } = useQuery(["proposals"], () => {
    return getMediaAgencyProposals()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  });
  console.log(proposals?.results);
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
                <th class="px-4 py-3">Proposal Name</th>
                <th class="px-4 py-3">Proposal Description</th>
                <th class="px-4 py-3">Total Price</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Created Date</th>
                <th class="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-300 dark:bg-gray-100">
              {proposals?.results?.map((proposal) => (
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
                        <p class="font-semibold">{proposal.name}</p>
                        <p class="text-xs text-gray-600 dark:text-black">
                          10x Developer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-sm">{proposal.description}</td>
                  <td class="px-4 py-3 text-sm">$ {proposal.total_price}</td>
                  <td class="px-4 py-3 text-xs">
                    {proposal.approved ? (
                      <p className="inline-flex rounded-full bg-green-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-green-500">
                        Approved
                      </p>
                    ) : (
                      <p className="inline-flex rounded-full bg-red-500 bg-opacity-10 py-1 px-3 text-sm font-medium text-red-500">
                        Rejected
                      </p>
                    )}
                  </td>
                  <td class="px-4 py-3 text-sm">
                    {new Date(proposal?.created_at).toLocaleDateString()}
                  </td>
                  <td class="px-4 py-3 text-sm">
                    <div className="flex justify-center items-center space-x-3">
                      <ButtonWithModal
                        modalContent={
                          <MediaProposalPopup
                            id={proposal.id}
                            name={proposal.name}
                            description={proposal.description}
                            approved={proposal.approved}
                            total_price={proposal.total_price}
                            advertisement={proposal.advertisement_id}
                            media={proposal.media_id}
                          />
                        }
                      />
                      <Link to={`/CreateContract`} className="text-blue">
                        <button className="text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                          </svg>
                        </button>
                      </Link>
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
            Showing 21-30 of 100{" "}
          </span>
          <span class="col-span-2"></span>
          <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul class="inline-flex items-center">
                <li>
                  <button
                    class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
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
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <button class="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">
                    3
                  </button>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    4
                  </button>
                </li>
                <li>
                  <span class="px-3 py-1">...</span>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    8
                  </button>
                </li>
                <li>
                  <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    9
                  </button>
                </li>
                <li>
                  <button
                    class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
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
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  );
}
