import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { searchBillboards } from "../../services/billboard_api";

export default function Nearby({ latitude, longitude }) {
  const currentPage = 1;
  const min_price = 0;
  const max_price = 2000;
  const { data: nearby, isLoading } = useQuery(
    ["nearby"],
    () => {
      return searchBillboards({
        latitude,
        longitude,
        currentPage,
        min_price,
        max_price,
      })
        .then((res) => {
          return res.results;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
    { latitude, longitude }
  );

  const { data: location } = useQuery(["location"], () => {
    return axios
      .get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  });

  if (isLoading) {
    return (
      <div class="flex justify-center items-center mt-4">
        <CircularProgress />;
      </div>
    );
  }
  return (
    <div class="">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none lg:py-5">
          <h2 class="text-2xl font-bold text-gray-900">NearBy Places</h2>

          <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {nearby?.map((billboard) => (
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={billboard?.image}
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href={`/billboards/${billboard?.id}`}>
                    <span class="absolute inset-0"></span>
                    {location?.address?.city}
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  {location?.display_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
