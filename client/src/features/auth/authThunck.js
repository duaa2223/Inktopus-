import { createAsyncThunk } from '@reduxjs/toolkit';
import { 
  loginApi, 
  registerApi, 
  verifyOTPApi, 
  logoutApi, 
  getLoginStatusApi 
} from '../auth/authActions';

// دالة تسجيل الدخول
export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const data = await loginApi(username, password);
      return data; // تأكد من أن البيانات تحتوي على { user, role, ... } 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// دالة التسجيل
export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// دالة التحقق من الـ OTP
export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const data = await verifyOTPApi(email, otp);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// دالة تسجيل الخروج
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutApi();
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// // دالة التحقق من حالة تسجيل الدخول
// export const checkLoginStatus = createAsyncThunk(
//   'auth/checkLoginStatus',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await getLoginStatusApi();
//       return data.isLoggedIn;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// للدور وتعمل 
// export const checkLoginStatus = createAsyncThunk(
//   'auth/checkLoginStatus',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await getLoginStatusApi();
//       const role = localStorage.getItem('role');
//       console.log('Fetched role:', role); // للتأكد من أن الدور يتم استرجاعه بشكل صحيح
//       return { isLoggedIn: data.isLoggedIn, role };
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );
//دمج
export const checkLoginStatus = createAsyncThunk(
  'auth/checkLoginStatus',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getLoginStatusApi();
      const role = localStorage.getItem('role');
      return { isLoggedIn: data.isLoggedIn, role: data.isLoggedIn ? role : null };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);