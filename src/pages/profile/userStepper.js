import { useState } from "react";
import ProfileForm from "../../components/profile/profileform";
import ProfilePictureForm from "../../components/profile/profilepicture";

export default function UserStepper({
  status,
  place,
  city,
  width,
  height,
  location,
  imageSrc,
  alt,
}) {
  const [imgUrl, setImgUrl] = useState();

  return (
    <div className="flex justify-center items-center p-10 shadow-sm">
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap items-center p-10 m-10 rounded-md bg-blue-100">
          <h2 className="mb-9 text-2xl font-bold text-black sm:text-title-xl2">
            Personal Information
          </h2>

          <div className="grid grid-cols-5 gap-8 w-full">
            <ProfileForm imgUrl={imgUrl} />
            <ProfilePictureForm mgUrl={imgUrl} setImgUrl={setImgUrl} />
          </div>

          {/* <button
            type="submit"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        
        >
            Submit
          </button> */}
        </div>
      </div>
    </div>
  );
}
