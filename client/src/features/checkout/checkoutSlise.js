// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const createOrder = createAsyncThunk(
//   'checkout/createOrder',
//   async ({ shippingInfo, paymentMethod }, { getState }) => {
//     const { items, totalPrice } = getState().cart;
//     const response = await axios.post('/api/checkout/create-order', {
//       shippingInfo,
//       paymentMethod,
//       items,
//       totalPrice,
//     });
//     return response.data;
//   }
// );

// export const capturePayPalPayment = createAsyncThunk(
//   'checkout/capturePayPalPayment',
//   async ({ orderId, paymentId, payerId }, { getState }) => {
//     const response = await axios.post('/api/checkout/capture-paypal-payment', {
//       orderId,
//       paymentId,
//       payerId,
//     });
//     return response.data;
//   }
// );

// const checkoutSlice = createSlice({
//   name: 'checkout',
//   initialState: {
//     order: null,
//     paypalOrderId: null,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createOrder.fulfilled, (state, action) => {
//         state.order = action.payload.order;
//         state.paypalOrderId = action.payload.paypalOrderId;
//       })
//       .addCase(createOrder.rejected, (state, action) => {
//         state.error = action.error.message;
//       })
//       .addCase(capturePayPalPayment.fulfilled, (state, action) => {
//         state.order = action.payload;
//       })
//       .addCase(capturePayPalPayment.rejected, (state, action) => {
//         state.error = action.error.message;
//       });
//   },
// });

// export default checkoutSlice.reducer;


// checkoutSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk for creating order
// export const createOrder = createAsyncThunk(
//   'checkout/createOrder',
//   async ({ shippingInfo, paymentMethod, items, totalPrice }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/api/orders', {
//         shippingAddress: {
//           address: shippingInfo.address,
//           city: shippingInfo.city,
//           postalCode: shippingInfo.zip,
//           country: shippingInfo.country
//         },
//         paymentMethod,
//         items: items.map(item => ({
//           content: item.content._id,
//           quantity: item.quantity,
//           price: item.content.price
//         })),
//         total: totalPrice
//       });
      
//       // Clear cart after successful order
//       await axios.delete('/api/cart');
      
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Async thunk for PayPal payment
// export const capturePayPalPayment = createAsyncThunk(
//   'checkout/capturePayPalPayment',
//   async (paymentDetails, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/api/payment/paypal/capture', paymentDetails);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const checkoutSlice = createSlice({
//   name: 'checkout',
//   initialState: {
//     isLoading: false,
//     error: null,
//     orderData: null
//   },
//   reducers: {
//     clearCheckoutState: (state) => {
//       state.isLoading = false;
//       state.error = null;
//       state.orderData = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createOrder.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(createOrder.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.orderData = action.payload;
//       })
//       .addCase(createOrder.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(capturePayPalPayment.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(capturePayPalPayment.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.orderData = action.payload;
//       })
//       .addCase(capturePayPalPayment.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   }
// });

// export const { clearCheckoutState } = checkoutSlice.actions;
// export default checkoutSlice.reducer;


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