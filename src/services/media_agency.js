import { axiosInstance } from "../utils/axiosInstance";
import { user } from "../utils/utils";

const { id } = user;
export const getMediaAgencyBillbaords = () => {
  return axiosInstance
    .get(`/media_agencies/${id}/billboards/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
