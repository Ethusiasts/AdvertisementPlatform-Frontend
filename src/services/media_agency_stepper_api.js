import { axiosInstance } from "../utils/axiosInstance";

export const mediaAgencyStepper = (agency) => {
  return axiosInstance
    .post("/auth/media_agencies", agency)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
