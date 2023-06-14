import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import { useQuery } from "@tanstack/react-query";

export default function Ratings({ billboard }) {
  const { data: totalUserCount } = useQuery(["totalUserCount"], () => {
    return axios
      .get(
        `https://advertisementplatform-0xpy.onrender.com/api/v1/billboards/${billboard.id}/ratings/`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  });

  return (
    <div class="grid grid-rows-3 grid-flow-col  gap-4 mx-16 mt-16">
      <div class="row-span-3 col-span-12 bg-white p-2">
        <h1 class="text-3xl font-medium">Ratings & Reviews</h1>
        <p class="text-gray-500 py-2"> Reviews For This Billboard</p>

        {totalUserCount && totalUserCount.count ? (
          <div class="px-4">
            <div class="mb-1 tracking-wide px-4">
              <div class="grid grid-cols-4 -mx-8 pb-3">
                <div class="cols-span-1 mt-1 justify-center">
                  <h1 class="text-3xl font-bold">{billboard.average_rating}</h1>
                  <div class="flex my-2">
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                      value={billboard.average_rating}
                      readOnly
                    />
                  </div>
                  <p class="text-gray-500 text-sm font-bold mt-1">
                    {totalUserCount?.count} Users reviews
                  </p>
                </div>

                <div class="cols-span-3 mt-1">
                  <div class="flex items-center mt-1">
                    <div class="w-1/5 text-indigo-500 tracking-tighter">
                      <span>5 star</span>
                    </div>
                    <div class="w-3/5">
                      <div class="bg-gray-300 w-full rounded-lg h-2">
                        <div class=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
                      </div>
                    </div>
                    <div class="w-1/5 text-gray-700 pl-3">
                      <span class="text-sm">51%</span>
                    </div>
                  </div>
                  <div class="flex items-center mt-1">
                    <div class="w-1/5 text-indigo-500 tracking-tighter">
                      <span>4 star</span>
                    </div>
                    <div class="w-3/5">
                      <div class="bg-gray-300 w-full rounded-lg h-2">
                        <div class="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                      </div>
                    </div>
                    <div class="w-1/5 text-gray-700 pl-3">
                      <span class="text-sm">17%</span>
                    </div>
                  </div>
                  <div class="flex items-center mt-1">
                    <div class="w-1/5 text-indigo-500 tracking-tighter">
                      <span>3 star</span>
                    </div>
                    <div class="w-3/5">
                      <div class="bg-gray-300 w-full rounded-lg h-2">
                        <div class=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
                      </div>
                    </div>
                    <div class="w-1/5 text-gray-700 pl-3">
                      <span class="text-sm">19%</span>
                    </div>
                  </div>
                  <div class="flex items-center mt-1">
                    <div class=" w-1/5 text-indigo-500 tracking-tighter">
                      <span>2 star</span>
                    </div>
                    <div class="w-3/5">
                      <div class="bg-gray-300 w-full rounded-lg h-2">
                        <div class=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                      </div>
                    </div>
                    <div class="w-1/5 text-gray-700 pl-3">
                      <span class="text-sm">8%</span>
                    </div>
                  </div>
                  <div class="flex items-center mt-1">
                    <div class="w-1/5 text-indigo-500 tracking-tighter">
                      <span>1 star</span>
                    </div>
                    <div class="w-3/5">
                      <div class="bg-gray-300 w-full rounded-lg h-2">
                        <div class=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
                      </div>
                    </div>
                    <div class="w-1/5 text-gray-700 pl-3">
                      <span class="text-sm">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-1 justify-center">
            <p className="text-gray-500 text-sm font-bold mt-1">
              No Reviews Yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
