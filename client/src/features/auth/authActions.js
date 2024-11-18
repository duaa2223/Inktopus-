//authActins
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const loginApi = async (username, password) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  const response = await axios.post(`${API_URL}/login`, { username, password }, config);
  return response.data;
};


export const registerApi = async (userData) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  const response = await axios.post(`${API_URL}/register`, userData, config);
  // تأكد من طباعة البيانات المستلمة للتحقق
  console.log('Register Response:', response.data);
  return response.data;
};

export const verifyOTPApi = async (email, otp) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  const response = await axios.post(`${API_URL}/verify-otp`, { email, otp }, config);
  return response.data;
};

export const logoutApi = async () => {
  const config = { withCredentials: true };
  const response = await axios.post(`${API_URL}/logout`, {}, config);
  return response.data;
};

export const getLoginStatusApi = async () => {
  const config = { withCredentials: true };
  const response = await axios.get(`${API_URL}/status`, config);
  // const response = await axios.get(`${API_URL}/login-status`, config); هذا التغيير
console.log(response.data); // تحقق هنا إذا كانت البيانات تحتوي على 'role'

  return response.data;
};