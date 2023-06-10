import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://advertisementplatform-0xpy.onrender.com/api/v1",
});

const axiosLocationInstance = axios.create({
  baseURL: "https://nominatim.openstreetmap.org",
});

export { axiosInstance, axiosLocationInstance };
