import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,   // معلومات المستخدم بعد تسجيل الدخول
  isLoading: false, // حالة التحميل أثناء تقديم الطلب
  error: null,      // لتخزين الأخطاء إن وجدت
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
//////////////////////up without thunk-----------------------------------------------------------------
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { loginAPI, registerAPI, verifyOtpAPI } from './authActions';

// const initialState = {
//   userInfo: null,
//   isLoading: false,
//   error: null,
// };

// // Thunks for async operations
// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await loginAPI(credentials);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.response ? error.response.data.message : error.message);
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
//       return rejectWithValue(error.response ? error.response.data.message : error.message);
//     }
//   }
// );

// export const verifyOTP = createAsyncThunk(
//   'auth/verifyOTP',
//   async (otpData, { rejectWithValue }) => {
//     try {
//       const response = await verifyOtpAPI(otpData);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error.response ? error.response.data.message : error.message);
//     }
//   }
// );

// // Slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.userInfo = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Login
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.userInfo = action.payload;
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // Register
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.userInfo = action.payload;
//         state.error = null;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // Verify OTP
//       .addCase(verifyOTP.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(verifyOTP.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.userInfo = action.payload;
//         state.error = null;
//       })
//       .addCase(verifyOTP.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
