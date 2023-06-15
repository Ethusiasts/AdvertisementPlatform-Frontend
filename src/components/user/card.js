import { useQuery } from "@tanstack/react-query";
import { getUserStats } from "../../services/userStat";

export default function Card() {
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
    <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <div class="px-4 py-5 sm:p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
            <svg
              class="h-6 w-6 text-gray-600 dark:text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.7 6.3a1 1 0 011.4 0l2 2a1 1 0 01-1.4 1.4l-1.3-1.3-1.3 1.3a1 1 0 01-1.4-1.4l2-2zM9 11a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-5">
            <h4 class="text-base font-semibold text-gray-700 dark:text-gray-400 tracking-wide">
              Total Sales
            </h4>
            <div class="mt-2 text-3xl font-bold text-gray-800">200</div>
          </div>
        </div>
        <div class="mt-5">
          <div class="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide">
            Statistics
          </div>
          <div class="mt-2 grid grid-cols-2 gap-5">
            <div>
              <div class="text-xs font-semibold text-gray-700 dark:text-gray-400">
                Advertisements
              </div>
              <div class="mt-1 text-3xl font-bold text-gray-700 dark:text-gray-400">
                {stat?.total_advertisements}
              </div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-700 dark:text-gray-400">
                Contracts
              </div>
              <div class="mt-1 text-3xl font-bold text-gray-700 dark:text-gray-400">
                {stat?.total_contracts}
              </div>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-700 dark:text-gray-400">
                Proposals
              </div>
              <div class="mt-1 text-3xl font-bold text-gray-700 dark:text-gray-400">
                {stat?.total_proposals}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
