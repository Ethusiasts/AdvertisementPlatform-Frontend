import React, { useContext, useState } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import userSix from "../../images/user-06.png";
import { ImgContext } from "../../App";
import { toast } from "react-hot-toast";
import { getCookie } from "../../utils";

export default function ProfilePicEdit({}) {
  const userProfile = JSON.parse(getCookie("user_profile"));
  const profileImg = useContext(ImgContext);

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    event.preventDefault();
    setImage(event.target.files[0]);
    uploadImage();
  };

  const uploadImage = () => {
    toast.success("uploading");
    if (image == null) return;
    const imageRef = ref(
      storage,
      `profile/images/` + `${Date.now()}` + `${image.name}`
    );

    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        profileImg.setImgUrl(url);
        toast.success("successfully uploaded");
        console.log("profileUrl", profileImg.ImgUrl);
      });
    });
  };

  return (
    <form action={uploadImage}>
      <div className="relative z-30 mx-auto  h-48 w-48 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:w-44 sm:p-2">
        <div className="relative drop-shadow-2">
          <img
            src={userProfile.profile_picture}
            alt="profile"
            class="h-28 w-28 sm:h-40 sm:w-40 rounded-full"
          />
          <label
            htmlFor="profile"
            className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-700 text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
          >
            <svg
              className="fill-current"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                fill=""
              />
            </svg>
            <input
              type="file"
              name="profile"
              id="profile"
              accept="image/*"
              className="sr-only"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
