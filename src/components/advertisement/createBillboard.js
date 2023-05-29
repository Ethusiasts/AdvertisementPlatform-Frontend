export default function CreateBillboardAdForm({ photo, title, description}) {
    return (


<div class="bg-gray-100 rounded-lg shadow-lg p-16 w-9/10">
    <h2 class="text-xl text-gray-800 font-bold mb-4">Create A Billboard Ad!</h2>
    <p class="text-gray-600 text-base mb-4">Fill out the form below and let our experts bring your vision to life. Stand out from the crowd and drive real results for your brand. Get started now!</p>
    <div class="mb-4">
    <input class="text-xs appearance-none border rounded w-1/3 bg-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Height" />
    </div>
    <div class="mb-4">
      <input class="text-xs appearance-none border rounded w-1/3 bg-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Width" />
    </div>
    <div class="w-1/3 h-32"></div>
    <div class="flex justify-end">
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semi-bold py-1 px-4 rounded mr-2 w-60">Cancel</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60">Save Only</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60">Save and Continue</button>
    </div>
  </div>
        )}