import axios from 'axios';
import { reqOptions } from './reqOptions';

const orderUrl = 'http://localhost:8000/api/v1/cart/checkout';

export async function saveOrder(order) {
  const res = await axios.post(`${orderUrl}`, order, reqOptions());
  return res.data;
}
