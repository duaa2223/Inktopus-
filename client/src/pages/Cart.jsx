// 
//////////////////////////////////////////////////////

// import { Link } from 'react-router-dom';
// import { useCart } from '../context/cartContext.jsx';
// import { motion } from 'framer-motion';
// import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';

// const CartPage = () => {
//   const { state, dispatch } = useCart();

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: id });
//   };

//   const updateQuantity = (id, quantity) => {
//     if (quantity > 0) {
//       dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
//     } else {
//       removeFromCart(id);
//     }
//   };

//   const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-[#F8EDE3] py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//         {state.items.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-xl text-[#8D493A] mb-4">Your cart is empty</p>
//             <Link to="/books" className="inline-block bg-[#8D493A] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300">
//               Continue Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <ul className="divide-y divide-[#DFD3C3]">
//             {state.items.map((item) => (
//     <motion.li
//         key={item._id} // use item._id instead of item.id
//         className="flex items-center py-6 px-4 sm:px-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//     >
//         <img src={item.cover_image} alt={item.title} className="h-20 w-16 object-cover rounded" />
//         <div className="ml-4 flex-1">
//             <h3 className="text-lg font-medium text-[#8D493A]">{item.title}</h3>
//             <p className="mt-1 text-sm text-[#D0B8A8]">${item.price.toFixed(2)}</p>
//         </div>
//         <div className="flex items-center">
//             <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="text-[#8D493A]">
//                 <MinusCircle size={20} />
//             </button>
//             <span className="mx-2 font-medium">{item.quantity}</span>
//             <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="text-[#8D493A]">
//                 <PlusCircle size={20} />
//             </button>
//         </div>
//         <button onClick={() => removeFromCart(item._id)} className="ml-4 text-[#8D493A] hover:text-[#D0B8A8]">
//             <Trash2 size={20} />
//         </button>
//     </motion.li>
// ))}

//             </ul>
//             <div className="bg-[#DFD3C3] px-4 py-6 sm:px-6">
//               <div className="flex justify-between text-lg font-medium text-[#8D493A]">
//                 <p>Subtotal</p>
//                 <p>${totalPrice.toFixed(2)}</p>
//               </div>
//               <p className="mt-1 text-sm text-[#8D493A]">Shipping and taxes calculated at checkout.</p>
//               <div className="mt-6">
//                 <Link
//                   to="/checkout"
//                   className="block w-full bg-[#8D493A] text-white px-6 py-3 rounded-md text-center font-medium hover:bg-opacity-90 transition duration-300"
//                 >
//                   Proceed to Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;
///////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
// import { fetchCart, addToCart, removeFromCart } from '../features/cart/cartThunck';
// // import { clearError } from '../features/cart/cartSlice';

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { items, isLoading, error } = useSelector((state) => state.cart);

//   // جلب السلة عند تحميل الصفحة
//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [dispatch]);

//   // دالة لحذف عنصر من السلة
//   const handleRemoveFromCart = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   // دالة لتحديث الكمية
//   const handleUpdateQuantity = (id, quantity) => {
//     if (quantity > 0) {
//       dispatch(addToCart({ bookId: id, quantity }));
//     } else {
//       handleRemoveFromCart(id);
//     }
//   };

