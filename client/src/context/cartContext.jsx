// import { createContext, useContext, useReducer, useEffect } from 'react';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
//       if (existingItemIndex !== -1) {
//         const updatedItems = state.items.map((item, index) => 
//           index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         return { ...state, items: updatedItems };
//       }
//       return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
//     case 'REMOVE_FROM_CART':
//       return { ...state, items: state.items.filter(item => item.id !== action.payload) };
//     case 'UPDATE_QUANTITY':
//       return { ...state, items: state.items.map(item => 
//         item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
//       )};
//     case 'CLEAR_CART':
//       return { ...state, items: [] };
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, { items: [] });

//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(state.items));
//   }, [state.items]);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
//////////////////////////////////////////////////////////////////////
// import React, { createContext, useReducer, useEffect } from 'react';

// const CartContext = createContext();

// const initialState = {
//     items: JSON.parse(localStorage.getItem('cartItems')) || [],
// };

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             const existingItem = state.items.find(item => item.id === action.payload.id);
//             if (existingItem) {
//                 return {
//                     ...state,
//                     items: state.items.map(item =>
//                         item.id === existingItem.id
//                             ? { ...item, quantity: item.quantity + 1 }
//                             : item
//                     ),
//                 };
//             } else {
//                 return {
//                     ...state,
//                     items: [...state.items, { ...action.payload, quantity: 1 }],
//                 };
//             }
//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.id !== action.payload),
//             };
//         case 'UPDATE_QUANTITY':
//             return {
//                 ...state,
//                 items: state.items.map(item =>
//                     item.id === action.payload.id
//                         ? { ...item, quantity: action.payload.quantity }
//                         : item
//                 ),
//             };
//         default:
//             return state;
//     }
// };

// export const CartProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(cartReducer, initialState);

//     useEffect(() => {
//         localStorage.setItem('cartItems', JSON.stringify(state.items));
//     }, [state.items]);

//     return (
//         <CartContext.Provider value={{ state, dispatch }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => React.useContext(CartContext);
