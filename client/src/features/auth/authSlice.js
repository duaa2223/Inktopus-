// import { createSlice } from '@reduxjs/toolkit';// work without thunic

// const initialState = {
//   userInfo: null,   // معلومات المستخدم بعد تسجيل الدخول
//   isLoading: false, // حالة التحميل أثناء تقديم الطلب
//   error: null,      // لتخزين الأخطاء إن وجدت
// };


// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginRequest: (state) => {
//       state.isLoading = true;
//     },
//     loginSuccess: (state, action) => {
//       state.isLoading = false;
//       state.userInfo = action.payload;
//     },
//     loginFailure: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     logout: (state) => {
//       state.userInfo = null;
//     },
//   },
// });

// export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

// export default authSlice.reducer;



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
/////////////////////////////////////////////////////////////////////////////////work with thunic
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   userInfo: null,
//   isLoading: false,
//   error: null,
//   isLoggedIn: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     setUserInfo: (state, action) => {
//       state.userInfo = action.payload;
//       state.isLoggedIn = !!action.payload;
//     },
//     logout: (state) => {
//       state.userInfo = null;
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { setLoading, setError, setUserInfo, logout } = authSlice.actions;

// export default authSlice.reducer;
//////////////////////////////////////////////////////////////
// import { createSlice } from '@reduxjs/toolkit';
// import { login, register, verifyOTP, logout, checkLoginStatus } from './authThunck';

// const initialState = {
//   user: null,
//   token: null,
//   isLoading: false,
//   error: null,
//   isLoggedIn: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     clearError: (state) => {
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
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       // Register
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.error = null;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       // Verify OTP
//       .addCase(verifyOTP.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(verifyOTP.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.error = null;
//       })
//       .addCase(verifyOTP.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })
//       // Logout
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null;
//         state.token = null;
//         state.isLoggedIn = false;
//         state.error = null;
//       })
//       // Check Login Status
//       .addCase(checkLoginStatus.fulfilled, (state, action) => {
//         state.isLoggedIn = action.payload;
//         if (!action.payload) {
//           state.user = null;
//           state.token = null;
//         }
//       });
//   },
// });

// export const { clearError } = authSlice.actions;
// export default authSlice.reducer;
////////////////////////////////////////////////////////////////// مغير والتغيير اضافة الادوار 
import { createSlice } from '@reduxjs/toolkit';
import { login, register, verifyOTP, logout, checkLoginStatus } from './authThunck';

const initialState = {
  role: null,
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.role = action.payload.role; // تخزين الدور
        localStorage.setItem('role', action.payload.role); // تخزين الدور في localStorage
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Verify OTP
      .addCase(verifyOTP.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.role = null;
        state.isLoggedIn = false;
        state.error = null;
        localStorage.removeItem('role');
      })
      // Check Login Status
      // .addCase(checkLoginStatus.fulfilled, (state, action) => {
      //   state.isLoggedIn = action.payload;
      //   state.role = action.payload.role; // تحديث الدور
      //   if (!action.payload) {
      //     state.user = null;
      //     state.token = null;
      //     state.role = null;
      //     localStorage.removeItem('role');
      //   }
      // });
      .addCase(checkLoginStatus.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
            //  state.role = action.payload.role; // تحديث الدور
        if (action.payload.isLoggedIn) {
          state.role = action.payload.role;
        } else {
          state.user = null;
          state.token = null;
          state.role = null;
          localStorage.removeItem('role');
        }
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;