export default function MediaInfo({
  billboardId,
  width,
  height,
  status,
  price,
  size,
  location,
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
        <p class="text-gray-500 pb-4">{location}</p>
        <iframe
          class="w-full h-full rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
