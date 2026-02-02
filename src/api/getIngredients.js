import axios from "axios";

const ingredientUrl = "http://localhost:8000/api/v1/ingredient/category";

export const getIngredients = async () => {
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

  //   const res = await axios.get(`${cartUrl}${customerId}`, options);
  const res = await axios.get(`${ingredientUrl}`, options);
  return res.data;
};