//   // حساب السعر الإجمالي
//   const totalPrice = items.reduce((total, item) => total + item.book.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-[#F8EDE3] py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : items.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-xl text-[#8D493A] mb-4">Your cart is empty</p>
//             <Link to="/books" className="inline-block bg-[#8D493A] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300">
//               Continue Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <ul className="divide-y divide-[#DFD3C3]">
//               {items.map((item) => (
//                 <motion.li
//                   key={item.book._id}
//                   className="flex items-center py-6 px-4 sm:px-6"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                 >
//                   <img src={item.book.cover_image} alt={item.book.title} className="h-20 w-16 object-cover rounded" />
//                   <div className="ml-4 flex-1">
//                     <h3 className="text-lg font-medium text-[#8D493A]">{item.book.title}</h3>
//                     <p className="mt-1 text-sm text-[#D0B8A8]">${item.book.price.toFixed(2)}</p>
//                   </div>
//                   <div className="flex items-center">
//                     <button onClick={() => handleUpdateQuantity(item.book._id, item.quantity - 1)} className="text-[#8D493A]">
//                       <MinusCircle size={20} />
//                     </button>
//                     <span className="mx-2 font-medium">{item.quantity}</span>
//                     <button onClick={() => handleUpdateQuantity(item.book._id, item.quantity + 1)} className="text-[#8D493A]">
//                       <PlusCircle size={20} />
//                     </button>
//                   </div>
//                   <button onClick={() => handleRemoveFromCart(item.book._id)} className="ml-4 text-[#8D493A] hover:text-[#D0B8A8]">
//                     <Trash2 size={20} />
//                   </button>
//                 </motion.li>
//               ))}
//             </ul>
//             <div className="bg-[#DFD3C3] px-4 py-6 sm:px-6">
//               <div className="flex justify-between text-lg font-medium text-[#8D493A]">
//                 <p>Subtotal</p>
//                 <p>${totalPrice.toFixed(2)}</p>
//               </div>
//               <p className="mt-1 text-sm text-[#8D493A]">Shipping and taxes calculated at checkout.</p>
//               <div className="mt-6">
//                 <Link
//                   to="/checkout"
//                   className="block w-full bg-[#8D493A] text-white px-6 py-3 rounded-md text-center font-medium hover:bg-opacity-90 transition duration-300"
//                 >
//                   Proceed to Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;
//////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
// import { fetchCart, addToCart, removeFromCart } from '../features/cart/cartThunck';

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { items, isLoading, error } = useSelector((state) => state.cart);

//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [dispatch]);

//   const handleRemoveFromCart = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleUpdateQuantity = (id, quantity) => {
//     if (quantity > 0) {
//       // تحديث من bookId إلى contentId
//       dispatch(addToCart({ contentId: id, quantity }));
//     } else {
//       handleRemoveFromCart(id);
//     }
//   };

//   // تحديث حساب السعر الإجمالي ليستخدم content
//   const totalPrice = items.reduce((total, item) => {
//     if (item.content && item.content.price) {
//       return total + item.content.price * item.quantity;
//     }
//     return total;
//   }, 0);

//   return (
//     <div className="min-h-screen bg-[#F8EDE3] py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : items.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-xl text-[#8D493A] mb-4">Your cart is empty</p>
//             <Link to="/books" className="inline-block bg-[#8D493A] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300">
//               Continue Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <ul className="divide-y divide-[#DFD3C3]">
//               {items.map((item) => (
//                 <motion.li
//                   // تحديث المفتاح ليستخدم content
//                   key={item.content._id}
//                   className="flex items-center py-6 px-4 sm:px-6"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                 >
//                   {/* تحديث المراجع لتستخدم content */}
//                   <img 
//                     src={item.content.cover_image} 
//                     alt={item.content.title} 
//                     className="h-20 w-16 object-cover rounded" 
//                   />
//                   <div className="ml-4 flex-1">
//                     <h3 className="text-lg font-medium text-[#8D493A]">
//                       {item.content.title}
//                     </h3>
//                     <p className="mt-1 text-sm text-[#D0B8A8]">
//                       ${item.content.price ? item.content.price.toFixed(2) : 'N/A'}
//                     </p>
//                   </div>
//                   <div className="flex items-center">
//                     <button 
//                       onClick={() => handleUpdateQuantity(item.content._id, item.quantity - 1)} 
//                       className="text-[#8D493A]"
//                     >
//                       <MinusCircle size={20} />
//                     </button>
//                     <span className="mx-2 font-medium">{item.quantity}</span>
//                     <button 
//                       onClick={() => handleUpdateQuantity(item.content._id, item.quantity + 1)} 
//                       className="text-[#8D493A]"
//                     >
//                       <PlusCircle size={20} />
//                     </button>
//                   </div>
//                   <button 
//                     onClick={() => handleRemoveFromCart(item.content._id)} 
//                     className="ml-4 text-[#8D493A] hover:text-[#D0B8A8]"
//                   >
//                     <Trash2 size={20} />
//                   </button>
//                 </motion.li>
//               ))}
//             </ul>
//             <div className="bg-[#DFD3C3] px-4 py-6 sm:px-6">
//               <div className="flex justify-between text-lg font-medium text-[#8D493A]">
//                 <p>Subtotal</p>
//                 <p>${totalPrice.toFixed(2)}</p>
//               </div>
//               <p className="mt-1 text-sm text-[#8D493A]">
//                 Shipping and taxes calculated at checkout.
//               </p>
//               <div className="mt-6">
//                 <Link
//                   to="/checkout"
//                   className="block w-full bg-[#8D493A] text-white px-6 py-3 rounded-md text-center font-medium hover:bg-opacity-90 transition duration-300"
//                 >
//                   Proceed to Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;






// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
// import { fetchCart, addToCart, removeFromCart } from '../features/cart/cartThunck'; // Fixed typo in import

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { items = [], isLoading, error } = useSelector((state) => state.cart);

//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [dispatch]);

//   const handleRemoveFromCart = (id) => {
//     if (id) {
//       dispatch(removeFromCart(id));
//     }
//   };

//   const handleUpdateQuantity = (id, quantity) => {
//     if (!id) return;
    
//     if (quantity > 0) {
//       dispatch(addToCart({ contentId: id, quantity }));
//     } else {
//       handleRemoveFromCart(id);
//     }
//   };

//   // Safely calculate total price with proper type checking
//   const totalPrice = Array.isArray(items) ? items.reduce((total, item) => {
//     if (item?.content?.price && typeof item.content.price === 'number' && 
//         item?.quantity && typeof item.quantity === 'number') {
//       return total + (item.content.price * item.quantity);
//     }
//     return total;
//   }, 0) : 0;

//   return (
//     <div className="min-h-screen bg-[#F8EDE3] py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : !Array.isArray(items) || items.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-xl text-[#8D493A] mb-4">Your cart is empty</p>
//             <Link 
//               to="/books" 
//               className="inline-block bg-[#8D493A] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
//             >
//               Continue Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <ul className="divide-y divide-[#DFD3C3]">
//               {items.map((item) => (
//                 item?.content?._id ? (
//                   <motion.li
//                     key={item.content._id}
//                     className="flex items-center py-6 px-4 sm:px-6"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                   >
//                     <img 
//                       src={item.content.cover_image} 
//                       alt={item.content.title || 'Product image'} 
//                       className="h-20 w-16 object-cover rounded" 
//                     />
//                     <div className="ml-4 flex-1">
//                       <h3 className="text-lg font-medium text-[#8D493A]">
//                         {item.content.title}
//                       </h3>
//                       <p className="mt-1 text-sm text-[#D0B8A8]">
//                         ${item.content.price ? item.content.price.toFixed(2) : 'N/A'}
//                       </p>
//                     </div>
//                     <div className="flex items-center">
//                       <button 
//                         onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) - 1)} 
//                         className="text-[#8D493A]"
//                         type="button"
//                       >
//                         <MinusCircle size={20} />
//                       </button>
//                       <span className="mx-2 font-medium">{item.quantity || 1}</span>
//                       <button 
//                         onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) + 1)} 
//                         className="text-[#8D493A]"
//                         type="button"
//                       >
//                         <PlusCircle size={20} />
//                       </button>
//                     </div>
//                     <button 
//                       onClick={() => handleRemoveFromCart(item.content._id)} 
//                       className="ml-4 text-[#8D493A] hover:text-[#D0B8A8]"
//                       type="button"
//                     >
//                       <Trash2 size={20} />
//                     </button>
//                   </motion.li>
//                 ) : null
//               ))}
//             </ul>
//             <div className="bg-[#DFD3C3] px-4 py-6 sm:px-6">
//               <div className="flex justify-between text-lg font-medium text-[#8D493A]">
//                 <p>Subtotal</p>
//                 <p>${totalPrice.toFixed(2)}</p>
//               </div>
//               <p className="mt-1 text-sm text-[#8D493A]">
//                 Shipping and taxes calculated at checkout.
//               </p>
//               <div className="mt-6">
//                 <Link
//                   to="/checkout"
//                   className="block w-full bg-[#8D493A] text-white px-6 py-3 rounded-md text-center font-medium hover:bg-opacity-90 transition duration-300"
//                 >
//                   Proceed to Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;
//////////////////////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
// import { fetchCart, addToCart, removeFromCart,updateQuantity,clearCart } from '../features/cart/cartThunck';

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { items = [], isLoading, error } = useSelector((state) => state.cart);

