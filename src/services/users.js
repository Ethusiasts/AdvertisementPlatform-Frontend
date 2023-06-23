import { axiosInstance } from "../utils/axiosInstance";

export const getAllUsers = ({ currentPage }) => {
  return axiosInstance
    .get(`/auth/profiles?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
