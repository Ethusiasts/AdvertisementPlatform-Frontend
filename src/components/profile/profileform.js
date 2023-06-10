import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import AlertService from "../alertService";
import { userStepper } from "../../services/user_stepper_api";
import { getCookie } from "../../utils";
import { useNavigate } from "react-router-dom";
import { PropagateLoaderSpinner } from "../spinners";

export default function ProfileForm({ imgUrl }) {
  const [userName, setUserName] = useState("Devid27");
  const [phoneNumber, setPhoneNumber] = useState("+990 3343 7865");
  const [firstName, setFirstName] = useState("Devid");
  const [lastName, setLastName] = useState("Jhon");
  const [notification, setNotification] = useState();
  const [type, setType] = useState();

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(userStepper, {
    onSuccess: async (data) => {
      console.log(data);
      if (data.status === 200) {
        console.log(data);
        setNotification(data.message);
        setType("success");

        setTimeout(() => {
          navigate("/search");
        }, 3000);
      } else {
        var errors = "";
        Object.keys(data.response.data.message).forEach((key) => {
          // console.log(data.response.data.message[key][0]);
          errors += data.response.data.message[key][0] + "\n";
        });
        console.log(errors);
        setNotification(errors);
        setType("error");
        // setNotification(data.response.data.message);
        // console.log(data.response.data.message);

        // setType("error");
      }
    },
    onError: () => {
      setNotification("Some error occurred...");
    },
  });

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      username: userName,
      profile_picture: imgUrl,
      phone_number: phoneNumber,
      first_name: firstName,
      last_name: lastName,
      user: getCookie("user"),
    };
    mutate(userInfo);
    // handle form submission here
  };
  return (
    <div className="col-span-5 xl:col-span-3">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {notification ? (
          <AlertService message={notification} type={type} />
        ) : (
          ""
        )}
        <div className="p-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-5 flex flex-col gap-5 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black"
                  htmlFor="userName"
                >
                  User Name
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-4">
                    <svg
                      className="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17 14.7282 17 15.8333V17.5C17 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2 17.9602 2 17.5V15.8333C2 14.7282 2.93899 13.6684 3.72039 12.887Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Devid27"
                    value={userName}
                    onChange={handleUserNameChange}
                    required
                  />
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="+990 3343 7865"
                  value={phoneNumber}
                  required
                  onChange={handlePhoneNumberChange}
                />
              </div>
            </div>

            <div className="mb-5 flex flex-col gap-5 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-4">
                    <svg
                      className="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17 14.7282 17 15.8333V17.5C17 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2 17.9602 2 17.5V15.8333C2 14.7282 2.93899 13.6684 3.72039 12.887Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Devid"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                  />
                </div>
              </div>

              <div className="w-full sm:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-4">
                    <svg
                      className="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17 14.7282 17 15.8333V17.5C17 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2 17.9602 2 17.5V15.8333C2 14.7282 2.93899 13.6684 3.72039 12.887Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Jhon"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                  />
                </div>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-end gap-4">
                <PropagateLoaderSpinner />
              </div>
            ) : (
              <div className="flex justify-end gap-4">
                <button className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark">
                  Cancel
                </button>{" "}
                <button className="flex justify-center rounded bg-blue-600 py-2 px-6 font-medium text-white hover:shadow-1">
                  Save
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
