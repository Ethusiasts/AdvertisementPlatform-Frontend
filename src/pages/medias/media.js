import Card from "../../components/medias/card";
import Table from "../../components/mediaAgency/table";
import SideBar from "../../components/mediaAgency/sidebar";
import Header from "../../components/mediaAgency/header";
import Label from "../../components/medias/label";
export default function Media() {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <Header title="Media" />
        <Label />

        <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
          <div class="p-5">
            <Card
              title="TV or Radio Media"
              description="Tell Your Story on the Big Screen: Design a TV Ad That Leaves a Lasting Impression on Your Viewers!"
              route="/CreateMedia"
              photo="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            />
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}
