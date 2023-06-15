import { axiosInstance } from "../../utils/axiosInstance";

export const signUp = ({ email, role, is_verified, password }) => {
  const body = {
    email: email,
    role: role,
    is_verified: is_verified,
    password: password,
  };
  return axiosInstance
    .post("/auth/signup", body)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
