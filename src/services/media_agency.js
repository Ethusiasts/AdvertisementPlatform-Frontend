import axiosInstance from "../utils/axiosInstance";
export const getMediaAgencyBillbaords = (media_agency_id) => {
  return axiosInstance
    .get(`/media_agencies/${media_agency_id}/billboards/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
