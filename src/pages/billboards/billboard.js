import Card from "../../components/billboard/card"
import Table from "../../components/billboards/table"
import SideBar from "../../components/billboards/sidebar"
import Header from "../../components/billboards/header"
import Label from "../../components/billboard/label"

export default function Billboard({ status, place, city, width, height, location, imageSrc, alt }) {
    return (
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
<div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
<SideBar />
</div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
<Header title="Advertisement"/>
<Label />

<div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
  <div class="p-5"><Card title="Magazine" description="Get Noticed: Create a Stunning Magazine Ad to Showcase Your Brand and Boost Sales" route="/Advertisement/CreateMagazineAd" photo="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"/></div>
  <div class="p-5"><Card title="Billboard" description="Take Your Message to New Heights: Design a Memorable Billboard Ad Today" route="/Advertisement/CreateBillboard" photo="https://images.unsplash.com/photo-1576864333214-b2cee50f8283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"/></div>
  <div class="p-5"><Card title="Radio" description="Make Waves in the Airwaves: Create a Captivating Radio Ad That Stands Out from the Competition!" route="/Advertisement/CreateRadioAd" photo="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"/></div>
  <div class="p-5"><Card title="TV" description="Tell Your Story on the Big Screen: Design a TV Ad That Leaves a Lasting Impression on Your Viewers!" route="/Advertisement/CreateTvAd" photo="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"/></div>
</div>
        <Table />
      </div>
</div>
)};

