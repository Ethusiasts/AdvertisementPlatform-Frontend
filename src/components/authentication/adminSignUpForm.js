import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/auth/signup_api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoaderSpinner } from "../spinners";
import Select from "react-tailwindcss-select";
import { selectOptionsAdminSignUp } from "../../utils";
import { toast } from "react-hot-toast";

export default function AdminSignUpForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");
  const [role, setRole] = useState(selectOptionsAdminSignUp[0]);

  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess: async (data) => {
      if (data.status === 200) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/UserControl");
        }, 2000);
      } else {
        toast.error(data.response.data.message);
      }
    },
    onError: () => {
      console.log("error2");
      toast.error("Some error occurred...");
    },
  });

  const onSubmit = (data) => {
    data.preventDefault();

    if (password !== rePassword) {
      toast.error("Password should match");
    } else {
      const user = {
        email: email,
        role: role.value,
        is_verified: true,
        password: password,
      };
      mutate(user);
    }
  };

  return (
    <div class="border-stroke p-2 m-10 rounded-lg ">
      <form onSubmit={onSubmit} method="POST">
        <div className="mb-4">
          <label className="mb-2 block font-medium text-black">Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
                <g opacity="0">
                  <path
                    d="M19.2516 3.30005H2.75156C18281 3.30005 085938 4.26255 085938 5.46567V16.6032C085938 17.7719 14844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16344V6.35942L10.1766 11157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11172 11.6875 11.7578 11157L19.8016 6.35942V16688C19.8703 16.9125 19953 17.1532 19.2516 17.1532Z"
                    fill=""
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium text-black">Password</label>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
                <g opacity="0">
                  <path
                    d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 89219 0.996884 72656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19594 4.19219 21.3813 6.42656 21.3813H15016C17.7703 21.3813 19.6266 1925 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM85781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 85781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 92189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 92188 18.1141 11V17.2906Z"
                    fill=""
                  />
                  <path
                    d="M10.9977 11.8594C10852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                    fill=""
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium text-black">
            Re-type Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="repassword"
              placeholder="Re-enter your password"
              value={rePassword}
              onChange={(e) => setRepassword(e.target.value)}
              required
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
                <g opacity="0">
                  <path
                    d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 89219 0.996884 72656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19594 4.19219 21.3813 6.42656 21.3813H15016C17.7703 21.3813 19.6266 1925 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM85781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 85781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 92189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 92188 18.1141 11V17.2906Z"
                    fill=""
                  />
                  <path
                    d="M10.9977 11.8594C10852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                    fill=""
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium text-black">Role</label>
          <div className="relative">
            <Select
              value={role}
              onChange={(val) => setRole(val)}
              options={selectOptionsAdminSignUp}
              required
            />
          </div>
        </div>
        <div className="mb-5 ">
          {isLoading ? (
            <div className="flex w-full justify-center align-center items-center p-4">
              {"  "}
              <PropagateLoaderSpinner />
            </div>
          ) : (
            <input
              type="submit"
              onSubmit={onSubmit}
              value="Create account"
              className="w-full cursor-pointer rounded-lg border border-primary bg-blue-700 p-4 text-white transition hover:bg-opacity-90"
            />
          )}
        </div>
      </form>
    </div>
  );
}
