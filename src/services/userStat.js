import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

const id = getUser()?.id;
export const getUserStats = () => {
  return axiosInstance
    .get(`/auth/${id}/stats`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
