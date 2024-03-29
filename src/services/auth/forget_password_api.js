import { axiosInstance } from "../../utils/axiosInstance";

export const forgetPassword = (body) => {
  // const body = {
  //   email: email,
  // };
  return axiosInstance
    .post("/auth/forgot-password", body)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
