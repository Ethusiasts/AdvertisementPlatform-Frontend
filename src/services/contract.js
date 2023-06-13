import { axiosInstance } from "../utils/axiosInstance";
import { user } from "../utils/utils";

const { id } = user;
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

export const getUserContracts = () => {
  return axiosInstance
    .get(`/auth/${id}/contracts/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
export const getBillboardContracts = () => {
  return axiosInstance
    .get(`/media_agencies/${id}/contracts/`)
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
