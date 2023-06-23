import SideBar from "../../components/employee/sidebar";
import Header from "../../components/employee/header";
import Table from "../../components/employee/table";
export default function EmployeeDashboard() {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <Header title="Employee Dashboard" />
        <Table />
      </div>
    </div>
  );
}
