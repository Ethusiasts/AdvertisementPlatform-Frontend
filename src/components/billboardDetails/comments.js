import { addReview } from "../../services/billboard_api";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Rating from "@material-ui/lab/Rating";
import getUser from "../../utils/utils";
import { CircularProgress } from "@mui/material";

export default function Comments({ mediaId, type, onReview }) {
  const user = getUser();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(2.5);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  const mutation = useMutation({
    mutationFn: (review) => {
      return addReview(review);
    },
    onSuccess: (data) => {
      // Reset the comment state
      if (data.success) {
        setComment("");
        toast.success("Successfully Posted");
        onReview();
      } else {
        toast.error("Could Not Post Your Review", { autoClose: 6000 });
      }
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      toast.error("Please Login to Post a Review", { autoClose: 5000 });
      return;
    }

    // Post the comment
    const review = {
      rating: rating,
      entity_type: type,
      comment: comment,
      billboard_id: type === "Billboard" ? mediaId : "",
      agency_id: type === "Agency" ? mediaId : "",
      user_id: user?.id,
    };
    // Perform the necessary actions with the comment value
    mutation.mutate(review);
  };

  return (
    <div class="grid md:grid-cols-5 mx-16">
      <div class="col-span-2">
        <h1 class="text-3xl font-medium">Comments</h1>
        <p class="text-gray-500 py-2"> Review This Product</p>
        <form onSubmit={handleSubmit}>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            value={rating}
            onChange={handleRatingChange}
          />
          <div class="mt-2">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Write a your review.
            </p>
          </div>
          <div class="mt-6 flex items-center justify-end">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? <CircularProgress /> : "Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
