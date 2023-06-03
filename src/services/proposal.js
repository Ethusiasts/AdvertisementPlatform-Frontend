import axiosInstance from "../utils/axiosInstance";
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

export const getMediaAgencyProposals = (media_agency_id) => {
  return axiosInstance
    .get(`/media_agencies/${media_agency_id}/proposals/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getUserProposals = (user_id) => {
  return axiosInstance
    .get(`/auth/${user_id}/proposals/`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
