import { axiosInstance } from "../utils/axiosInstance";

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

export const getUserAdvertisements = (user_id) => {
  return axiosInstance
    .get(`/auth/${user_id}/advertisements/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
