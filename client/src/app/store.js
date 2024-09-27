import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,  // إدارة حالة المصادقة
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