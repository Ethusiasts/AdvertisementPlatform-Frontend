import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

const id = getUser()?.id;
export const createContract = (contract) => {
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

export const getUserContracts = ({ currentPage }) => {
  return axiosInstance
    .get(`/auth/${id}/contracts?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
export const getBillboardContracts = ({ currentPage }) => {
  return axiosInstance
    .get(`/media_agencies/${id}/contracts?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
export const getAgencyContracts = () => {
  return axiosInstance
    .get(`/media_agencies/${id}/contracts`)
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
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
