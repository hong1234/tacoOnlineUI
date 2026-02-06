import axios from "axios";

const orderUrl = "http://localhost:8000/api/v1/cart/checkout";

export async function saveOrder(order) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    auth: {
      username: "admin",
      password: "admin",
    },
  };

  const res = await axios.post(`${orderUrl}`, order, options);
  return res.data;
}
