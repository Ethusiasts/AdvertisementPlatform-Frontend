import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { forgetPassword } from "../../services/auth/forget_password_api";
import { useState } from "react";
import { PropagateLoaderSpinner } from "../spinners";
import AlertService from "../alertService";
import { defaultErrorMsg } from "../../utils";

export default function ForgotPasswordForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState();
  const [type, setType] = useState();

  const { mutate, isLoading } = useMutation(forgetPassword, {
    onSuccess: (data) => {
      if (data.status === 200) {
        setNotification(data.message);
        setType("success");
        setTimeout(() => {
          navigate("/signup");
        }, 3000);
      } else {
        setType("error");
        setNotification(data.response.data.message);
      }
    },
    onError: () => {
      setType("error");
      setNotification(defaultErrorMsg);
    },
  });
  const onSubmit = (data) => {
    data.preventDefault();
    setNotification();
    const user = {
      email: email,
    };
    mutate(user.email);
  };
  return (
    <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
      {notification ? <AlertService message={notification} type={type} /> : ""}

      <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
        <h2 className="mb-9 text-base font-bold text-black sm:text-title-xl2">
          Forgot Password? Enter Your Email...
        </h2>

        <form onSubmit={onSubmit} method="POST">
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onClick={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />

              <span className="absolute right-4 top-4">
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                      fill=""
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>

          <div className="mb-5">
            {isLoading ? (
              <div className="flex w-full justify-center align-center items-center p-4">
                {"  "}
                <PropagateLoaderSpinner />
              </div>
            ) : (
              <input
                type="submit"
                value="Send"
                className="w-full cursor-pointer rounded-lg border border-blue bg-blue-700 p-4 text-white hover:bg-opacity-90"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
