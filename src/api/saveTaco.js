import axios from "axios";

const tacoUrl = "http://localhost:8000/api/v1/cart/addtaco";

export async function saveTaco(taco) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    auth: {
      username: "admin",
      password: "admin",
    },
  };

  const res = await axios.post(`${tacoUrl}`, taco, options);
  return res.data;
}
