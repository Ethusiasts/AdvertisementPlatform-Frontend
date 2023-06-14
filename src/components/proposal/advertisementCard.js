import { Link } from "react-router-dom";
export default function AdvertisementCard({ advertisement }) {
  return (
    <Link to={`/advertisements/${advertisement.id}`}>
      <div class="flex flex-col w-full items-center bg-gray-100 border border-gray-200 rounded-lg shadow md:flex-row my-2">
        <img
          class="md:rounded-none md:rounded-l-lg h-36 md:w-36"
          src={advertisement.advertisement_file}
          alt=""
        />
        <div class="flex flex-col justify-between p-2 leading-normal">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            {advertisement.advertisement_name}
          </h5>
          <p class="mb-3 font-normal text-gray-700 text-sm">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </Link>
  );
}
