import axios from "axios";

const cartUrl = "http://localhost:8000/api/v1/cart/";

export const getCart = async (cartId) => {
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

  const res = await axios.get(`${cartUrl}${cartId}`, options);
  return res.data;
};
