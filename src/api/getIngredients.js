import axios from 'axios';
import { reqOptions } from './reqOptions';

const ingredientUrl = 'http://localhost:8000/api/v1/ingredient/category';

export const getIngredients = async () => {
  const res = await axios.get(`${ingredientUrl}`, reqOptions());
  return res.data;
};
