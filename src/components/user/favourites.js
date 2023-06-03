import BillBoardComponent from "./billboardComponent";
export default function FavouritesCard() {
  return (
    <div className="w-96 bg-gray-100 rounded-lg overflow-hidden shadow-md p-5">
      <div class="grid grid-cols-5">
        <div class="mb-3 ml-5 flex items-center col-span-5">
          <h1 className="text-4xl font-semibold text-gray-800 ">Favourites</h1>
        </div>

        <div class="mb-3 col-span-5">
          <BillBoardComponent />
        </div>

        <div class="mb-3 col-span-5">
          <BillBoardComponent />
        </div>

        <div class="mb-3 col-span-5">
          <BillBoardComponent />
        </div>

        <div class="mb-3 col-span-5">
          <BillBoardComponent />
        </div>

        <div class="mb-3 col-span-5">
          <BillBoardComponent />
        </div>

        <div class="mr-5 flex justify-end items-center col-span-5">
          <div className="text-base font-semibold tracking-wide text-gray-500">
            Show More
          </div>
        </div>
      </div>
    </div>
  );
}
