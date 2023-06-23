import ProfileForm from "../../components/profile/profileform";
import ProfilePictureForm from "../../components/profile/profilepicture";

export default function UserStepper() {
  return (
    <div className="flex justify-center items-center p-10 shadow-sm">
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap items-center p-10 m-10 rounded-md bg-blue-100">
          <h2 className="mb-9 text-2xl font-bold text-black sm:text-title-xl2">
            Personal Information
          </h2>

          <div className="grid grid-cols-5 gap-8 w-full">
            <ProfileForm />
            <ProfilePictureForm />
          </div>
        </div>
      </div>
    </div>
  );
}
