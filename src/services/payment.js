import { axiosInstance } from "../utils/axiosInstance";
function generateCSRFToken(length) {
  let token = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return token;
}

const csrf_token = generateCSRFToken(32);

export const sendPaymentInfo = (paymentInfo) => {
  console.log(paymentInfo);
  return axiosInstance
    .post("payments/initialize", paymentInfo)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
