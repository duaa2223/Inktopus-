
import { createSlice } from '@reduxjs/toolkit';
import { fetchCart, addToCart, removeFromCart ,updateQuantity, clearCart} from './cartThunck';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        // تحديث هنا للتعامل مع شكل البيانات الجديد
        state.items = action.payload.items || [];
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.message : action.error.message;
      })
      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items || [];
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.message : action.error.message;
      })
      // Remove from Cart
      .addCase(removeFromCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items || [];
        state.error = null;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.message : action.error.message;
      })

      .addCase(updateQuantity.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items || [];
        state.error = null;
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.message : action.error.message;
      })
      // حالات إفراغ السلة
      .addCase(clearCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.isLoading = false;
        state.items = [];
        state.error = null;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.message : action.error.message;
      });

  },
});

export const { clearError } = cartSlice.actions;
export default cartSlice.reducer;