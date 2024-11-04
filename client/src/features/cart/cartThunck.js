import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCartApi, addToCartApi, removeFromCartApi,updateQuantityApi,clearCartApi } from '../cart/cartActions';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCartApi();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  // تغيير هنا من bookId إلى contentId
  async ({ contentId, quantity }, { rejectWithValue }) => {
    try {
      const response = await addToCartApi(contentId, quantity);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  // Modified to only accept contentId since quantity isn't needed for removal
  async (contentId, { rejectWithValue }) => {
    try {
      const response = await removeFromCartApi(contentId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const updateQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ contentId, quantity }, { rejectWithValue }) => {
    try {
      const response = await updateQuantityApi(contentId, quantity);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// أضف thunk جديد لإفراغ السلة
export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await clearCartApi();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);