//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log('Cart Items:', items); // للتأكد من البيانات
//   }, [items]);

//   const handleRemoveFromCart = (id) => {
//     if (id) {
//       // Pass the ID directly since we modified the thunk to accept just the contentId
//       dispatch(removeFromCart(id));
//     }
//   };

//   // const handleUpdateQuantity = (id, quantity) => {
//   //   if (!id) return;
    
//   //   if (quantity > 0) {
//   //     dispatch(addToCart({ contentId: id, quantity }));
//   //   } else {
//   //     handleRemoveFromCart(id);
//   //   }
//   // };

  
//   // تحديث دالة handleUpdateQuantity
//   const handleUpdateQuantity = async (id, quantity) => {
//     if (!id) return;
    
//     if (quantity > 0) {
//       await dispatch(updateQuantity({ contentId: id, quantity }));
//     } else {
//       await dispatch(removeFromCart(id));
//     }
//   };

//     // أضف دالة لإفراغ السلة
//     const handleClearCart = () => {
//       dispatch(clearCart());
//     };
  
  

//   const totalPrice = Array.isArray(items) ? items.reduce((total, item) => {
//     if (item?.content?.price && typeof item.content.price === 'number' && 
//         item?.quantity && typeof item.quantity === 'number') {
//       return total + (item.content.price * item.quantity);
//     }
//     return total;
//   }, 0) : 0;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#F8EDE3] py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//           <p>Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-[#F8EDE3] py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//           <p className="text-red-500">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!Array.isArray(items) || items.length === 0) {
//     return (
//       <div className="min-h-screen bg-[#F8EDE3] py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//           <div className="text-center py-12">
//             <p className="text-xl text-[#8D493A] mb-4">Your cart is empty</p>
//             <Link 
//               to="/books" 
//               className="inline-block bg-[#8D493A] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
//             >
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F8EDE3] py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//         <button
//               onClick={handleClearCart}
//               className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
//               type="button"
//             >
//               Clear Cart
//             </button>
//         <div className="bg-white shadow-md rounded-lg overflow-hidden">
//           <ul className="divide-y divide-[#DFD3C3]">
//             {items.map((item) => (
//               item?.content?._id ? (
//                 <motion.li
//                   key={item.content._id}
//                   className="flex items-center py-6 px-4 sm:px-6"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                 >
//                   <img 
//                     src={item.content.cover_image} 
//                     alt={item.content.title || 'Product image'} 
//                     className="h-20 w-16 object-cover rounded" 
//                   />
//                   <div className="ml-4 flex-1">
//                     <h3 className="text-lg font-medium text-[#8D493A]">
//                       {item.content.title}
//                     </h3>
//                     <p className="mt-1 text-sm text-[#D0B8A8]">
//                       ${item.content.price ? item.content.price.toFixed(2) : 'N/A'}
//                     </p>
//                   </div>
//                   <div className="flex items-center">
//                     <button 
//                       onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) - 1)} 
//                       className="text-[#8D493A]"
//                       type="button"
//                     >
//                       <MinusCircle size={20} />
//                     </button>
//                     <span className="mx-2 font-medium">{item.quantity || 1}</span>
//                     <button 
//                       onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) + 1)} 
//                       className="text-[#8D493A]"
//                       type="button"
//                     >
//                       <PlusCircle size={20} />
//                     </button>
//                   </div>
//                   <button 
//                     onClick={() => handleRemoveFromCart(item.content._id)} 
//                     className="ml-4 text-[#8D493A] hover:text-[#D0B8A8]"
//                     type="button"
//                   >
//                     <Trash2 size={20} />
//                   </button>
//                 </motion.li>
//               ) : null
//             ))}
//           </ul>
//           <div className="bg-[#DFD3C3] px-4 py-6 sm:px-6">
//             <div className="flex justify-between text-lg font-medium text-[#8D493A]">
//               <p>Subtotal</p>
//               <p>${totalPrice.toFixed(2)}</p>
//             </div>
//             <p className="mt-1 text-sm text-[#8D493A]">
//               Shipping and taxes calculated at checkout.
//             </p>
//             <div className="mt-6">
//               <Link
//                 to="/checkout"
//                 className="block w-full bg-[#8D493A] text-white px-6 py-3 rounded-md text-center font-medium hover:bg-opacity-90 transition duration-300"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
///////////////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
// import { fetchCart, removeFromCart, updateQuantity, clearCart } from '../features/cart/cartThunck';

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { items = [], isLoading, error } = useSelector((state) => state.cart);

