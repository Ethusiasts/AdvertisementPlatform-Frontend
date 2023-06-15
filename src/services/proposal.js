import { axiosInstance } from "../utils/axiosInstance";
import getUser from "../utils/utils";

const id = getUser()?.id;
export const createProposal = (proposal) => {
  console.log(proposal);
  return axiosInstance
    .post(`/proposals/`, proposal)
    .then((res) => {
      return { success: true, data: res.data };
    })
    .catch((error) => {
      return { success: false, data: error };
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
  console.log(id);
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
