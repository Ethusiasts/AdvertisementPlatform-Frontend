import axiosInstance from "../utils/axiosInstance";

export const getMediaDetail = ({ mediaId }) => {
  return axiosInstance
    .get(`/agencies/${mediaId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
