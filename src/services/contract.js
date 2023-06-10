import { axiosInstance } from "../utils/axiosInstance";
export const createContract = (contract) => {
  console.log(contract);
  return axiosInstance
    .post(`/contracts/`, contract)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const approveContract = (contract_id, contract) => {
  console.log(contract);
  return axiosInstance
    .put(`/contracts/${contract_id}`, contract)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getUserContracts = (user_id) => {
  return axiosInstance
    .get(`/auth/${user_id}/contracts/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getContract = (contractId) => {
  return axiosInstance
    .get(`/contracts/${contractId}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