//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [dispatch]);

//   const handleRemoveFromCart = async (id) => {
//     if (id) {
//       await dispatch(removeFromCart(id));
//       // Fetch the cart after removing item to ensure sync with backend
//       dispatch(fetchCart());
//     }
//   };

//   const handleUpdateQuantity = async (id, quantity) => {
//     if (!id) return;
    
//     if (quantity > 0) {
//       await dispatch(updateQuantity({ contentId: id, quantity }));
//       // Fetch the cart after updating quantity to ensure sync with backend
//       dispatch(fetchCart());
//     } else {
//       await handleRemoveFromCart(id);
//     }
//   };

//   const handleClearCart = async () => {
//     await dispatch(clearCart());
//     // Fetch the cart after clearing to ensure sync with backend
//     dispatch(fetchCart());
//   };

//   const totalPrice = Array.isArray(items) ? items.reduce((total, item) => {
//     if (item?.content?.price && typeof item.content.price === 'number' && 
//         item?.quantity && typeof item.quantity === 'number') {
//       return total + (item.content.price * item.quantity);
//     }
//     return total;
//   }, 0) : 0;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#F8EDE3] py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//           <p>Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-[#F8EDE3] py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//           <p className="text-red-500">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!Array.isArray(items) || items.length === 0) {
//     return (
//       <div className="min-h-screen bg-[#F8EDE3] py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//           <div className="text-center py-12">
//             <p className="text-xl text-[#8D493A] mb-4">Your cart is empty</p>
//             <Link 
//               to="/books" 
//               className="inline-block bg-[#8D493A] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
//             >
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F8EDE3] py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-[#8D493A] mb-8">Your Cart</h1>
//         <button
//           onClick={handleClearCart}
//           className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 mb-4"
//           type="button"
//         >
//           Clear Cart
//         </button>
//         <div className="bg-white shadow-md rounded-lg overflow-hidden">
//           <AnimatePresence>
//             <ul className="divide-y divide-[#DFD3C3]">
//               {items.map((item) => (
//                 item?.content?._id ? (
//                   <motion.li
//                     key={item.content._id}
//                     className="flex items-center py-6 px-4 sm:px-6"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     layout
//                   >
//                     <img 
//                       src={item.content.cover_image} 
//                       alt={item.content.title || 'Product image'} 
//                       className="h-20 w-16 object-cover rounded" 
//                     />
//                     <div className="ml-4 flex-1">
//                       <h3 className="text-lg font-medium text-[#8D493A]">
//                         {item.content.title}
//                       </h3>
//                       <p className="mt-1 text-sm text-[#D0B8A8]">
//                         ${item.content.price ? item.content.price.toFixed(2) : 'N/A'}
//                       </p>
//                     </div>
//                     <div className="flex items-center">
//                       <button 
//                         onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) - 1)} 
//                         className="text-[#8D493A]"
//                         type="button"
//                       >
//                         <MinusCircle size={20} />
//                       </button>
//                       <span className="mx-2 font-medium">{item.quantity || 1}</span>
//                       <button 
//                         onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) + 1)} 
//                         className="text-[#8D493A]"
//                         type="button"
//                       >
//                         <PlusCircle size={20} />
//                       </button>
//                     </div>
//                     <button 
//                       onClick={() => handleRemoveFromCart(item.content._id)} 
//                       className="ml-4 text-[#8D493A] hover:text-[#D0B8A8]"
//                       type="button"
//                     >
//                       <Trash2 size={20} />
//                     </button>
//                   </motion.li>
//                 ) : null
//               ))}
//             </ul>
//           </AnimatePresence>
//           <div className="bg-[#DFD3C3] px-4 py-6 sm:px-6">
//             <div className="flex justify-between text-lg font-medium text-[#8D493A]">
//               <p>Subtotal</p>
//               <p>${totalPrice.toFixed(2)}</p>
//             </div>
//             <p className="mt-1 text-sm text-[#8D493A]">
//               Shipping and taxes calculated at checkout.
//             </p>
//             <div className="mt-6">
//               <Link
//                 to="/checkout"
//                 className="block w-full bg-[#8D493A] text-white px-6 py-3 rounded-md text-center font-medium hover:bg-opacity-90 transition duration-300"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Trash2, MinusCircle, PlusCircle, ShoppingBag, ArrowLeft } from 'lucide-react';
// import { fetchCart, removeFromCart, updateQuantity, clearCart } from '../features/cart/cartThunck';
// // import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
// import toast from 'react-hot-toast';

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { items = [], isLoading, error } = useSelector((state) => state.cart);

//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [dispatch]);

//   const handleRemoveFromCart = async (id) => {
//     if (id) {
//       await dispatch(removeFromCart(id));
//       dispatch(fetchCart());
//       toast.success('تم حذف الكتاب من السلة');
//     }
//   };

//   const handleUpdateQuantity = async (id, quantity) => {
//     if (!id) return;
    
//     if (quantity > 0) {
//       await dispatch(updateQuantity({ contentId: id, quantity }));
//       dispatch(fetchCart());
//       toast.success('تم تحديث الكمية');
//     } else {
//       await handleRemoveFromCart(id);
//     }
//   };

//   const handleClearCart = async () => {
//     if (window.confirm('هل أنت متأكد من إفراغ السلة؟')) {
//       await dispatch(clearCart());
//       dispatch(fetchCart());
//       toast.success('تم إفراغ السلة');
//     }
//   };

//   const totalPrice = Array.isArray(items) ? items.reduce((total, item) => {
//     if (item?.content?.price && typeof item.content.price === 'number' && 
//         item?.quantity && typeof item.quantity === 'number') {
//       return total + (item.content.price * item.quantity);
//     }
//     return total;
//   }, 0) : 0;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex items-center justify-center h-64"
//           >
//             <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#8D493A]" />
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Alert variant="destructive">
//             <AlertTitle>خطأ</AlertTitle>
//             <AlertDescription>{error}</AlertDescription>
//           </Alert>
//         </div>
//       </div>
//     );
//   }

//   if (!Array.isArray(items) || items.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-16"
//           >
//             <ShoppingBag className="mx-auto h-24 w-24 text-[#8D493A] mb-6" />
//             <h2 className="text-2xl font-bold text-[#8D493A] mb-4">سلة التسوق فارغة</h2>
//             <p className="text-[#D0B8A8] mb-8">لم تقم بإضافة أي كتب إلى سلة التسوق بعد</p>
//             <Link 
//               to="/books" 
//               className="inline-flex items-center gap-2 bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
//             >
//               <ArrowLeft className="h-5 w-5" />
//               <span>استمر في التسوق</span>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center mb-8">
//           <motion.h1 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-3xl font-bold text-[#8D493A]"
//           >
//             سلة التسوق
//           </motion.h1>
//           {items.length > 0 && (
//             <motion.button
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               onClick={handleClearCart}
//               className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
//               type="button"
//             >
//               <Trash2 size={18} />
//               <span>إفراغ السلة</span>
//             </motion.button>
//           )}
//         </div>

//         <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
//           <AnimatePresence mode="popLayout">
//             <ul className="divide-y divide-[#DFD3C3]">
//               {items.map((item) => (
//                 item?.content?._id ? (
//                   <motion.li
//                     key={item.content._id}
//                     className="flex items-center p-6 hover:bg-[#F8EDE3] transition-colors duration-200"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     layout
//                   >
//                     <div className="relative group">
//                       <img 
//                         src={item.content.cover_image} 
//                         alt={item.content.title || 'Product image'} 
//                         className="h-32 w-24 object-cover rounded-lg shadow-md transform transition duration-300 group-hover:scale-105" 
//                       />
//                       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
//                     </div>
                    
//                     <div className="ml-6 flex-1">
//                       <h3 className="text-xl font-semibold text-[#8D493A] mb-2">
//                         {item.content.title}
//                       </h3>
//                       <p className="text-[#D0B8A8] mb-2">
//                         المؤلف: {item.content.author || 'غير معروف'}
//                       </p>
//                       <p className="text-lg font-bold text-[#8D493A]">
//                         ${item.content.price ? item.content.price.toFixed(2) : 'N/A'}
//                       </p>
//                     </div>

//                     <div className="flex items-center gap-4">
//                       <div className="flex items-center bg-[#F8EDE3] rounded-lg p-2">
//                         <button 
//                           onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) - 1)} 
//                           className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200"
//                           type="button"
//                         >
//                           <MinusCircle size={24} />
//                         </button>
//                         <span className="mx-4 font-semibold text-[#8D493A] min-w-[2ch] text-center">
//                           {item.quantity || 1}
//                         </span>
//                         <button 
//                           onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) + 1)} 
//                           className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200"
//                           type="button"
//                         >
//                           <PlusCircle size={24} />
//                         </button>
//                       </div>

//                       <button 
//                         onClick={() => handleRemoveFromCart(item.content._id)} 
//                         className="text-red-500 hover:text-red-600 transition-colors duration-200"
//                         type="button"
//                       >
//                         <Trash2 size={24} />
//                       </button>
//                     </div>
//                   </motion.li>
//                 ) : null
//               ))}
//             </ul>
//           </AnimatePresence>

//           <motion.div 
//             className="bg-[#F8EDE3] px-6 py-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <div className="max-w-3xl mx-auto">
//               <div className="flex justify-between items-center text-lg font-semibold text-[#8D493A] mb-4">
//                 <p>المجموع الفرعي</p>
//                 <p className="text-2xl">${totalPrice.toFixed(2)}</p>
//               </div>
//               <p className="text-sm text-[#8D493A] mb-6">
//                 سيتم احتساب الشحن والضرائب عند الدفع
//               </p>
//               <Link
//                 to="/checkout"
//                 className="block w-full bg-[#8D493A] text-white px-6 py-4 rounded-lg text-center font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
//               >
//                 متابعة عملية الشراء
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
////////////////////////////////////////////////////////////////////
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, MinusCircle, PlusCircle, ShoppingBag, ArrowLeft } from 'lucide-react';
import { fetchCart, removeFromCart, updateQuantity, clearCart } from '../features/cart/cartThunck';
// import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import toast from 'react-hot-toast';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items = [], isLoading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemoveFromCart = async (id) => {
    if (id) {
      await dispatch(removeFromCart(id));
      dispatch(fetchCart());
      toast.success('Book removed from cart');
    }
  };

  const handleUpdateQuantity = async (id, quantity) => {
    if (!id) return;
    
    if (quantity > 0) {
      await dispatch(updateQuantity({ contentId: id, quantity }));
      dispatch(fetchCart());
      toast.success('Quantity updated');
    } else {
      await handleRemoveFromCart(id);
    }
  };

  const handleClearCart = async () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      await dispatch(clearCart());
      dispatch(fetchCart());
      toast.success('Cart cleared');
    }
  };

  const totalPrice = Array.isArray(items) ? items.reduce((total, item) => {
    if (item?.content?.price && typeof item.content.price === 'number' && 
        item?.quantity && typeof item.quantity === 'number') {
      return total + (item.content.price * item.quantity);
    }
    return total;
  }, 0) : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-64"
          >
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#8D493A]" />
          </motion.div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <ShoppingBag className="mx-auto h-24 w-24 text-[#8D493A] mb-6" />
            <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Your Shopping Cart is Empty</h2>
            <p className="text-[#D0B8A8] mb-8">You have not added any books to the shopping cart yet.</p>
            <Link 
              to="/books" 
              className="inline-flex items-center gap-2 bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Continue Shopping</span>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[10rem]">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-[#8D493A]"
          >
            Shopping Cart
          </motion.h1>
          {items.length > 0 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleClearCart}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
              type="button"
            >
              <Trash2 size={18} />
              <span>Clear Cart</span>
            </motion.button>
          )}
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <AnimatePresence mode="popLayout">
            <ul className="divide-y divide-[#DFD3C3]">
              {items.map((item) => (
                item?.content?._id ? (
                  <motion.li
                    key={item.content._id}
                    className="flex items-center p-6 hover:bg-[#F8EDE3] transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    layout
                  >
                    <div className="relative group">
                      <img 
                        src={item.content.cover_image} 
                        alt={item.content.title || 'Product image'} 
                        className="h-32 w-24 object-cover rounded-lg shadow-md transform transition duration-300 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
                    </div>
                    
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-[#8D493A] mb-2">
                        {item.content.title}
                      </h3>
                      <p className="text-[#D0B8A8] mb-2">
                        Author: {item.content.author || 'Unknown'}
                      </p>
                      <p className="text-lg font-bold text-[#8D493A]">
                        ${item.content.price ? item.content.price.toFixed(2) : 'N/A'}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-[#F8EDE3] rounded-lg p-2">
                        <button 
                          onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) - 1)} 
                          className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200"
                          type="button"
                        >
                          <MinusCircle size={24} />
                        </button>
                        <span className="mx-4 font-semibold text-[#8D493A] min-w-[2ch] text-center">
                          {item.quantity || 1}
                        </span>
                        <button 
                          onClick={() => handleUpdateQuantity(item.content._id, (item.quantity || 1) + 1)} 
                          className="text-[#8D493A] hover:text-[#D0B8A8] transition-colors duration-200"
                          type="button"
                        >
                          <PlusCircle size={24} />
                        </button>
                      </div>

                      <button 
                        onClick={() => handleRemoveFromCart(item.content._id)} 
                        className="text-red-500 hover:text-red-600 transition-colors duration-200"
                        type="button"
                      >
                        <Trash2 size={24} />
                      </button>
                    </div>
                  </motion.li>
                ) : null
              ))} 
            </ul>
          </AnimatePresence>

          <motion.div 
            className="bg-[#F8EDE3] px-6 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center text-lg font-semibold text-[#8D493A]">
                <span>Total Price:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
          </motion.div>
          <div className="mt-6 flex justify-end">
  <Link
    to="/checkout"
    className="bg-[#8D493A] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
  >
    <span>Proceed to Checkout</span>
    
  </Link>
</div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
