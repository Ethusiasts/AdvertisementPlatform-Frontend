import CreateMagazineAdForm from "../../components/advertisement/createMagazineAd"
import SideBar from "../../components/dashboard/sidebar"
import Header from "../../components/dashboard/header"
import Label from "../../components/advertisement/label"

export default function CreateMagazineAd({ status, place, city, width, height, location, imageSrc, alt }) {
    return (
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
<div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
<SideBar />
</div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
<Header title="Advertisement"/>

<div class="flex items-center justify-center p-10"><CreateMagazineAdForm/></div>
      </div>
</div>
)};

