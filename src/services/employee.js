import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

export const getEmployeeBillboards = ({ currentPage }) => {
  const user = getUser();
  return axiosInstance
    .get(`/employees/${user.id}/billboards?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const changeBillboardState = (billboard_id, approved) => {
  return axiosInstance
    .put(`/billboards/${billboard_id}`, approved)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
