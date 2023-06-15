import { axiosInstance } from "../utils/axiosInstance";

export const getEmployeeBillboards = ({ currentPage }) => {
  const id = 11;
  return axiosInstance
    .get(`/employees/${id}/billboards?page=${currentPage}`)
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
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
