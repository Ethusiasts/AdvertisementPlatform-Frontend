export default function Card({ photo, title, description}) {
    return (

<div class="bg-gray-700 rounded-lg overflow-hidden shadow-lg h-72">
  <img class="w-full h-2/3 object-cover" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="Your Image"/>
  <div class="p-2 flex h-22 justify-evenly">
    <div class="flex flex-col">
      <div class="text-xl text-gray-300 font-semibold mb-2">{title}</div>
      <div class="text-xs text-gray-400">{description}</div>
    </div>
    <div class="flex items-center">
      <button class="bg-blue-500 hover:bg-blue-600 text-white text-10 font-semi-bold py-1 px-4 rounded-full">
        Create
      </button>
    </div>
  </div>
</div>
        )}