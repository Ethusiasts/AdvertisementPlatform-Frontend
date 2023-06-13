import { axiosInstance } from "../utils/axiosInstance";
import { user } from "../utils/utils";

const { id } = user;

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

export const getUserAdvertisements = () => {
  return axiosInstance
    .get(`/auth/${id}/advertisements/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
