export default function ProfileCard({ status, place, city, width, height, location, imageSrc, alt }) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg h-full w-full">
<div class="h-48 bg-gradient-to-br from-teal-500 to-gray-400"></div>
      <div className="flex justify-between ml-10 -mt-14">
        <div className="flex justify-between gap-10">
          <img src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"  className="w-48 h-48 rounded-full object-cover" alt="Profile picture"/>
          <div className="flex items-center">
            <div className="mr-4">
              <h2 className="text-3xl font-semi-bold">Abenezer Fekadu</h2>
              <p className="text-xl text-gray-500">@abeni27</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mr-10">
          <button className="w-24 py-1 bg-white text-blue-500 rounded hover:bg-gray-300 inline-block">Cancel</button>
          <button className="w-24 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block">Save</button>
        </div>
      </div>

      <div className="mx-10 my-5">
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="first-name">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="first-name" type="text" placeholder="First Name"/>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" placeholder="Last Name"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Email"/>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="linkedin-handle">
              LinkedIn Handle
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="linkedin-handle" type="text" placeholder="LinkedIn Handle"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-3/5 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="country">
              Country
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="country" type="text" placeholder="Country"/>
          </div>
          <div className="w-full md:w-2/5 px-3">
            <label className="block tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="role">
              Role
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="role" type="text" placeholder="Role"/>
          </div>
        </div>
        <div className="mb-4">
          <label className="block tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="bio" type="text" placeholder="Tell us about yourself"></textarea>
        </div>
      </div>
    </div>
  );
};