import { useQuery } from "@tanstack/react-query";
import { getMediaAgencyStats } from "../../services/mediaAgencyStat";
export default function Card() {
  const { data: stat, isLoading } = useQuery(["proposals"], () => {
    return getMediaAgencyStats()
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        return error;
      });
  });
  console.log(stat);
  return (
    <div class="bg-gray-100  rounded-lg shadow-md overflow-hidden">
      <div class="px-4 py-5 sm:p-6">
        <div class="flex items-center">
          <div class="">
            <h4 class="text-xl font-bold tracking-wide">Performance</h4>
          </div>
        </div>
        <div class="my-5">
          <div class="flex justify-center items-center gap-3">
            <div class="flex flex-col justify-center items-center gap-2">
              <div class="text-3xl font-bold">{stat?.total_billboards}</div>
              <div class="text-xs text-gray-400">billboards</div>
            </div>
            <div class="border border-gray-700 h-6"></div>
            <div class="flex flex-col justify-center items-center gap-2">
              <div class="text-3xl font-bold">{stat?.total_proposals}</div>
              <div class="text-xs text-gray-400">proposals</div>
            </div>
          </div>
          <div class="my-10">
            <div class="flex gap-4 items-center mb-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div class="text-sm font-semibold"> 45 Total Clients</div>
            </div>
            <div class="flex gap-4 items-center">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div class="text-sm font-semibold"> 45 Total Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
