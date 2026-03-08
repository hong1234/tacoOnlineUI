import axios from 'axios';
import { reqOptions } from './reqOptions';

const orderUrl = 'http://localhost:8000/api/v1/order/';

export const getOrder = async (orderId) => {
  const res = await axios.get(`${orderUrl}${orderId}`, reqOptions());
  return res.data;
};
