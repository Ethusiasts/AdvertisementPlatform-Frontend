import Card from "../../components/advertisement/card"
import Table from "../../components/dashboard/table"
import SideBar from "../../components/dashboard/sidebar"
import Header from "../../components/dashboard/header"
import Label from "../../components/advertisement/label"

export default function Advertisement({ status, place, city, width, height, location, imageSrc, alt }) {
    return (
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
<div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
<SideBar />
</div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
<Header title="Advertisement"/>
<Label />

<div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
  <div class="p-5"><Card title="Magazine" description="Get Noticed: Create a Stunning Magazine Ad to Showcase Your Brand and Boost Sales"/></div>
  <div class="p-5"><Card title="Billboard" description="Take Your Message to New Heights: Design a Memorable Billboard Ad Today"/></div>
  <div class="p-5"><Card title="Radio" description="Make Waves in the Airwaves: Create a Captivating Radio Ad That Stands Out from the Competition!"/></div>
  <div class="p-5"><Card title="TV" description="Tell Your Story on the Big Screen: Design a TV Ad That Leaves a Lasting Impression on Your Viewers!"/></div>
</div>
        <Table />
      </div>
</div>
)};

