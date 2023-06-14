import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { searchBillboardsWithQueryOnly } from "../../services/billboard_api";

export default function MediaRelated({ name }) {
  const currentPage = 1;
  const query = name;
  const { data: mediaRelated, isLoading } = useQuery(
    ["mediaRelated"],
    () => {
      return searchBillboardsWithQueryOnly({
        query,
        currentPage,
      })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
    { name }
  );

  if (isLoading) {
    return (
      <div class="flex justify-center items-center mt-4">
        <CircularProgress />;
      </div>
    );
  }
  if (mediaRelated.length != 0) {
    return (
      <div class="mb-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none lg:py-5">
            <h2 class="text-2xl font-bold text-gray-900">Related Channels</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {mediaRelated?.map((media) => (
                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={media?.image}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <p class="text-base font-semibold text-gray-900">
                    {media?.channel_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
