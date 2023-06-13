import { Stepper, Step } from "react-form-stepper";
import { useContext, useState } from "react";
import ProfilePictureForm from "../../components/profile/profilepicture";
import AccountForm from "../../components/profile/accountForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { PropagateLoaderSpinner } from "../../components/spinners";
import { useMutation } from "@tanstack/react-query";
import MediaAgencyStepper from "./mediaAgencyStepper";
import { getCookie, setCookie } from "./../../utils";
import jwtDecode from "jwt-decode";
import { userStepper } from "../../services/user_stepper_api";
import { mediaAgencyStepper } from "../../services/media_agency_stepper_api";
import { ImgContext } from "../../App";

export default function ProfileStepper() {
  return (
    <div className="App">
      <PlaceOrder />
    </div>
  );
}

export const PlaceOrder = () => {
  const [goSteps, setGoSteps] = useState(0);
  const [userName, setUserName] = useState("Devid27");
  const [phoneNumber, setPhoneNumber] = useState("+990 3343 7865");
  const [firstName, setFirstName] = useState("Devid");
  const [companyName, setCompanyName] = useState("Five Star Advertisers PLC");
  const [tinNumber, setTinNumber] = useState("008836655");
  const [lastName, setLastName] = useState("Jhon");
  const navigate = useNavigate();
  const { id } = jwtDecode(getCookie("user"));
  const profileImg = useContext(ImgContext);

  const { mutate, isLoading: isLoadingUser } = useMutation(userStepper, {
    onSuccess: async (data) => {
      console.log(data);
      if (data.status === 201) {
        console.log(data.data);
        toast.success(data.message);

        setCookie("user_profile", JSON.stringify(data.data));

        setTimeout(() => {
          navigate(-1);
        }, 3000);
      } else {
        var errors = "";
        Object.keys(data.response.data.message).forEach((key) => {
          errors += data.response.data.message[key][0] + "\n";
        });
        console.log(errors);
        toast.error(errors);
      }
    },
    onError: () => {
      toast.error("Some error occurred...");
    },
  });
  const { mutate: mutateMediaAgencyDetail, isLoading } = useMutation(
    mediaAgencyStepper,
    {
      onSuccess: async (data) => {
        console.log(data);
        if (data.status === 201) {
        } else {
          var errors = "";
          Object.keys(data.response.data.message).forEach((key) => {
            errors += data.response.data.message[key][0] + "\n";
          });
          console.log(errors);
          toast.error(errors);
        }
      },
      onError: () => {
        toast.error("Some error occurred...");
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const agencyDetail = {
      company_name: companyName,
      tin_number: tinNumber,
      user: id,
    };
    const userDetail = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      phone_number: phoneNumber,
      profile_picture: profileImg.ImgUrl,
      user: id,
    };
    mutateMediaAgencyDetail(agencyDetail);

    mutate(userDetail);
  };

  return (
    <div>
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} label="Personal Info" />
        <Step onClick={() => setGoSteps(1)} label="Account Information" />
        <Step onClick={() => setGoSteps(2)} label="Upload Image" />
      </Stepper>
      {goSteps === 0 && (
        <>
          <div className="grid gap-8 ">
            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="p-7">
                  {/* <form onSubmit={handleSubmit}> */}
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
                          onChange={(e) => setUserName(e.target.value)}
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
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                          onChange={(e) => setFirstName(e.target.value)}
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
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* {isLoading ? (
                      <div className="flex justify-end gap-4">
                        <PropagateLoaderSpinner />
                      </div>
                    ) : (
                      <div className="flex justify-end gap-4">
                        <button className="flex justify-center rounded bg-blue-600 py-2 px-6 font-medium text-white hover:shadow-1">
                          Save
                        </button>
                      </div>
                    )} */}
                  {/* </form> */}
                </div>
              </div>
            </div>{" "}
          </div>

          <button
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setGoSteps(1)}
          >
            Save & continue
          </button>
        </>
      )}

      {goSteps === 1 && (
        <>
          <div className="grid  w-full">
            <div className="col-span-5 xl:col-span-5">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="p-7">
                  <form action="#">
                    <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                      <div className="w-full sm:w-1/2">
                        <label
                          className="mb-3 block text-sm font-medium text-black "
                          htmlFor="fullName"
                        >
                          Company Name
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-4">
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
                            className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                            type="text"
                            name="companyName"
                            id="companyName"
                            placeholder="Five Star Advertisers PLC"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <label
                          className="mb-3 block text-sm font-medium text-black "
                          htmlFor="tinNumber"
                        >
                          TIN Number
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-4">
                            <svg
                              className="fill-current"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.167 2.5H15.833C16.3932 2.5 16.845 2.93296 16.9429 3.48477L18.6756 13.4848C18.8053 14.285 18.216 15 17.416 15H2.58301C1.783 15 1.19367 14.285 1.32335 13.4848L3.056 3.48477C3.15388 2.93296 3.60567 2.5 4.167 2.5ZM8.33301 11.6666C8.33301 12.4397 9.06001 13.0666 9.91667 13.0666C10.7733 13.0666 11.5003 12.4397 11.5003 11.6666C11.5003 10.8936 10.7733 10.2666 9.91667 10.2666C9.06001 10.2666 8.33301 10.8936 8.33301 11.6666ZM6.66667 5.83329C6.66667 5.37306 7.03978 4.99996 7.5 4.99996H12.5C12.9602 4.99996 13.3333 5.37306 13.3333 5.83329V6.66663H6.66667V5.83329Z"
                                fill=""
                              />
                            </svg>
                          </span>
                          <input
                            className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                            type="text"
                            name="tinNumber"
                            id="tinNumber"
                            placeholder="008836655"
                            value={tinNumber}
                            onChange={(e) => setTinNumber(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="emailAddress"
                      >
                        Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-4">
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
                                d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2 3.33301 2.5H16.6663C18.0432 2 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17 16.6663 17.5H3.33301C1.9561 17 0.833008 16.3769 0.833008 15V5Z"
                                fill=""
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                          name="address"
                          id="address"
                          placeholder="Addis Ababa, Ethiopia"
                          defaultValue="Addis Ababa, Ethiopia"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>{" "}
          </div>

          <button
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setGoSteps(2)}
          >
            Save & continue
          </button>
        </>
      )}
      {goSteps === 2 && (
        <>
          <div className="grid  w-full">
            <ProfilePictureForm />
          </div>

          <button
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};
