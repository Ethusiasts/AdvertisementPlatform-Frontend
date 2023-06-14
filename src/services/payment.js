import axios from "axios";

export const sendPaymentInfo = (paymentInfo) => {
  console.log(paymentInfo);
  return axios
    .post("https://api.chapa.co/v1/transaction/initialize", paymentInfo)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
