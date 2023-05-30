<<<<<<< HEAD
import UserTable from "../../components/contract/userTable";
import SideBar from "../../components/user/sidebar";
import Header from "../../components/user/header";

export default function Contract({
  status,
  place,
  city,
  width,
  height,
  location,
  imageSrc,
  alt,
}) {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
      <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <SideBar />
      </div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
        <Header title="Contracts" />
        <UserTable />
      </div>
    </div>
  );
}
=======
import UserTable from "../../components/contract/userTable"
import SideBar from "../../components/user/sidebar"
import Header from "../../components/user/header"

export default function UserContract({ status, place, city, width, height, location, imageSrc, alt }) {
    return (
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
<div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
<SideBar />
</div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
<Header title="Contracts"/>
        <UserTable />
      </div>
</div>
)};

>>>>>>> b15e92b3df6e87faaf3c3f2569cf44681d6ba79c
