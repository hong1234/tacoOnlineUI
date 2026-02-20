import axios from 'axios';

const qtyUrl = 'http://localhost:8000/api/v1/cart/qty';

export async function qtyUpdate(dto) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    auth: {
      username: 'admin',
      password: 'admin',
    },
  };

  const res = await axios.put(`${qtyUrl}`, dto, options);
  return res.data;
}
