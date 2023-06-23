import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

const id = getUser()?.id;

export const getMediaAgencyBillbaords = ({ currentPage }) => {
  return axiosInstance
    .get(`/media_agencies/${id}/billboards?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getMediaAgencyAgencies = ({ currentPage }) => {
  return axiosInstance
    .get(`/media_agencies/${id}/agencies?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
