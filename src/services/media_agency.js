import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

const id = getUser()?.id;

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

export const getMediaAgencyAgencies = () => {
  return axiosInstance
    .get(`/media_agencies/${id}/agencies/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
