import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cart';

export const fetchCartApi = async () => {
  const config = { withCredentials: true };
  const response = await axios.get(`${API_URL}/get`, config);
  console.log('Cart API Response:', response.data);
  return response.data;
};

export const updateQuantityApi = async (contentId, quantity) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  const response = await axios.put(`${API_URL}/update-quantity`, {
    contentId,
    quantity
  }, config);
  return response.data;
};

export const clearCartApi = async () => {
  const config = {
    withCredentials: true,
  };
  const response = await axios.delete(`${API_URL}/clear`, config);
  return response.data;
};


export const addToCartApi = async (contentId, quantity) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  const response = await axios.post(`${API_URL}/add`, { contentId, quantity }, config);
  return response.data;
};


export const removeFromCartApi = async (contentId) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  const response = await axios.delete(`${API_URL}/remove`, {
    data: { contentId },
    ...config
  });
  return response.data;
};