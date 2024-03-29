import jwt_decode from "jwt-decode";
import { getCookie, setCookie } from "../utils";
import { axiosInstance } from "../utils/axiosInstance";

export const userStepper = (user) => {
  return axiosInstance
    .post("/auth/profiles", user)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const editUserStepper = (user) => {
  return axiosInstance
    .put(`/auth/profiles/${user.user}`, user)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getUserStepper = (userId) => {
  return axiosInstance
    .get(`/auth/profiles/${userId}`)
    .then((res) => {
      setCookie("user_profile", JSON.stringify(res.data.data));
      return res.data;
    })
    .catch((error) => {
      console.error(error);

      return error;
    });
};
