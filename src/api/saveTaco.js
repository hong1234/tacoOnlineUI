import axios from 'axios';
import { reqOptions } from './reqOptions';

const tacoUrl = 'http://localhost:8000/api/v1/cart/addtaco';

export async function saveTaco(taco) {
  const res = await axios.post(`${tacoUrl}`, taco, reqOptions());
  return res.data;
}
