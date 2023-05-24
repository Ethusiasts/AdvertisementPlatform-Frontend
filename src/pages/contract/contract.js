import Table from "../../components/contract/table"
import SideBar from "../../components/user/sidebar"
import Header from "../../components/user/header"

export default function Contract({ status, place, city, width, height, location, imageSrc, alt }) {
    return (
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
<div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
<SideBar />
</div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
<Header title="Contracts"/>
        <Table />
      </div>
</div>
)};

