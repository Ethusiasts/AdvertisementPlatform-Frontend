import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://advertisementplatform-0xpy.onrender.com/api/v1",
});

export default axiosInstance;
