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
