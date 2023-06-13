import { axiosInstance } from "../utils/axiosInstance";

export const mediaAgencyStepper = (agency) => {
  // console.log(agency);
  agency = {
    company_name: "fadsf",
    tin_number: "421221",
    user: 3,
  };

  return axiosInstance
    .post("/media_agencies", agency)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
