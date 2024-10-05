import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCartApi, addToCartApi, removeFromCartApi } from '../cart/cartActions';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCartApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ bookId, quantity }, { rejectWithValue }) => {
    try {
      const data = await addToCartApi(bookId, quantity);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (bookId, { rejectWithValue }) => {
    try {
      const data = await removeFromCartApi(bookId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);