export default function Description({ description }) {
  return (
    <div class="grid md:grid-cols-5 mx-16 mt-16">
      <div class="col-span-3 border-b pb-10">
        <p class="max-w-xl text-xl text-gray-500 ">{description}</p>
      </div>
    </div>
  );
}
