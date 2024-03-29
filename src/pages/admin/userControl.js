import Card from "../../components/admin/card";
import Table from "../../components/admin/table";
import SideBar from "../../components/admin/sidebar";
import Header from "../../components/admin/header";
export default function UserControl() {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <Header title="User Control" />
        <Table />
      </div>
    </div>
  );
}
