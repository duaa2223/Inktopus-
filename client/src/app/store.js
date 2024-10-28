// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/auth/authSlice';
// import cartReducer from '../features/cart/cartSlice'; // المسار إلى cartReducer

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,  // إدارة حالة المصادقة
//     cart: cartReducer
//   },
// });

// export default store;



//up it work 

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice'; // إذا كان لديك

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, // إذا كان لديك
  },
});

export default store;




// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

// export default store;