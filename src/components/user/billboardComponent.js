export default function BillBoardComponent() {
  return (
    <div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="text-green-600 mr-2">
            <span class="inline-flex justify-center items-center ml-4">
              <svg
                class="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                ></path>
              </svg>
            </span>
          </div>
          <div class="flex flex-col">
            <div class="text-sm font-semibold">BillBoard</div>
            <div class="text-sm text-gray-400 font-semibold">Biruk</div>
          </div>
        </div>
        <div class="text-gray-400 ml-2">
          <span class="flex justify-end items-center ml-4">
            <svg
              class="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
