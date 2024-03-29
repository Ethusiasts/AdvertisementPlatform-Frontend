import Card from "../components/mediaAgency/card";
import Table from "../components/mediaAgency/table";
import SideBar from "../components/mediaAgency/sidebar";
import Header from "../components/mediaAgency/header";
import VisitCard from "../components/billboards/visitCard";
export default function MediaDashboard() {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <Header title="Analytics" />
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div class="p-12">
            <Card />
          </div>
          <div class="p-12 col-span-2">
            <VisitCard />
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}
