import { axiosInstance } from "../../utils/axiosInstance";

export const signUpwithGoogle = ({ email }) => {
  const d = Date.now();
  const passwordDefault = process.env.REACT_APP_GOOGLE_API_TOKEN + d;
  const body = {
    email: email,
    role: "customer",
    is_verified: true,
    password: passwordDefault,
  };
  return axiosInstance
    .post("/auth/signup", body)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
