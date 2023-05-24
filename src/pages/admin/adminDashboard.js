import Card from "../../components/admin/card"
import Table from "../../components/admin/table"
import SideBar from "../../components/admin/sidebar"
import Header from "../../components/admin/header"
export default function AdminDashboard({ status, place, city, width, height, location, imageSrc, alt }) {
    return (
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
<div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
<SideBar />
</div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
<Header title="Admin Dashboard" />
      <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="p-12"><Card /></div>
  <div class="p-12"><Card /></div>
  <div class="p-12"><Card /></div>
  <div class="p-12"><Card /></div>
  <div class="p-12"><Card /></div>
  <div class="p-12"><Card /></div>
</div>
      </div>
</div>
)};