import { getBillboardReviews } from "../../services/billboard_api";
import { useQuery } from "@tanstack/react-query";
import Rating from "@material-ui/lab/Rating";

export default function Messages({ billboardId }) {
  const { data: billboardReviews, isLoading } = useQuery(
    ["billboardReviews"],
    () => {
      return getBillboardReviews({ billboardId })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          return error;
        });
    },
    { billboardId }
  );
  // console.log(billboardReviews);

  return (
    <div class="flex mx-16">
      <div class="max-w-xl">
        {billboardReviews?.results?.map((review) => (
          <div class="">
            <Rating
              name="read-only"
              value={review.rating}
              size="small"
              readOnly
            />
            <p class="text-md text-gray-600">{review.comment}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4 py-2">
                <div class="">
                  <img
                    class="w-6 h-6 rounded-full"
                    src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                    alt=""
                  />
                </div>
                <div class="text-sm font-semibold">
                  John Lucas • <span class="font-normal"> 5 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
