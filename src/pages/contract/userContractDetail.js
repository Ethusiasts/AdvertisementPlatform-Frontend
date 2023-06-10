import Header from "../../components/billboards/header";
import ContractDetailCard from "../../components/contract/contractDetail";
import SideBar from "../../components/user/sidebar";
export default function UserContractDetail() {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <Header title="Contracts" />
        <ContractDetailCard />
      </div>
    </div>
  );
}
