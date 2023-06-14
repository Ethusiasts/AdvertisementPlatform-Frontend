import { axiosInstance } from "../utils/axiosInstance";

export const mediaAgencyStepper = (agency) => {
  return axiosInstance
    .post("/media_agencies/", agency)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const editMediaAgencyStepper = (agency) => {
  console.log(agency);

  return axiosInstance
    .put(`/media_agencies/${agency.user}`, agency)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      console.log(error);

      return error;
    });
};
