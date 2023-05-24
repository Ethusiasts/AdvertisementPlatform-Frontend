export default function Card({ photo, title, description, route}) {
    return (

<div class="bg-gray-700 rounded-lg overflow-hidden shadow-lg h-72">
  <img class="w-full h-2/3 object-cover" src={photo} alt="Your Image"/>
  <div class="p-2 flex h-22 justify-evenly">
    <div class="flex flex-col">
      <div class="text-xl text-gray-300 font-semibold mb-2">{title}</div>
      <div class="text-xs text-gray-400">{description}</div>
    </div>
    <div class="flex items-center">
      <a href={route} class="bg-blue-500 hover:bg-blue-600 text-white text-10 font-semi-bold py-1 px-4 rounded-full">
        Create
      </a>
    </div>
  </div>
</div>
        )}