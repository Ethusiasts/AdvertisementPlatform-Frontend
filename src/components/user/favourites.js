import BillBoardComponent from "./billboardComponent";
export default function FavouritesCard({ status, place, city, width, height, location, imageSrc, alt }) {
    return (
      <div className="w-96 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-5">
      <div class="grid grid-cols-5">
        <div class="mb-3 ml-5 flex items-center col-span-5">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">Favourites</h1>
        </div>

        <div class="mb-3 col-span-5">
        <BillBoardComponent/>
        </div>

        <div class="mb-3 col-span-5">
        <BillBoardComponent/>
        </div>

        <div class="mb-3 col-span-5">
        <BillBoardComponent/>
        </div>

        <div class="mb-3 col-span-5">
        <BillBoardComponent/>
        </div>

        <div class="mb-3 col-span-5">
        <BillBoardComponent/>
        </div>
      
        <div class="mr-5 flex justify-end items-center col-span-5">
        <div className="text-base font-semibold tracking-wide">Show More</div>
        </div>
      
      
      </div>
      </div>
    );
  }