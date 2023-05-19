export default function ContactUsForm({ status, place, city, width, height, location, imageSrc, alt }) {
    return (

        <div class="card shadow-md rounded-md mt-20">
    <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 px-4 md:px-0 flex justify-center items-center">
      <div class="p-4">
        <h2 class="text-2xl mb-4">Advert</h2>
        <p class="mb-2">123 Main St, Suite 100</p>
        <p class="mb-2">Anytown, USA 12345</p>
        <p class="mb-2">Phone: (123) 456-7890</p>
      </div>
    </div>
    <div class="w-full md:w-1/2 px-4">
      <div class="p-4">
        <form class="flex flex-col">
          <label class="mb-2" for="subject">Subject:</label>
          <input class="bg-gray-400 mb-4 rounded-md" type="text" id="subject" name="subject"/>
          <label class="mb-2" for="message">Message:</label>
          <textarea class="mb-4 bg-gray-400 rounded-md" id="message" name="message" rows="5"></textarea>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
        </div>
        )}