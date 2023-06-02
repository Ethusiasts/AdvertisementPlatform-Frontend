import axiosInstance from "../utils/axiosInstance";

export const userStepper = (user) => {
  console.log(advertisement);
  return axiosInstance
    .post(`/advertisements/`, advertisement)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
