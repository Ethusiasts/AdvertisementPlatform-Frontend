import { getReviews } from "../../services/billboard_api";
import { useQuery } from "@tanstack/react-query";
import Rating from "@material-ui/lab/Rating";

export default function Messages({ mediaId, type }) {
  const { data: reviews, isLoading } = useQuery(
    ["reviews"],
    () => {
      return getReviews({ mediaId, type })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          return error;
        });
    },
    { mediaId }
  );

  return (
    <div class="flex mx-16 mb-10">
      <div class="max-w-xl">
        {reviews?.results?.map((review) => (
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
                    src={review.user_id?.image}
                    alt=""
                  />
                </div>
                <div class="text-sm font-semibold">
                  {review.user_id?.first_name} {review.user_id.last_name} •{" "}
                  <span class="font-normal">
                    {new Date(review.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
