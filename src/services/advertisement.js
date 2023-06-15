import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

const id = getUser()?.id;

export const createAdvertisement = (advertisement) => {
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

export const getUserAdvertisements = ({ currentPage }) => {
  return axiosInstance
    .get(`/auth/${id}/advertisements?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("first");
      console.error(error);
      return error;
    });
};
