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

export const getMedias = ({ currentPage }) => {
  return axiosInstance
    .get(`/medias/?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const addMedias = () => {};
export const updateMedias = ({ mediaId }) => {};
