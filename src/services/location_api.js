import { axiosLocationInstance } from "../utils/axiosInstance";
export const getLocations = ({ location }) => {
  return axiosLocationInstance
    .get(`/search?q=${location}&format=json`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
