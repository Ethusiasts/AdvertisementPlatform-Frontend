import { getCookie } from "../../utils";

export default function Header({ title }) {
  const userProfile = JSON.parse(getCookie("userProfile"));
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex items-center">
        <img
          className="h-14 w-14 rounded-full object-cover mx-2"
          src={userProfile.profile_picture}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}
