

// checkoutSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Update the base URL to match your backend
axios.defaults.baseURL = 'http://localhost:5000'; // Change this to match your backend URL

export const createOrder = createAsyncThunk(
  'checkout/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/payment/orders', orderData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to create order'
      );
    }
  }
);

export const capturePayPalPayment = createAsyncThunk(
  'checkout/capturePayPalPayment',
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/payment/payment/paypal/capture', paymentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to process PayPal payment'
      );
    }
  }
);

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    isLoading: false,
    error: null,
    orderData: null
  },
  reducers: {
    clearCheckoutState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.orderData = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderData = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(capturePayPalPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(capturePayPalPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderData = action.payload;
      })
      .addCase(capturePayPalPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { clearCheckoutState } = checkoutSlice.actions;
export default checkoutSlice.reducer;