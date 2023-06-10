export default function MediaInfo({
  billboardId,
  width,
  height,
  status,
  price,
  size,
  latitude,
  longitude,
}) {
  return (
    <div class="grid md:grid-cols-5 gap-4 mx-16 rounded ">
      <div class="col-span-3 bg-white p-2 border-b">
        <div class="pt-5 mb-5">
          <h2 class="text-3xl font-medium">Media Info</h2>
        </div>
        <div class="bg-red-100 border border-red-800 grid md:grid-cols-2 gap-6 py-6 px-3 mb-6">
          <div class="flex justify-between border-b pb-2">
            <h1 class="font-bold ">Billboard-ID:</h1>
            <p class="sm:tracking-tight ">{billboardId}</p>
          </div>
          <div class="flex justify-between border-b pb-2">
            <h1 class="font-bold">Board Size:</h1>
            <p class="sm:tracking-tight ">{size}</p>
          </div>
          <div class="flex justify-between border-b">
            <h1 class="font-bold">Price:</h1>
            <p class="sm:tracking-tight ">{price} Birr Per Month</p>
          </div>
          <div class="flex justify-between border-b">
            <h1 class="font-bold">Width:</h1>
            <p class="sm:tracking-tight ">{width}</p>
          </div>
          <div class="flex justify-between border-b">
            <h1 class="font-bold">Board Status:</h1>
            <p class="sm:tracking-tight ">
              {status === "Free" ? "Buy Available" : "Occupied"}
            </p>
          </div>
          <div class="flex justify-between border-b pb-2">
            <h1 class="font-bold">Height:</h1>
            <p class="sm:tracking-tight ">{height}</p>
          </div>
        </div>
      </div>

      <div class="col-span-2 p-5 mt-5">
        <h2 class="text-2xl font-bold pb-3">Address</h2>
        {/* <p class="text-gray-500 pb-4">{location}</p> */}
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${
            longitude - 0.1
          },${latitude - 0.1},${longitude + 0.1},${
            latitude + 0.1
          }&amp;layer=mapnik`}
        ></iframe>
      </div>
    </div>
  );
}
