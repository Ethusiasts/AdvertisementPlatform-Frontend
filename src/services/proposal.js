import { axiosInstance } from "../utils/axiosInstance";
import { user } from "../utils/utils";

const { id } = user;

export const createProposal = (proposal) => {
  console.log(proposal);
  return axiosInstance
    .post(`/proposals/`, proposal)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getProposal = (proposal_id) => {
  return axiosInstance
    .get(`/proposals/${proposal_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getMediaAgencyProposals = () => {
  return axiosInstance
    .get(`/media_agencies/${id}/proposals/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getUserProposals = () => {
  return axiosInstance
    .get(`/auth/${id}/proposals/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
