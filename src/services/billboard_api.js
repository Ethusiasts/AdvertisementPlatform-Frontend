import axiosInstance from "../utils/axiosInstance";
export const getBillboardDetail = ({ billboardId }) => {
  return axiosInstance
    .get(`/billboards/${billboardId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
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
      console.error(error);
      return error;
    });
};

export const searchBillboardsWithQueryOnly = ({ query, currentPage }) => {
  return axiosInstance
    .get(`/billboards/search?q=${query}&page=${currentPage}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

export const searchBillboards = ({
  currentPage,
  query,
  location,
  type,
  size,
  min_price,
  max_price,
}) => {
  let url = `/billboards/search`;
  if (query) {
    url += `?q=${query}`;
  }
  if (location) {
    url += `&location=${location}`;
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
  console.log(url);

  return axiosInstance
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return error;
    });
};

//