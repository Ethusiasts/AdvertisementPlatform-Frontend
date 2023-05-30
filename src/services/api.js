import axiosInstance from "../utils/axiosInstance";
export const getBillboards = () => {
  return axiosInstance
    .get("/billboards/")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const searchBillboards = ({ query }) => {
  return axiosInstance
    .get(`/billboards/search?q=${query}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
