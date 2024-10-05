import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cart';

export const fetchCartApi = async () => {
  const config = { withCredentials: true };
  const response = await axios.get(`${API_URL}`, config);
  return response.data;
};

export const addToCartApi = async (bookId, quantity) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  const response = await axios.post(`${API_URL}/add`, { bookId, quantity }, config);
  return response.data;
};

export const removeFromCartApi = async (bookId) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  const response = await axios.post(`${API_URL}/remove`, { bookId }, config);
  return response.data;
};