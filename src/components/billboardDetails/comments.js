export default function Comments() {
  return (
    <div class="grid md:grid-cols-5 m-16">
      <div class="col-span-2">
        <h1 class="text-3xl font-medium">Comments</h1>
        <p class="text-gray-500 py-2"> Review This Product</p>
        <form class="">
          <div class="mt-2">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Write a your review.
            </p>
          </div>

          <div class="mt-6 flex items-center justify-end">
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
