import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

const id = getUser()?.id;
export const getMediaAgencyStats = () => {
  return axiosInstance
    .get(`/media_agencies/${id}/stats`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
