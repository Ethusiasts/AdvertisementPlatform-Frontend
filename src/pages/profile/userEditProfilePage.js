import UserEditProfileCard from "../../components/profile/userEditProfileCard";
import SideBar from "../../components/user/sidebar";

export default function UserEditProfilePage({}) {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <div class="flex items-center justify-center pl-14">
          <UserEditProfileCard />
        </div>
      </div>
    </div>
  );
}
