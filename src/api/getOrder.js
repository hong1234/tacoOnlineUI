import axios from "axios";

const orderUrl = "http://localhost:8000/api/v1/order/";

export const getOrder = async (orderId) => {
  const options = {
    headers: {
      // 'Content-Type': 'application/json'
      Accept: "application/json",
    },
    auth: {
      username: "admin",
      password: "admin",
    },
  };

  const res = await axios.get(`${orderUrl}${orderId}`, options);
  return res.data;
};
