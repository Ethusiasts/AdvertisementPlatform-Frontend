import Card from "../components/user/card";
import SideBar from "../components/user/sidebar";
import InfoCard from "../components/user/infoCard";
import Header from "../components/user/header";
import Table from "../components/advertisement/table";
export default function MyAccount() {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <Header title="Analytics" />
        <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 col-span-2">
            <Card />
          </div>
          <div class="col-start-3 row-start-1 rounded-md m-4">
            <InfoCard />
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}
