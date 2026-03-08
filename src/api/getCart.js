import axios from 'axios';
import { reqOptions } from './reqOptions';

const cartUrl = 'http://localhost:8000/api/v1/cart/';

export const getCart = async (cartId) => {
  const res = await axios.get(`${cartUrl}${cartId}`, reqOptions());
  return res.data;
};
