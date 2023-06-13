import { axiosInstance } from "../../utils/axiosInstance";

export const resetPassword = ({ password }) => {
  const body = {
    password: password,
  };
  let config = {
    headers: {
      Authorization: "Bearer ".concat(
        "c167779c31deeedcba4fc9ceb9682375e6c78319"
      ),
    },
  };
  console.log(body);
  return axiosInstance
    .post("/auth/reset_password", body, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
