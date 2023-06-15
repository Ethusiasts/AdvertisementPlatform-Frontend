import SideBar from "../../components/admin/sidebar";
import Header from "../../components/admin/header";
import StatCard from "../../components/admin/statCard";
import { getAdminStats } from "../../services/adminStat";
import { useQuery } from "@tanstack/react-query";
export default function AdminDashboard() {
  const { data: stat, isLoading } = useQuery(["proposals"], () => {
    return getAdminStats()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  });
  console.log(stat);
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <Header title="Admin Dashboard" />
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4 my-auto">
          <StatCard
            color="bg-blue-100"
            title="Total Customers"
            count={stat?.total_user}
          />
          <StatCard
            color="bg-yellow-100"
            title="Total Landowners"
            count={stat?.total_landowner}
          />
          <StatCard
            color="bg-green-100"
            title="Total Media Agencies"
            count={stat?.total_tv + stat?.total_radio}
          />
          <StatCard
            color="bg-red-100"
            title="Total Employees"
            count={stat?.total_employee}
          />
        </div>
      </div>
    </div>
  );
}
