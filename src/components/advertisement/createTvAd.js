export default function CreateTvAdForm({ photo, title, description}) {
    return (


  <div class="bg-gray-500 rounded-lg shadow-lg p-12 w-9/10">
    <h2 class="text-xl text-gray-800 font-bold mb-4">Ready to Showcase Your Brand on the Big Screen? Create a Captivating TV Ad Today!</h2>
    <p class="text-gray-600 text-base mb-4">Fill out the form below and let our expert team help you bring your vision to life. Tell your story in a way that captivates your audience and generates real results for your business. Start now</p>
    <div class="mb-4">
    <input class="text-xs appearance-none border rounded w-1/3 bg-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Height" />
    </div>
    <div class="mb-4">
      <input class="text-xs appearance-none border rounded w-1/3 bg-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Width" />
    </div>
    <div class="w-1/3 h-40"></div>
    <div class="flex justify-end">
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semi-bold py-1 px-4 rounded mr-2 w-60">Cancel</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60">Save Only</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-1 px-4 rounded mr-2 w-60">Save and Continue</button>
    </div>
  </div>
        )}