import jwt_decode from "jwt-decode";
import { setCookie } from "../utils";
import { axiosInstance } from "../utils/axiosInstance";

export const userStepper = (user) => {
  console.log(user);
  return axiosInstance
    .post("/auth/profiles", user)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      console.log(error);

      return error;
    });
};

export const editUserStepper = (user) => {
  console.log(user);

  return axiosInstance
    .put(`/auth/profiles/${user.user}`, user)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      console.log(error);

      return error;
    });
};

export const getUserStepper = (userId) => {
  return axiosInstance
    .get(`/auth/profiles/${userId}`)
    .then((res) => {
      setCookie("userProfile", JSON.stringify(res.data.data));
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      console.log(error);

      return error;
    });
};
