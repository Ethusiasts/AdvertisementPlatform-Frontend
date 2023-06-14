import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

const id = getUser()?.id;
console.log(id);
export const getMediaAgencyBillbaords = () => {
  return axiosInstance
    .get(`/media_agencies/${id}/billboards/`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
