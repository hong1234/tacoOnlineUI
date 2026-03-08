import axios from 'axios';
import { reqOptions } from './reqOptions';

const tacoUrl = 'http://localhost:8000/api/v1/taco/';

export const getTaco = async (tacoId) => {
  const res = await axios.get(`${tacoUrl}${tacoId}`, reqOptions());
  return res.data;
};
