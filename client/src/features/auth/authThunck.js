// // authActions.js
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { loginAPI, registerAPI, verifyOTPAPI } from '../auth/authActions';
// import { authRequest, authSuccess, authFailure, verifyOTPSuccess} from './authSlice';

// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, { dispatch }) => {
//     try {
//       dispatch(authRequest());
//       const data = await loginAPI(credentials);
//       dispatch(authSuccess(data));
//       return data;
//     } catch (error) {
//       dispatch(authFailure(error));
//       throw error;
//     }
//   }
// );

// export const register = createAsyncThunk(
//   'auth/register',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await registerAPI(userData);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const verifyOTP = createAsyncThunk(
//   'auth/verifyOTPAPI',
//   async (otpData, { rejectWithValue }) => {
//     try {
//       const response = await verifyOTPAPI(otpData);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );




// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Define the async thunk for registration
// export const register = createAsyncThunk(
//   'auth/register', // Action type prefix
//   async ({ username, email, password }, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true, // To send cookies
//       };

//       // Make API request
//       const { data } = await axios.post(
//         'http://localhost:5000/api/users/register',
//         { username, email, password },
//         config
//       );

//       return data; // This will be returned as the fulfilled action payload
//     } catch (error) {
//       // Return a rejected value in case of an error
//       return rejectWithValue(
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message
//       );
//     }
//   }
// );
//////////////////////////////////////////////////////////////work with thunic
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setLoading, setError, setUserInfo } from './authSlice';
// import { loginApi, registerApi, verifyOTPApi, logoutApi, getLoginStatusApi } from '../auth/authActions';

// export const login = createAsyncThunk(
//   'auth/login',
//   async ({ username, password }, { dispatch }) => {
//     try {
//       dispatch(setLoading(true));
//       const data = await loginApi(username, password);
//       dispatch(setUserInfo(data));
//       return data;
//     } catch (error) {
//       dispatch(setError(error.response?.data?.message || error.message));
//       throw error;
//     } finally {
//       dispatch(setLoading(false));
//     }
//   }
// );

// export const register = createAsyncThunk(
//   'auth/register',
//   async (userData, { dispatch }) => {
//     try {
//       dispatch(setLoading(true));
//       const data = await registerApi(userData);
//       dispatch(setUserInfo(data));
//       return data;
//     } catch (error) {
//       dispatch(setError(error.response?.data?.message || error.message));
//       throw error;
//     } finally {
//       dispatch(setLoading(false));
//     }
//   }
// );

// export const verifyOTP = createAsyncThunk(
//   'auth/verifyOTP',
//   async ({ email, otp }, { dispatch }) => {
//     try {
//       dispatch(setLoading(true));
//       const data = await verifyOTPApi(email, otp);
//       dispatch(setUserInfo(data));
//       return data;
//     } catch (error) {
//       dispatch(setError(error.response?.data?.message || error.message));
//       throw error;
//     } finally {
//       dispatch(setLoading(false));
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { dispatch }) => {
//     try {
//       await logoutApi();
//       dispatch(setUserInfo(null));
//     } catch (error) {
//       dispatch(setError(error.response?.data?.message || error.message));
//       throw error;
//     }
//   }
// );

// export const checkLoginStatus = createAsyncThunk(
//   'auth/checkLoginStatus',
//   async (_, { dispatch }) => {
//     try {
//       const data = await getLoginStatusApi();
//       dispatch(setUserInfo(data.isLoggedIn ? {} : null));
//       return data.isLoggedIn;
//     } catch (error) {
//       dispatch(setError(error.response?.data?.message || error.message));
//       throw error;
//     }
//   }
// );
///////////////////////////////////////////////////////////////////////////////////////// لم اغير
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { loginApi, registerApi, verifyOTPApi, logoutApi, getLoginStatusApi } from '../auth/authActions';

// export const login = createAsyncThunk(
//   'auth/login',
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       const data = await loginApi(username, password);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// export const register = createAsyncThunk(
//   'auth/register',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const data = await registerApi(userData);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// export const verifyOTP = createAsyncThunk(
//   'auth/verifyOTP',
//   async ({ email, otp }, { rejectWithValue }) => {
//     try {
//       const data = await verifyOTPApi(email, otp);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await logoutApi();
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

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
/////////////////////////////////////////////////////////////////////////////
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