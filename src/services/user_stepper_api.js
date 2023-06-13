import { axiosInstance } from "../utils/axiosInstance";

export const userStepper = (user) => {
  console.log(user);
  return axiosInstance
    .post("/auth/profiles", user)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      console.log(error);

      return error;
    });
};
