import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

const id = getUser()?.id;
export const getAdminStat = () => {
  return axiosInstance
    .get(`/auth/${id}/stats`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const changeUSerState = (user_id, isBlocked) => {
  return axiosInstance
    .put(`/admins/${user_id}`, isBlocked)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getAdminStats = () => {
  return axiosInstance
    .get(`/admins/`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error;
    });
};
