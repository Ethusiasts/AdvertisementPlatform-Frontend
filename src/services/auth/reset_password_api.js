import axiosInstance from "../../utils/axiosInstance";

export const resetPassword = ({ password }) => {
  const body = {
    password: password,
  };
  return axiosInstance
    .post("/auth/reset_password", body)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
