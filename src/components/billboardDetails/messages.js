import Rating from "@material-ui/lab/Rating";

export default function Messages({ reviews }) {
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6V1NHpqrmEQH_NYts3Lp1X6g4MWRRLH_1gg&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="text-sm font-semibold">
                  {review.user_id?.email} •{" "}
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
