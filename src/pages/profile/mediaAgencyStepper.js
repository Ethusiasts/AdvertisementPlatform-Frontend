import AccountForm from "../../components/profile/accountForm";
import ProfileForm from "../../components/profile/profileform";
import ProfilePictureForm from "../../components/profile/profilepicture";

export default function MediaAgencyStepper({ status, place, city, width, height, location, imageSrc, alt }) {
    return (
        <div class="flex justify-center items-center p-10 shadow-sm">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="flex flex-wrap items-center p-10 m-10 rounded-md bg-gray-200">






<form action="#">


<ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mb-7">
    <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
    </li>
    <li class="flex items-center">
        <span class="mr-2">2</span>
        Account <span class="hidden sm:inline-flex sm:ml-2">Info</span>
    </li>
</ol>


<div className="grid grid-cols-5 gap-8 w-full">
<ProfileForm/>
<ProfilePictureForm/>
        </div>


        <div className="grid grid-cols-5 gap-8 w-full mt-10">
<AccountForm/>
        </div>



    <button type="submit" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Next Step: Payment Info
    </button>
</form>









          </div>
        </div>
        </div>
)};