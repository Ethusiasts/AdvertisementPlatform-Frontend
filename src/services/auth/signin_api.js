import { axiosInstance } from "../../utils/axiosInstance";

export const signIn = ({ email, password }) => {
  const body = {
    email: email,
    password: password,
  };
  return axiosInstance
    .post("/auth/login", body)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};
