//authSlice
import { createSlice } from '@reduxjs/toolkit';
import { login, register, verifyOTP, logout, checkLoginStatus } from './authThunck';

const initialState = {
  role: localStorage.getItem('role') || null, // قراءة الدور من localStorage عند التهيئة
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
    setRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem('role', action.payload);
    }
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
      //هنا تم التعديل الاخير
      // .addCase(register.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
      //   state.isLoggedIn = true;
      //   state.error = null;
      // })

      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        if (action.payload.role) {
          state.role = action.payload.role;
          localStorage.setItem('role', action.payload.role); // تخزين الدور في localStorage
        }
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