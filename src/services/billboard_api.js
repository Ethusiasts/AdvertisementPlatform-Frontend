import { axiosInstance } from "../utils/axiosInstance";

export const getBillboardDetail = ({ billboardId }) => {
  return axiosInstance
    .get(`/billboards/${billboardId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const deleteBillboard = ({ billboardId }) => {
  return axiosInstance
    .delete(`/billboards/${billboardId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getBillboards = ({ currentPage }) => {
  return axiosInstance
    .get(`/billboards/?page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const createBillboard = (billboard) => {
  return axiosInstance
    .post(`/billboards/`, billboard)
    .then((res) => {
      return { success: true, data: res.data };
    })
    .catch((error) => {
      return { success: false, data: error };
    });
};

export const searchBillboardsWithQueryOnly = ({ query, currentPage }) => {
  return axiosInstance
    .get(`/billboards/search?q=${query}&page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const searchBillboards = ({
  currentPage,
  query,
  latitude,
  longitude,
  type,
  size,
  min_price,
  max_price,
  searchDistanceValue,
}) => {
  let url = `/billboards/search`;
  if (query) {
    url += `?q=${query}`;
  }
  if (searchDistanceValue) {
    url += `&radius=${searchDistanceValue}`;
  }
  if (latitude) {
    url += `&latitude=${latitude}`;
  }
  if (longitude) {
    url += `&longitude=${longitude}`;
  }
  if (type) {
    if (type === "Production") {
      url += "&has_production=true";
    } else {
      url += "&has_production=false";
    }
  }
  if (size) {
    url += `&size=${size}`;
  }
  url += `&min_price=${min_price}&max_price=${max_price}`;
  if (!query) {
    url = url.replace("&", "?");
  }
  url += `&page=${currentPage}`;

  return axiosInstance
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

export const addBillboard = () => {};
export const updateBillboard = ({ billboardId }) => {};
export const addReview = (reviewData) => {
  return axiosInstance
    .post(`/ratings/`, reviewData)
    .then((res) => {
      return { success: true, data: res.data };
    })
    .catch((error) => {
      return { success: false, data: error };
    });
};

export const getReviews = ({ mediaId, type }) => {
  return axiosInstance
    .get(`/${type}/${mediaId}/ratings/`)
    .then((res) => {
      return { success: true, data: res.data };
    })
    .catch((error) => {
      return { success: false, data: error };
    });
};
