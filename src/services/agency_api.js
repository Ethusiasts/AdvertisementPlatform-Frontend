import { axiosInstance } from "../utils/axiosInstance";

export const getMediaDetail = ({ mediaId }) => {
  return axiosInstance
    .get(`/agencies/${mediaId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getAgencies = ({ currentPage }) => {
  return axiosInstance
    .get(`/agencies/?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const createAgency = (agency) => {
  return axiosInstance
    .post(`/agencies/`, agency)
    .then((res) => {
      return { success: true, data: res.data };
    })
    .catch((error) => {
      return { success: false, data: error };
    });
};

export const deleteAgency = ({ agencyId }) => {
  return axiosInstance
    .delete(`/agencies/${agencyId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const searchAgenciesWithQueryOnly = ({ query, currentPage }) => {
  return axiosInstance
    .get(`/agencies/search?q=${query}&page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const searchAgencies = ({
  currentPage,
  query,
  channelType,
  type,
  promotionTime,
  min_price,
  max_price,
}) => {
  let url = `/agencies/search`;
  if (query) {
    url += `?q=${query}`;
  }
  if (channelType) {
    url += `&channel_name=${channelType}`;
  }
  if (type) {
    if (type === "Production") {
      url += "&production=true";
    }
  }
  if (promotionTime) {
    if (promotionTime === "Peak Hour") {
      url += "&peak_hour=true";
    }
  }

  url += `&min_price=${min_price}&max_price=${max_price}`;
  if (!query) {
    url = url.replace("&", "?");
  }
  url += `&page=${currentPage}`;

  return axiosInstance
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getMedias = ({ currentPage }) => {
  return axiosInstance
    .get(`/medias/?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const getAgencyRecommendations = () => {
  return axiosInstance
    .get("/agencies/recommendations")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return { success: false, data: error };
    });
};

export const addMedias = () => {};
export const updateMedias = ({ mediaId }) => {};
