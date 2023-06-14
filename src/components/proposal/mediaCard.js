import { Link } from "react-router-dom";
export default function MediaCard({ media }) {
  return (
    <Link to={`/agencies/${media.id}`}>
      <div class="flex flex-col w-full items-center bg-gray-100 border border-gray-200 rounded-lg shadow md:flex-row my-2">
        <img
          class="md:rounded-none md:rounded-l-lg h-36 md:w-36"
          src={media.image}
          alt=""
        />
        <div class="flex flex-col justify-between p-2 leading-normal">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            Media Type
          </h5>
          <p class="mb-3 font-normal text-gray-700 text-sm">
            {media.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
