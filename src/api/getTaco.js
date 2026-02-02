import axios from "axios";

const tacoUrl = "http://localhost:8000/api/v1/taco/";

export const getTaco = async (tacoId) => {
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

  const res = await axios.get(`${tacoUrl}${tacoId}`, options);
  return res.data;
};
