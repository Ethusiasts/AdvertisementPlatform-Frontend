import CreateBillboardAdForm from "../../components/advertisement/createBillboard";
import SideBar from "../../components/user/sidebar";
import Header from "../../components/user/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateBillboardAd() {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <ToastContainer />

      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <Header title="Advertisement" />

        <div class="flex items-center justify-center p-10 px-20">
          <CreateBillboardAdForm />
        </div>
      </div>
    </div>
  );
}
