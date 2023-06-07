import { axiosInstance } from "../../utils/axiosInstance";

export const signInwithGoogle = ({ email }) => {
  const d = Date.now();
  const passwordDefault = process.env.REACT_APP_GOOGLE_API_TOKEN + d;
  const body = {
    email: email,
    password: passwordDefault,
  };
  return axiosInstance
    .post("/auth/login", body)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
