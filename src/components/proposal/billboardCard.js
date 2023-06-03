export default function BillboardCard() {
  return (
    <div class="flex flex-col w-full items-center bg-gray-100 border border-gray-200 rounded-lg shadow md:flex-row my-2">
      <img
        class="md:rounded-none md:rounded-l-lg h-36 md:w-36"
        src="https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80"
        alt=""
      />
      <div class="flex flex-col justify-between p-2 leading-normal">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
          Billboard Type
        </h5>
        <p class="mb-3 font-normal text-gray-700 text-sm">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}
