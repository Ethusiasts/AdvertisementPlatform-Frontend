export default function Info({ media }) {
  return (
    <div class="grid md:grid-cols-5 gap-4 mx-16 rounded ">
      <div class="col-span-3 bg-white p-2 border-b">
        <div class="pt-5 mb-5">
          <h2 class="text-3xl font-medium">Media Info</h2>
        </div>
        <div class="bg-red-100 border border-red-800 grid md:grid-cols-2 gap-6 py-6 px-3 mb-6">
          <div class="flex justify-between border-b pb-2">
            <h1 class="font-bold ">Media-ID:</h1>
            <p class="sm:tracking-tight ">{media?.id}</p>
          </div>
          <div class="flex justify-between border-b pb-2">
            <h1 class="font-bold">Channel Name:</h1>
            <p class="sm:tracking-tight ">{media?.channel_name}</p>
          </div>
          <div class="flex justify-between border-b">
            <h1 class="font-bold">Normal Price:</h1>
            <p class="sm:tracking-tight ">{media?.normal} Birr Per Second</p>
          </div>
          <div class="flex justify-between border-b">
            <h1 class="font-bold">Peak Hour Price:</h1>
            <p class="sm:tracking-tight ">{media?.peak_hour}</p>
          </div>
          <div class="flex justify-between border-b">
            <h1 class="font-bold">With Production Price:</h1>
            <p class="sm:tracking-tight text-green-500 ">
              +${media?.production}
            </p>
          </div>
          <div class="flex justify-between border-b pb-2">
            <h1 class="font-bold">Posted Date: </h1>
            <p class="sm:tracking-tight ">
              {new Date(media?.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div class="col-span-2 p-5 mt-5">
        <h2 class="text-2xl font-bold pb-3">Address</h2>
        {/* <p class="text-gray-500 pb-4">{location}</p> */}
        <iframe
          width="100%"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=38.7005,9.0108,38.9643,9.0289&amp;layer=mapnik`}
        ></iframe>
      </div>
    </div>
  );
}
