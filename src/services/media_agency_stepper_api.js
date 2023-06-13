import { axiosInstance } from "../utils/axiosInstance";

export const mediaAgencyStepper = (agency) => {
  return axiosInstance
    .post("/media_agencies/", agency)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
