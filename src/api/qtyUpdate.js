import axios from 'axios';
import { reqOptions } from './reqOptions';

const qtyUrl = 'http://localhost:8000/api/v1/cart/qty';

export async function qtyUpdate(dto) {
  const res = await axios.put(`${qtyUrl}`, dto, reqOptions());
  return res.data;
}
