// import  { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CreditCard } from 'lucide-react';

// const CheckoutPage = () => {
//   const [activeStep, setActiveStep] = useState('shipping');
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [shippingInfo, setShippingInfo] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: ''
//   });

//   const handleShippingSubmit = (e) => {
//     e.preventDefault();
//     setActiveStep('payment');
//   };

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();
//     // Handle payment processing here
//     console.log('Processing payment...');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[6rem]">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden"
//         >
//           {/* Header */}
//           <div className="bg-[#8D493A] text-white p-6">
//             <h1 className="text-2xl font-bold text-center">Eco-Friendly Checkout</h1>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex justify-center items-center p-6 bg-[#F8EDE3]">
//             <div className="flex items-center space-x-4">
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'shipping' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>1</div>
//               <span className={activeStep === 'shipping' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Shipping
//               </span>
//               <div className="w-16 h-0.5 bg-[#DFD3C3]" />
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'payment' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>2</div>
//               <span className={activeStep === 'payment' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Payment
//               </span>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="p-6">
//             <AnimatePresence mode="wait">
//               {activeStep === 'shipping' ? (
//                 <motion.form
//                   key="shipping"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   onSubmit={handleShippingSubmit}
//                   className="space-y-6"
//                 >
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                         Street Address
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                         value={shippingInfo.street}
//                         onChange={(e) => setShippingInfo({...shippingInfo, street: e.target.value})}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                         City
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                         value={shippingInfo.city}
//                         onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                         State/Province
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                         value={shippingInfo.state}
//                         onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                         Country
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                         value={shippingInfo.country}
//                         onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
//                       />
//                     </div>
//                     <div className="md:col-span-2">
//                       <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                         Zip/Postal Code
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                         value={shippingInfo.zipCode}
//                         onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex justify-end">
//                     <button
//                       type="submit"
//                       className="bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
//                     >
//                       Continue to Payment
//                     </button>
//                   </div>
//                 </motion.form>
//               ) : (
//                 <motion.form
//                   key="payment"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   onSubmit={handlePaymentSubmit}
//                   className="space-y-6"
//                 >
//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-4">
//                       <input
//                         type="radio"
//                         id="credit"
//                         name="payment"
//                         value="credit"
//                         checked={paymentMethod === 'credit'}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         className="w-4 h-4 text-[#8D493A] border-[#DFD3C3] focus:ring-[#8D493A]"
//                       />
//                       <label htmlFor="credit" className="flex items-center space-x-2">
//                         <CreditCard className="text-[#8D493A]" />
//                         <span className="text-[#8D493A] font-medium">Credit Card</span>
//                       </label>
//                     </div>
                    
//                     <div className="flex items-center space-x-4">
//                       <input
//                         type="radio"
//                         id="paypal"
//                         name="payment"
//                         value="paypal"
//                         checked={paymentMethod === 'paypal'}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         className="w-4 h-4 text-[#8D493A] border-[#DFD3C3] focus:ring-[#8D493A]"
//                       />
//                       <label htmlFor="paypal" className="flex items-center space-x-2">
//                         <span className="text-[#8D493A] font-medium">PayPal</span>
//                       </label>
//                     </div>
//                   </div>

//                   <AnimatePresence mode="wait">
//                     {paymentMethod === 'credit' && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="space-y-4"
//                       >
//                         <div>
//                           <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                             Card Number
//                           </label>
//                           <input
//                             type="text"
//                             required
//                             className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                               Expiry Date
//                             </label>
//                             <input
//                               type="text"
//                               required
//                               placeholder="MM/YY"
//                               className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                               CVC
//                             </label>
//                             <input
//                               type="text"
//                               required
//                               className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                             />
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}

//                     {paymentMethod === 'paypal' && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="bg-[#F8EDE3] p-6 rounded-lg"
//                       >
//                         <p className="text-[#8D493A]">
//                           You will be redirected to PayPal to complete your payment securely.
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   <div className="flex justify-between">
//                     <button
//                       type="button"
//                       onClick={() => setActiveStep('shipping')}
//                       className="text-[#8D493A] hover:text-opacity-80 transition duration-300"
//                     >
//                       Back to Shipping
//                     </button>
//                     <button
//                       type="submit"
//                       className="bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
//                     >
//                       Complete Purchase
//                     </button>
//                   </div>
//                 </motion.form>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
/////////////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CreditCard, CheckCircle } from 'lucide-react';
// import axios from 'axios';



// import { loadStripe } from '@stripe/stripe-js';
// import { PayPalButtons } from '@paypal/react-paypal-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// // Initialize Stripe
// // const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// const CheckoutPage = ({ cartItems = [], onSuccess }) => {
//   const [activeStep, setActiveStep] = useState('shipping');
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [orderData, setOrderData] = useState(null);
//   const stripe = useStripe();
//   const elements = useElements();

//   const [shippingInfo, setShippingInfo] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//     email: '',
//     phone: ''
//   });

//   // Calculate total
//   const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   // Format shipping address for API
//   const formatShippingAddress = () => ({
//     address: shippingInfo.street,
//     city: shippingInfo.city,
//     state: shippingInfo.state,
//     country: shippingInfo.country,
//     postalCode: shippingInfo.zipCode,
//     email: shippingInfo.email,
//     phone: shippingInfo.phone
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingInfo(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Validate shipping form
//   const validateShippingForm = () => {
//     const required = ['street', 'city', 'state', 'country', 'zipCode', 'email', 'phone'];
//     return required.every(field => shippingInfo[field].trim() !== '');
//   };

//   // Handle shipping form submission
//   const handleShippingSubmit = (e) => {
//     e.preventDefault();
//     if (validateShippingForm()) {
//       setActiveStep('payment');
//     } else {
//       setError('Please fill in all required fields');
//     }
//   };

//   // Handle Stripe payment
//   const handleStripePayment = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: elements.getElement(CardElement),
//         billing_details: {
//           address: {
//             city: shippingInfo.city,
//             country: shippingInfo.country,
//             line1: shippingInfo.street,
//             postal_code: shippingInfo.zipCode,
//             state: shippingInfo.state
//           },
//           email: shippingInfo.email,
//           phone: shippingInfo.phone
//         }
//       });

//       if (error) {
//         throw new Error(error.message);
//       }

//       // Process payment with backend
//       const response = await axios.post('/api/payment/stripe/process', {
//         token: paymentMethod,
//         order: {
//           items: cartItems,
//           shippingAddress: formatShippingAddress()
//         }
//       });

//       if (response.data.success) {
//         setSuccess(true);
//         setOrderData(response.data.order);
//         if (onSuccess) onSuccess(response.data.order);
//       }
//     } catch (err) {
//       setError(err.message || 'Payment failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle PayPal payment
//   const createPayPalOrder = async () => {
//     try {
//       const response = await axios.post('/api/payment/paypal/create', {
//         order: {
//           items: cartItems,
//           shippingAddress: formatShippingAddress()
//         }
//       });

//       return response.data.orderID;
//     } catch (err) {
//       setError(err.message || 'Failed to create PayPal order');
//       throw err;
//     }
//   };

//   const onPayPalApprove = async (data) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/payment/paypal/capture', {
//         orderID: data.orderID
//       });

//       if (response.data.success) {
//         setSuccess(true);
//         setOrderData(response.data);
//         if (onSuccess) onSuccess(response.data);
//       }
//     } catch (err) {
//       setError(err.message || 'Failed to capture PayPal payment');
//     } finally {
//       setLoading(false);
//     }
//   };  // Continuing from the previous code...

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[6rem]">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden"
//         >
//           {/* Header */}
//           <div className="bg-[#8D493A] text-white p-6">
//             <h1 className="text-2xl font-bold text-center">Checkout</h1>
//             {/* Order Summary */}
//             <div className="mt-4 text-sm">
//               <p className="text-white/80">Total Items: {cartItems.length}</p>
//               <p className="font-semibold">Total: ${total.toFixed(2)}</p>
//             </div>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex justify-center items-center p-6 bg-[#F8EDE3]">
//             <div className="flex items-center space-x-4">
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'shipping' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>1</div>
//               <span className={activeStep === 'shipping' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Shipping
//               </span>
//               <div className="w-16 h-0.5 bg-[#DFD3C3]" />
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'payment' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>2</div>
//               <span className={activeStep === 'payment' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Payment
//               </span>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="p-6">
//             {success ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center space-y-4"
//               >
//                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
//                 <h2 className="text-2xl font-bold text-[#8D493A]">Order Successful!</h2>
//                 <p className="text-gray-600">Thank you for your purchase.</p>
//                 {orderData && (
//                   <div className="mt-4 text-left bg-[#F8EDE3] p-4 rounded-lg">
//                     <h3 className="font-semibold">Order Details:</h3>
//                     <p>Order ID: {orderData.id}</p>
//                     <p>Total: ${orderData.total}</p>
//                   </div>
//                 )}
//               </motion.div>
//             ) : (
//               <AnimatePresence mode="wait">
//                 {activeStep === 'shipping' ? (
//                   <motion.form
//                     key="shipping"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     onSubmit={handleShippingSubmit}
//                     className="space-y-6"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.email}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Phone Number *
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.phone}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Street Address *
//                         </label>
//                         <input
//                           type="text"
//                           name="street"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.street}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           City *
//                         </label>
//                         <input
//                           type="text"
//                           name="city"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.city}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           State/Province *
//                         </label>
//                         <input
//                           type="text"
//                           name="state"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.state}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Zip/Postal Code *
//                         </label>
//                         <input
//                           type="text"
//                           name="zipCode"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.zipCode}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Country *
//                         </label>
//                         <input
//                           type="text"
//                           name="country"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.country}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                     </div>

//                     {error && (
//                       <div className="text-red-500 text-sm mt-2">
//                         {error}
//                       </div>
//                     )}

//                     <div className="flex justify-end">
//                       <button
//                         type="submit"
//                         className="bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
//                       >
//                         Continue to Payment
//                       </button>
//                     </div>
//                   </motion.form>
//                 ) : (
//                   <motion.div
//                     key="payment"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     className="space-y-6"
//                   >
//                     <div className="space-y-4">
//                       <div className="flex items-center space-x-4">
//                         <input
//                           type="radio"
//                           id="credit"
//                           name="payment"
//                           value="credit"
//                           checked={paymentMethod === 'credit'}
//                           onChange={(e) => setPaymentMethod(e.target.value)}
//                           className="w-4 h-4 text-[#8D493A] border-[#DFD3C3] focus:ring-[#8D493A]"
//                         />
//                         <label htmlFor="credit" className="flex items-center space-x-2">
//                           <CreditCard className="text-[#8D493A]" />
//                           <span className="text-[#8D493A] font-medium">Credit Card</span>
//                         </label>
//                       </div>

//                       <div className="flex items-center space-x-4">
//                         <input
//                           type="radio"
//                           id="paypal"
//                           name="payment"
//                           value="paypal"
//                           checked={paymentMethod === 'paypal'}
//                           onChange={(e) => setPaymentMethod(e.target.value)}
//                           className="w-4 h-4 text-[#8D493A] border-[#DFD3C3] focus:ring-[#8D493A]"
//                         />
//                         <label htmlFor="paypal" className="flex items-center space-x-2">
//                           <span className="text-[#8D493A] font-medium">PayPal</span>
//                         </label>
//                       </div>
//                     </div>

//                     <AnimatePresence mode="wait">
//                       {paymentMethod === 'credit' && (
//                         <motion.form
//                           onSubmit={handleStripePayment}
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           className="space-y-4"
//                         >
//                           <Elements stripe={stripePromise}>
//                             <div className="p-3 border border-[#DFD3C3] rounded-lg">
//                               <CardElement
//                                 options={{
//                                   style: {
//                                     base: {
//                                       fontSize: '16px',
//                                       color: '#424770',
//                                       '::placeholder': {
//                                         color: '#aab7c4',
//                                       },
//                                     },
//                                     invalid: {
//                                       color: '#9e2146',
//                                     },
//                                   },
//                                 }}
//                               />
//                             </div>
//                           </Elements>

//                           {error && (
//                             <div className="text-red-500 text-sm mt-2">
//                               {error}
//                             </div>
//                           )}

//                           <div className="flex justify-between">
//                             <button
//                               type="button"
//                               onClick={() => setActiveStep('shipping')}
//                               className="text-[#8D493A] hover:text-opacity-80 transition duration-300"
//                             >
//                               Back to Shipping
//                             </button>
//                             <button
//                               type="submit"
//                               disabled={loading || !stripe}
//                               className="bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
//                             >
//                               {loading ? 'Processing...' : 'Pay Now'}
//                             </button>
//                           </div>
//                         </motion.form>
//                       )}

//                       {paymentMethod === 'paypal' && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           className="space-y-4"
//                         >
//                           <div className="bg-[#F8EDE3] p-6 rounded-lg">
//                             <PayPalButtons
//                               createOrder={createPayPalOrder}
//                               onApprove={onPayPalApprove}
//                               onError={(err) => setError('PayPal payment failed. Please try again.')}
//                               disabled={loading}
//                             />
//                           </div>

//                           {error && (
//                             <div className="text-red-500 text-sm mt-2">
//                               {error}
//                             </div>
//                           )}

//                           <button
//                             type="button"
//                             onClick={() => setActiveStep('shipping')}
//                             className="text-[#8D493A] hover:text-opacity-80 transition duration-300"
//                           >
//                             Back to Shipping
//                           </button>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
/////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CreditCard, CheckCircle } from 'lucide-react';
// import axios from 'axios';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const CheckoutPage = ({ cartItems = [], onSuccess }) => {
//   const [activeStep, setActiveStep] = useState('shipping');
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [orderData, setOrderData] = useState(null);

//   const [shippingInfo, setShippingInfo] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//     email: '',
//     phone: ''
//   });

//   // Calculate total
//   const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   // Format shipping address for API
//   const formatShippingAddress = () => ({
//     address: shippingInfo.street,
//     city: shippingInfo.city,
//     state: shippingInfo.state,
//     country: shippingInfo.country,
//     postalCode: shippingInfo.zipCode,
//     email: shippingInfo.email,
//     phone: shippingInfo.phone
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingInfo(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Validate shipping form
//   const validateShippingForm = () => {
//     const required = ['street', 'city', 'state', 'country', 'zipCode', 'email', 'phone'];
//     return required.every(field => shippingInfo[field].trim() !== '');
//   };

//   // Handle shipping form submission
//   const handleShippingSubmit = (e) => {
//     e.preventDefault();
//     if (validateShippingForm()) {
//       setActiveStep('payment');
//     } else {
//       setError('Please fill in all required fields');
//     }
//   };

//   // Handle PayPal payment
//   const createPayPalOrder = async () => {
//     try {
//       const response = await axios.post('/api/payment/paypal/create', {
//         order: {
//           items: cartItems,
//           shippingAddress: formatShippingAddress()
//         }
//       });
//       return response.data.orderID;
//     } catch (err) {
//       setError(err.message || 'Failed to create PayPal order');
//       throw err;
//     }
//   };

//   const onPayPalApprove = async (data) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/payment/paypal/capture', {
//         orderID: data.orderID
//       });

//       if (response.data.success) {
//         setSuccess(true);
//         setOrderData(response.data);
//         if (onSuccess) onSuccess(response.data);
//       }
//     } catch (err) {
//       setError(err.message || 'Failed to capture PayPal payment');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[6rem]">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden"
//         >
//           {/* Header */}
//           <div className="bg-[#8D493A] text-white p-6">
//             <h1 className="text-2xl font-bold text-center">Checkout</h1>
//             <div className="mt-4 text-sm">
//               <p className="text-white/80">Total Items: {cartItems.length}</p>
//               <p className="font-semibold">Total: ${total.toFixed(2)}</p>
//             </div>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex justify-center items-center p-6 bg-[#F8EDE3]">
//             <div className="flex items-center space-x-4">
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'shipping' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>1</div>
//               <span className={activeStep === 'shipping' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Shipping
//               </span>
//               <div className="w-16 h-0.5 bg-[#DFD3C3]" />
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'payment' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>2</div>
//               <span className={activeStep === 'payment' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Payment
//               </span>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="p-6">
//             {success ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center space-y-4"
//               >
//                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
//                 <h2 className="text-2xl font-bold text-[#8D493A]">Order Successful!</h2>
//                 <p className="text-gray-600">Thank you for your purchase.</p>
//                 {orderData && (
//                   <div className="mt-4 text-left bg-[#F8EDE3] p-4 rounded-lg">
//                     <h3 className="font-semibold">Order Details:</h3>
//                     <p>Order ID: {orderData.id}</p>
//                     <p>Total: ${orderData.total}</p>
//                   </div>
//                 )}
//               </motion.div>
//             ) : (
//               <AnimatePresence mode="wait">
//                 {activeStep === 'shipping' ? (
//                   <motion.form
//                     key="shipping"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     onSubmit={handleShippingSubmit}
//                     className="space-y-6"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.email}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Phone Number *
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.phone}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Street Address *
//                         </label>
//                         <input
//                           type="text"
//                           name="street"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.street}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           City *
//                         </label>
//                         <input
//                           type="text"
//                           name="city"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.city}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           State/Province *
//                         </label>
//                         <input
//                           type="text"
//                           name="state"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.state}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Country *
//                         </label>
//                         <input
//                           type="text"
//                           name="country"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.country}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Zip Code *
//                         </label>
//                         <input
//                           type="text"
//                           name="zipCode"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.zipCode}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                     </div>
//                     {error && <p className="text-red-500 text-sm">{error}</p>}
//                     <button
//                       type="submit"
//                       className="mt-4 w-full py-3 bg-[#8D493A] text-white font-semibold rounded-lg shadow-md hover:bg-[#A0534A] transition duration-200"
//                     >
//                       Continue to Payment
//                     </button>
//                   </motion.form>
//                 ) : (
//                   <motion.div
//                     key="payment"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                   >
//                     <div className="space-y-6">
//                       <h2 className="text-xl font-semibold text-[#8D493A]">Choose Payment Method</h2>
//                       <div className="flex flex-col space-y-4">
//                         <button
//                           onClick={() => setPaymentMethod('credit')}
//                           className={`p-4 border rounded-lg flex items-center justify-between ${
//                             paymentMethod === 'credit' ? 'border-[#8D493A] bg-[#F8EDE3]' : 'border-[#DFD3C3]'
//                           }`}
//                         >
//                           <span className="flex items-center">
//                             <CreditCard className="w-6 h-6 text-[#8D493A]" />
//                             <span className="ml-2 text-[#8D493A]">Credit/Debit Card</span>
//                           </span>
//                         </button>
//                         <PayPalScriptProvider options={{ "client-id": "ASIiVfZXTYzsxT9mZ18IhENq08lU5oKUDYp_RGyOB1TYbxDPCL-Yl4l0zniwz1ENGxDy7s4NdsbqIzVp" }}>
//                     <PayPalButtons   
//                       createOrder={createPayPalOrder}
//                       onApprove={onPayPalApprove}
//                       style={{ layout: 'vertical' }}
//                     />
//                   </PayPalScriptProvider>
//                       </div>
//                       {loading && <p className="text-blue-500">Processing payment...</p>}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;





// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CreditCard, CheckCircle } from 'lucide-react';
// import axios from 'axios';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const CheckoutPage = ({ cartItems = [], onSuccess }) => {
//   const [activeStep, setActiveStep] = useState('shipping');
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [orderData, setOrderData] = useState(null);

//   const [shippingInfo, setShippingInfo] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//     email: '',
//     phone: ''
//   });

//   // Calculate total
//   const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   // Format shipping address for API
//   const formatShippingAddress = () => ({
//     address: shippingInfo.street,
//     city: shippingInfo.city,
//     state: shippingInfo.state,
//     country: shippingInfo.country,
//     postalCode: shippingInfo.zipCode,
//     email: shippingInfo.email,
//     phone: shippingInfo.phone
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingInfo(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Validate shipping form
//   const validateShippingForm = () => {
//     const required = ['street', 'city', 'state', 'country', 'zipCode', 'email', 'phone'];
//     return required.every(field => shippingInfo[field].trim() !== '');
//   };

//   // Handle shipping form submission
//   const handleShippingSubmit = (e) => {
//     e.preventDefault();
//     if (validateShippingForm()) {
//       setActiveStep('payment');
//     } else {
//       setError('Please fill in all required fields');
//     }
//   };

//   // Handle PayPal payment
//   const createPayPalOrder = async () => {
//     try {
//       const response = await axios.post('/api/orders', {
//         items: cartItems,
//         shippingAddress: formatShippingAddress(),
//         total: total // إرسال إجمالي المبلغ كجزء من الطلب
//       });
//       return response.data.orderID;
//     } catch (err) {
//       setError(err.message || 'Failed to create PayPal order');
//       throw err;
//     }
//   };

//   const onPayPalApprove = async (data) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/orders/capture', {
//         orderID: data.orderID
//       });

//       if (response.data.success) {
//         setSuccess(true);
//         setOrderData(response.data);
//         if (onSuccess) onSuccess(response.data);
//       }
//     } catch (err) {
//       setError(err.message || 'Failed to capture PayPal payment');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[6rem]">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden"
//         >
//           {/* Header */}
//           <div className="bg-[#8D493A] text-white p-6">
//             <h1 className="text-2xl font-bold text-center">Checkout</h1>
//             <div className="mt-4 text-sm">
//               <p className="text-white/80">Total Items: {cartItems.length}</p>
//               <p className="font-semibold">Total: ${total.toFixed(2)}</p>
//             </div>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex justify-center items-center p-6 bg-[#F8EDE3]">
//             <div className="flex items-center space-x-4">
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'shipping' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>1</div>
//               <span className={activeStep === 'shipping' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Shipping
//               </span>
//               <div className="w-16 h-0.5 bg-[#DFD3C3]" />
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'payment' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>2</div>
//               <span className={activeStep === 'payment' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Payment
//               </span>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="p-6">
//             {success ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center space-y-4"
//               >
//                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
//                 <h2 className="text-2xl font-bold text-[#8D493A]">Order Successful!</h2>
//                 <p className="text-gray-600">Thank you for your purchase.</p>
//                 {orderData && (
//                   <div className="mt-4 text-left bg-[#F8EDE3] p-4 rounded-lg">
//                     <h3 className="font-semibold">Order Details:</h3>
//                     <p>Order ID: {orderData.id}</p>
//                     <p>Total: ${orderData.total}</p>
//                   </div>
//                 )}
//               </motion.div>
//             ) : (
//               <AnimatePresence mode="wait">
//                 {activeStep === 'shipping' ? (
//                   <motion.form
//                     key="shipping"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     onSubmit={handleShippingSubmit}
//                     className="space-y-6"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.email}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Phone Number *
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.phone}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Street Address *
//                         </label>
//                         <input
//                           type="text"
//                           name="street"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.street}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           City *
//                         </label>
//                         <input
//                           type="text"
//                           name="city"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.city}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           State *
//                         </label>
//                         <input
//                           type="text"
//                           name="state"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.state}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Country *
//                         </label>
//                         <input
//                           type="text"
//                           name="country"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.country}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           ZIP/Postal Code *
//                         </label>
//                         <input
//                           type="text"
//                           name="zipCode"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.zipCode}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                     </div>
//                     {error && <p className="text-red-500">{error}</p>}
//                     <button type="submit" className="w-full bg-[#8D493A] text-white font-bold py-3 rounded-lg">
//                       Continue to Payment
//                     </button>
//                   </motion.form>
//                 ) : (
//                   <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
//                     <h2 className="text-lg font-semibold text-[#8D493A] mb-4">Select Payment Method</h2>
//                     <div className="space-y-4">
//                       <div>
//                         <input
//                           type="radio"
//                           id="credit"
//                           name="paymentMethod"
//                           value="credit"
//                           checked={paymentMethod === 'credit'}
//                           onChange={() => setPaymentMethod('credit')}
//                         />
//                         <label htmlFor="credit" className="ml-2 text-[#8D493A]">Credit Card</label>
//                       </div>
//                       <div>
//                         <input
//                           type="radio"
//                           id="paypal"
//                           name="paymentMethod"
//                           value="paypal"
//                           checked={paymentMethod === 'paypal'}
//                           onChange={() => setPaymentMethod('paypal')}
//                         />
//                         <label htmlFor="paypal" className="ml-2 text-[#8D493A]">PayPal</label>
//                       </div>
//                     </div>
//                     {paymentMethod === 'paypal' && (
//                       <div className="mt-6">
//                         <PayPalScriptProvider options={{ "client-id": "AbxdR0n3LMIyqs22A7eYe4b0PSr7ULoE_T8cCyvk4fjUCbgLVdfFgxq9RJX9igAJFYBLPNnNPnW6hm9i" }}>
//                           <PayPalButtons
//                             createOrder={createPayPalOrder}
//                             onApprove={onPayPalApprove}
//                           />
//                         </PayPalScriptProvider>
//                       </div>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;



// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CreditCard, CheckCircle } from 'lucide-react';
// import axios from 'axios';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { clearCartApi } from '../features/cart/cartActions';
// const CheckoutPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { items = [] } = useSelector((state) => state.cart);
//   const [activeStep, setActiveStep] = useState('shipping');
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [orderData, setOrderData] = useState(null);
  

//   const [shippingInfo, setShippingInfo] = useState({
//     street: '',
//     city: '',
//     state: '',
//     country: '',
//     zipCode: '',
//     email: '',
//     phone: ''
//   });

//   // Calculate total from cart items
//   const calculateTotal = () => {
//     return items.reduce((sum, item) => {
//       const price = item.content?.price || 0;
//       const quantity = item.quantity || 0;
//       return sum + (price * quantity);
//     }, 0);
//   };

//   const total = calculateTotal();

//   // Format order items for API
//   const formatOrderItems = () => {
//     return items.map(item => ({
//       book: item.content._id,
//       quantity: item.quantity,
//       price: item.content.price
//     }));
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingInfo(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Validate shipping form
//   const validateShippingForm = () => {
//     const required = ['street', 'city', 'state', 'country', 'zipCode', 'email', 'phone'];
//     return required.every(field => shippingInfo[field].trim() !== '');
//   };

//   // Handle shipping form submission
//   const handleShippingSubmit = (e) => {
//     e.preventDefault();
//     if (validateShippingForm()) {
//       setActiveStep('payment');
//     } else {
//       setError('Please fill in all required fields');
//     }
//   };

//   // Handle PayPal payment
  
// const createPayPalOrder = async () => {
//   try {
//     const response = await axios.post('/api/orders/create-paypal-order', {
//       items: formatOrderItems(),
//       shippingAddress: {
//         address: shippingInfo.street,
//         city: shippingInfo.city,
//         state: shippingInfo.state,
//         country: shippingInfo.country,
//         postalCode: shippingInfo.zipCode,
//         email: shippingInfo.email,
//         phone: shippingInfo.phone
//       },
//       total: total
//     });
    
//     if (response.data.orderID) {
//       return response.data.orderID;
//     } else {
//       throw new Error('Failed to create PayPal order');
//     }
//   } catch (err) {
//     setError(err.message || 'Failed to create PayPal order');
//     throw err;
//   }
// };

// const onPayPalApprove = async (data, actions) => {
//   setLoading(true);
//   try {
//     const response = await axios.post('/api/orders/capture-paypal-payment', {
//       orderID: data.orderID
//     });

//     if (response.data.success) {
//       setSuccess(true);
//       setOrderData(response.data.order);
//       // Clear cart after successful payment
//       dispatch(clearCartApi());
//       setTimeout(() => {
//         navigate('/orders');
//       }, 3000);
//     } else {
//       throw new Error('Payment capture failed');
//     }
//   } catch (err) {
//     setError(err.message || 'Failed to capture PayPal payment');
//   } finally {
//     setLoading(false);
//   }
// };

// const handleCreditCardPayment = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   try {
//     // Get form values
//     const formData = new FormData(e.target);
//     const cardNumber = formData.get('cardNumber');
//     const expiryDate = formData.get('expiryDate');
//     const cvv = formData.get('cvv');

//     // Basic validation
//     if (!cardNumber || !expiryDate || !cvv) {
//       throw new Error('Please fill in all card details');
//     }

//     const formattedItems = formatOrderItems();

//     const response = await axios.post('/api/payment/process-credit-card', {
//       items: formattedItems,
//       shippingAddress: {
//         address: shippingInfo.street,
//         city: shippingInfo.city,
//         state: shippingInfo.state,
//         country: shippingInfo.country,
//         postalCode: shippingInfo.zipCode,
//         email: shippingInfo.email,
//         phone: shippingInfo.phone
//       },
//       paymentDetails: {
//         cardNumber,
//         expiryDate,
//         cvv
//       },
//       total: total
//     });

//     if (response.data.success) {
//       setSuccess(true);
//       setOrderData(response.data.order);
//       dispatch(clearCartApi());
//       setTimeout(() => {
//         navigate('/orders');
//       }, 3000);
//     }
//   } catch (err) {
//     setError(err.message || 'Payment failed');
//   } finally {
//     setLoading(false);
//   }
// };
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[6rem]">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden"
//         >
//           {/* Header */}
//           <div className="bg-[#8D493A] text-white p-6">
//             <h1 className="text-2xl font-bold text-center">Checkout</h1>
//             <div className="mt-4 text-sm">
//               <p className="text-white/80">Total Items: {items.length}</p>
//               <p className="font-semibold">Total: ${total.toFixed(2)}</p>
//             </div>
//           </div>

//           {/* Progress Steps */}
//           <div className="flex justify-center items-center p-6 bg-[#F8EDE3]">
//             <div className="flex items-center space-x-4">
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'shipping' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>1</div>
//               <span className={activeStep === 'shipping' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Shipping
//               </span>
//               <div className="w-16 h-0.5 bg-[#DFD3C3]" />
//               <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeStep === 'payment' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
//               }`}>2</div>
//               <span className={activeStep === 'payment' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
//                 Payment
//               </span>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="p-6">
//             {loading && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                 <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
//               </div>
//             )}

//             {success ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center space-y-4"
//               >
//                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
//                 <h2 className="text-2xl font-bold text-[#8D493A]">Order Successful!</h2>
//                 <p className="text-gray-600">Thank you for your purchase.</p>
//                 {orderData && (
//                   <div className="mt-4 text-left bg-[#F8EDE3] p-4 rounded-lg">
//                     <h3 className="font-semibold">Order Details:</h3>
//                     <p>Order ID: {orderData.id}</p>
//                     <p>Total: ${orderData.total}</p>
//                   </div>
//                 )}
//                 <p className="text-sm text-gray-500">Redirecting to orders page...</p>
//               </motion.div>
//             ) : (
//               <AnimatePresence mode="wait">
//                 {activeStep === 'shipping' ? (
//                   <motion.form
//                     key="shipping"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     onSubmit={handleShippingSubmit}
//                     className="space-y-6"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     
                    
//                  <div>
//                    <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                        Email Address *
//                      </label>
//                    <input
//                           type="email"
//                           name="email"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.email}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Phone Number *
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.phone}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Street Address *
//                         </label>
//                         <input
//                           type="text"
//                           name="street"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.street}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           City *
//                         </label>
//                         <input
//                           type="text"
//                           name="city"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.city}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           State *
//                         </label>
//                         <input
//                           type="text"
//                           name="state"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.state}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           Country *
//                         </label>
//                         <input
//                           type="text"
//                           name="country"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.country}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                           ZIP/Postal Code *
//                         </label>
//                         <input
//                           type="text"
//                           name="zipCode"
//                           required
//                           className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
//                           value={shippingInfo.zipCode}
//                           onChange={handleInputChange}
//                         />
//                       </div>
                    
                      
//                       {/* Add other shipping form fields */}
//                     </div>
//                     {error && <p className="text-red-500">{error}</p>}
//                     <button 
//                       type="submit" 
//                       className="w-full bg-[#8D493A] text-white font-bold py-3 rounded-lg"
//                     >
//                       Continue to Payment
//                     </button>
//                   </motion.form>
//                 ) : (
//                   <motion.div 
//                     key="payment"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                   >
//                     <h2 className="text-lg font-semibold text-[#8D493A] mb-4">Select Payment Method</h2>
//                     <div className="space-y-4">
//                       <div>
//                         <input
//                           type="radio"
//                           id="credit"
//                           name="paymentMethod"
//                           value="credit"
//                           checked={paymentMethod === 'credit'}
//                           onChange={() => setPaymentMethod('credit')}
//                         />
//                         <label htmlFor="credit" className="ml-2 text-[#8D493A]">Credit Card</label>
//                       </div>
//                       <div>
//                         <input
//                           type="radio"
//                           id="paypal"
//                           name="paymentMethod"
//                           value="paypal"
//                           checked={paymentMethod === 'paypal'}
//                           onChange={() => setPaymentMethod('paypal')}
//                         />
//                         <label htmlFor="paypal" className="ml-2 text-[#8D493A]">PayPal</label>
//                       </div>

//                       {paymentMethod === 'paypal' ? (
//                         <div className="mt-6">
//                           <PayPalScriptProvider options={{ "client-id": "AeGkSQtckEfbce4ePNU-LKCRMeO2BG7l9bvpLKABfwaPw3OaxSFu2NtEJRnkZ5IUZQ-SW2yMFkqejvs8", components: "buttons" }}>
//                           <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//                           {activeStep === 'payment' && (
//           <div className="p-6">
//             <PayPalButtons
//               createOrder={createPayPalOrder}
//               onApprove={onPayPalApprove}
//             />
//           </div>
//         )}
//       </div>
//     </PayPalScriptProvider>
//                         </div>
//                       ) : (
//                         <form onSubmit={handleCreditCardPayment} className="mt-6 space-y-4">
//                           <div>
//                             <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                               Card Number
//                             </label>
//                             <input
//                               type="text"
//                               className="w-full p-3 border border-[#DFD3C3] rounded-lg"
//                               placeholder="1234 5678 9012 3456"
//                               required
//                             />
//                           </div>
//                           <div className="grid grid-cols-2 gap-4">
//                             <div>
//                               <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                                 Expiry Date
//                               </label>
//                               <input
//                                 type="text"
//                                 className="w-full p-3 border border-[#DFD3C3] rounded-lg"
//                                 placeholder="MM/YY"
//                                 required
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-[#8D493A] mb-2">
//                                 CVV
//                               </label>
//                               <input
//                                 type="text"
//                                 className="w-full p-3 border border-[#DFD3C3] rounded-lg"
//                                 placeholder="123"
//                                 required
//                               />
//                             </div>
//                           </div>
//                           <button
//                             type="submit"
//                             className="w-full bg-[#8D493A] text-white font-bold py-3 rounded-lg"
//                             disabled={loading}
//                           >
//                             {loading ? 'Processing...' : 'Pay Now'}
//                           </button>
//                         </form>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;



// import React, { useState } from 'react';

// const PaymentPage = () => {
//   const [activeStep, setActiveStep] = useState('payment');
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');

//   const handleCreditCardPayment = (e) => {
//     e.preventDefault();
//     // منطق معالجة الدفع هنا (API)
//     console.log("Card Number:", cardNumber);
//     console.log("Expiry Date:", expiryDate);
//     console.log("CVV:", cvv);
    
//     // إعادة تعيين الحقول بعد الدفع
//     setCardNumber('');
//     setExpiryDate('');
//     setCvv('');
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-6">Payment</h2>
      
//       {/* خيارات الدفع - بطاقة الائتمان */}
//       {activeStep === 'payment' && paymentMethod === 'credit' && (
//         <form onSubmit={handleCreditCardPayment} className="space-y-6">
//           <div>
//             <label htmlFor="cardNumber" className="block mb-2">رقم البطاقة:</label>
//             <input
//               type="text"
//               id="cardNumber"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               required
//               className="w-full p-2 border rounded"
//               placeholder="XXXX-XXXX-XXXX-XXXX"
//             />
//           </div>
//           <div>
//             <label htmlFor="expiryDate" className="block mb-2">تاريخ انتهاء الصلاحية:</label>
//             <input
//               type="text"
//               id="expiryDate"
//               value={expiryDate}
//               onChange={(e) => setExpiryDate(e.target.value)}
//               required
//               placeholder="MM/YY"
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <label htmlFor="cvv" className="block mb-2">CVV:</label>
//             <input
//               type="text"
//               id="cvv"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full bg-[#8D493A] text-white p-3 rounded-lg hover:bg-[#6a2a2a]"
//             >
//               Pay with Credit Card
//             </button>
//           </div>
//         </form>
//       )}
      
//       {/* هنا يمكنك إضافة المزيد من طرق الدفع إذا كان ذلك مناسبًا */}
      
//     </div>
//   );
// };

// export default PaymentPage;
//////////////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { createOrder, capturePayPalPayment } from '../features/checkout/checkoutSlise';
// import { PayPalButtons } from '@paypal/react-paypal-js';
// import { toast } from 'react-hot-toast';
//   import axios from 'axios';
// const CheckoutPage = () => {
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [shippingInfo, setShippingInfo] = useState({
//     name: '',
//     email: '',
//     address: '',
//     city: '',
//     state: '',
//     postalCode:'',
//     country: '',
//   });
  
//   const { items = [], totalPrice = 0 } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const calculatedTotalPrice = items.reduce((total, item) => {
//     return total + (item.content.price * item.quantity);
//   }, 0);

//   const handleShippingInfoChange = (e) => {
//     setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handlePaymentMethodChange = (value) => {
//     setPaymentMethod(value);
//   };

//   const validateShippingInfo = () => {
//     const requiredFields = ['name', 'email', 'address', 'city', 'state', 'postalCode', 'country'];
//     for (const field of requiredFields) {
//       if (!shippingInfo[field]) {
//         toast.error(`Please fill in ${field}`);
//         return false;
//       }
//     }
//     return true;
//   };

//   // Modified for regular card payment
  

// const handleCardPayment = async () => {
//   try {
//     if (!validateShippingInfo()) {
//       return;
//     }

//     const orderData = {
//       shippingAddress: shippingInfo, // renaming shippingInfo to shippingAddress
//       paymentMethod,
//       items: items.map(item => ({
//         content: item.content._id,
//         quantity: item.quantity,
//         price: item.content.price
//       })),
//       total: calculatedTotalPrice // renaming totalPrice to total
//     };

//     const response = await axios.post('http://localhost:5000/api/payment/orders', orderData, {
//       withCredentials: true,
//     });

//     console.log('Order created successfully:', response.data);
//     toast.success('Order created successfully!');
//     if (response.data && response.data._id) {
//       navigate(`/order-confirmation/${response.data._id}`);
//     } else {
//       throw new Error('No order ID received from server');
//     }
//   } catch (error) {
//     console.error('Error in handleCardPayment:', error.message);
//     if (error.response) {
//       console.error('Error response data:', error.response.data);
//     }
//     toast.error(error.message || 'Error creating order');
//   }
// };



//   // PayPal specific handlers
//   const createPayPalOrder = async () => {
//     if (!validateShippingInfo()) {
//       throw new Error('Please fill in all shipping information');
//     }

//     try {
//       const orderData = {
//         shippingInfo,
//         paymentMethod: 'paypal',
//         items: items.map(item => ({
//           content: item.content._id,
//           quantity: item.quantity,
//           price: item.content.price
//         })),
//         totalPrice: calculatedTotalPrice
//       };

//       // Assuming your API returns { orderID: string }
//       const response = await dispatch(createOrder(orderData)).unwrap();
//       return response.orderID;
//     } catch (error) {
//       toast.error(error.message || 'Error creating PayPal order');
//       throw error;
//     }
//   };

//   const onApprovePayPalOrder = async (data, actions) => {
//     try {
//       const response = await dispatch(capturePayPalPayment({
//         orderID: data.orderID,
//         shippingInfo,
//         items,
//         totalPrice: calculatedTotalPrice
//       })).unwrap();
      
//       if (response) {
//         toast.success('Payment successful!');
//         navigate('/order-confirmation');
//       }
//     } catch (error) {
//       toast.error(error.message || 'Payment failed');
//       throw error;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[10rem]">
//         <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//             <div>
//               <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Shipping Information</h2>
//               <div className="space-y-4">
//               <div>
//                   <label htmlFor="name" className="block text-[#8D493A] font-medium mb-2">Name</label>
//                   <input
//                     id="name"
//                     name="name"
//                     value={shippingInfo.name}
//                     onChange={handleShippingInfoChange}
//                     className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-[#8D493A] font-medium mb-2">Email</label>
//                   <input
//                     id="email"
//                     name="email"
//                     value={shippingInfo.email}
//                     onChange={handleShippingInfoChange}
//                     className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="address" className="block text-[#8D493A] font-medium mb-2">Address</label>
//                   <input
//                     id="address"
//                     name="address"
//                     value={shippingInfo.address}
//                     onChange={handleShippingInfoChange}
//                     className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="city" className="block text-[#8D493A] font-medium mb-2">City</label>
//                   <input
//                     id="city"
//                     name="city"
//                     value={shippingInfo.city}
//                     onChange={handleShippingInfoChange}
//                     className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="state" className="block text-[#8D493A] font-medium mb-2">State</label>
//                   <input
//                     id="state"
//                     name="state"
//                     value={shippingInfo.state}
//                     onChange={handleShippingInfoChange}
//                     className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="postalCode" className="block text-[#8D493A] font-medium mb-2">postalCode</label>
//                   <input
//                     id="postalCode"
//                     name="postalCode"
//                     value={shippingInfo.postalCode}
//                     onChange={handleShippingInfoChange}
//                     className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="country" className="block text-[#8D493A] font-medium mb-2">Country</label>
//                   <input
//                     id="country"
//                     name="country"
//                     value={shippingInfo.country}
//                     onChange={handleShippingInfoChange}
//                     className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Payment Method</h2>
//               <div className="space-y-4">
//                 {/* Payment method selection */}
//                 <div className="space-y-4">
//                   <div>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="card"
//                         checked={paymentMethod === 'card'}
//                         onChange={() => handlePaymentMethodChange('card')}
//                         className="form-radio h-5 w-5 text-[#8D493A]"
//                       />
//                       <span className="ml-2 text-[#8D493A]">Credit/Debit Card</span>
//                     </label>
//                   </div>
//                   <div>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="paypal"
//                         checked={paymentMethod === 'paypal'}
//                         onChange={() => handlePaymentMethodChange('paypal')}
//                         className="form-radio h-5 w-5 text-[#8D493A]"
//                       />
//                       <span className="ml-2 text-[#8D493A]">PayPal</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Payment form based on selected method */}
//                 {paymentMethod === 'card' ? (
//                   <div className="space-y-4">
//                     <div>
//                       <label htmlFor="cardNumber" className="block text-[#8D493A] font-medium mb-2">Card Number</label>
//                       <input
//                         id="cardNumber"
//                         name="cardNumber"
//                         className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="expiration" className="block text-[#8D493A] font-medium mb-2">Expiration</label>
//                       <input
//                         id="expiration"
//                         name="expiration"
//                         className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="cvv" className="block text-[#8D493A] font-medium mb-2">CVV</label>
//                       <input
//                         id="cvv"
//                         name="cvv"
//                         className="border border-[#DFD3C3] rounded-lg px-4 py-2 w-full"
//                       />
//                     </div>
//                     <button
//   onClick={handleCardPayment}
//   className="w-full bg-[#8D493A] text-white py-2 rounded-lg hover:bg-[#6d3829] transition-colors"
// >
//   Pay with Card
// </button>
//                   </div>
//                 ) : (
//                   <div className="mt-4">
//                     <PayPalButtons
//                       createOrder={createPayPalOrder}
//                       onApprove={onApprovePayPalOrder}
//                       style={{ layout: "vertical" }}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Order Summary Section - Same as before */}
//           <div className="bg-[#F8EDE3] p-8">
//             <h2 className="text-2xl font-bold text-[#8D493A] mb-4">Order Summary</h2>
//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div key={item.content._id} className="flex justify-between items-center">
//                   <div className="flex items-center space-x-4">
//                     <img src={item.content.cover_image} alt={item.content.title} className="w-16 h-24 object-cover rounded-lg" />
//                     <div>
//                       <h3 className="text-xl font-semibold text-[#8D493A]">{item.content.title}</h3>
//                       <p className="text-[#D0B8A8]">Quantity: {item.quantity}</p>
//                     </div>
//                   </div>
//                   <p className="text-lg font-bold text-[#8D493A]">
//                     ${(item.content.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-8 flex justify-between items-center">
//               <span className="text-lg font-semibold text-[#8D493A]">Total:</span>
//               <span className="text-xl font-bold text-[#8D493A]">
//                 ${calculatedTotalPrice.toFixed(2)}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
//////////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder, capturePayPalPayment } from '../features/checkout/checkoutSlise';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Navbar from '../components/NavBar';
const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [step, setStep] = useState('shipping');
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });
  
  // إضافة حالة لمعلومات البطاقة
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  // إضافة حالة للأخطاء
  const [cardErrors, setCardErrors] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const { items = [], totalPrice = 0 } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculatedTotalPrice = items.reduce((total, item) => {
    return total + (item.content.price * item.quantity);
  }, 0);

  // التحقق من صحة رقم البطاقة
  const validateCardNumber = (number) => {
    const cardNumberRegex = /^[0-9]{16}$/;
    return cardNumberRegex.test(number.replace(/\s/g, ''));
  };

  // التحقق من صحة تاريخ الانتهاء
  const validateExpiry = (expiry) => {
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!expiryRegex.test(expiry)) return false;
    
    const [month, year] = expiry.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    const cardYear = parseInt(year);
    const cardMonth = parseInt(month);
    
    return (cardYear > currentYear) || 
           (cardYear === currentYear && cardMonth >= currentMonth);
  };

  // التحقق من صحة رمز CVV
  const validateCVV = (cvv) => {
    const cvvRegex = /^[0-9]{3,4}$/;
    return cvvRegex.test(cvv);
  };

  // معالج تغيير معلومات البطاقة
  const handleCardInfoChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    let error = '';

    switch (name) {
      case 'cardNumber':
        // تنسيق رقم البطاقة مع مسافات كل 4 أرقام
        formattedValue = value
          .replace(/\s/g, '')
          .replace(/(\d{4})/g, '$1 ')
          .trim();
        if (!validateCardNumber(value)) {
          error = 'The card number must be 16 digits.';
        }
        break;

      case 'expiry':
        // تنسيق تاريخ الانتهاء (MM/YY)
        formattedValue = value
          .replace(/\D/g, '')
          .replace(/^([0-9]{2})/, '$1/')
          .substr(0, 5);
        if (!validateExpiry(formattedValue)) {
          error = 'Invalid expiry date';
        }
        break;

      case 'cvv':
        if (!validateCVV(value)) {
          error = 'CVV code must be 3 or 4 digits';
        }
        break;
    }

    setCardInfo(prev => ({ ...prev, [name]: formattedValue }));
    setCardErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleShippingInfoChange = (e) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContinueToPayment = () => {
    if (validateShippingInfo()) {
      setStep('payment');
    }
  };

  const validateShippingInfo = () => {
    const requiredFields = ['name', 'email', 'address', 'city', 'state', 'postalCode', 'country'];
    for (const field of requiredFields) {
      if (!shippingInfo[field]) {
        toast.error(`Please fill in ${field}`);
        return false;
      }
    }
    return true;
  };

  // التحقق من صحة جميع معلومات البطاقة
  const validateCardInfo = () => {
    const isCardNumberValid = validateCardNumber(cardInfo.cardNumber);
    const isExpiryValid = validateExpiry(cardInfo.expiry);
    const isCVVValid = validateCVV(cardInfo.cvv);

    setCardErrors({
      cardNumber: isCardNumberValid ? '' : 'Invalid card number',
      expiry: isExpiryValid ? '' : 'Invalid expiry date',
      cvv: isCVVValid ? '' : 'Invalid CVV code',
    });

    return isCardNumberValid && isExpiryValid && isCVVValid;
  };

  const handleCardPayment = async () => {
    if (!validateCardInfo()) {
      toast.error('Please check your card information');
      return;
    }

    try {
      const orderData = {
        shippingAddress: shippingInfo,
        paymentMethod,
        items: items.map(item => ({
          content: item.content._id,
          quantity: item.quantity,
          price: item.content.price
        })),
        total: calculatedTotalPrice
      };

      const response = await axios.post('http://localhost:5000/api/payment/orders', orderData, {
        withCredentials: true,
      });

      console.log('Order created successfully:', response.data);
      toast.success('Order created successfully!');
      if (response.data && response.data._id) {
        navigate(`/order-confirmation/${response.data._id}`);
      } else {
        throw new Error('No order ID received from server');
      }
    } catch (error) {
      console.error('Error in handleCardPayment:', error);
      toast.error(error.message || 'Error creating order');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF5F1] py-12">
    
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl font-semibold text-[#8D493A] mb-8">✧ Eco-Friendly Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-[#8D493A] mb-6">📱 Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.content._id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img src={item.content.cover_image} alt={item.content.title} className="w-16 h-24 object-cover rounded-lg" />
                    <div>
                      <h3 className="font-semibold text-[#8D493A]">{item.content.title}</h3>
                      <p className="text-[#D0B8A8]">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-bold text-[#8D493A]">
                    ${(item.content.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#F8EDE3]">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#8D493A]">Total:</span>
                <span className="text-xl font-bold text-[#8D493A]">
                  ${calculatedTotalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Shipping/Payment Form Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'shipping' ? 'bg-[#8D493A] text-white' : 'bg-[#F8EDE3] text-[#8D493A]'}`}>
                  🚚
                </div>
                <span className={`ml-2 ${step === 'shipping' ? 'text-[#8D493A]' : 'text-[#D0B8A8]'}`}>Shipping</span>
              </div>
              <div className="flex-1 h-px bg-[#F8EDE3]"></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-[#8D493A] text-white' : 'bg-[#F8EDE3] text-[#8D493A]'}`}>
                  💳
                </div>
                <span className={`ml-2 ${step === 'payment' ? 'text-[#8D493A]' : 'text-[#D0B8A8]'}`}>Payment</span>
              </div>
            </div>

            {step === 'shipping' ? (
              <>
                <h2 className="text-xl font-semibold text-[#8D493A] mb-6">Shipping Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={shippingInfo.name}
                    onChange={handleShippingInfoChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#F8EDE3] focus:outline-none focus:border-[#8D493A]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={shippingInfo.email}
                    onChange={handleShippingInfoChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#F8EDE3] focus:outline-none focus:border-[#8D493A]"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={shippingInfo.address}
                    onChange={handleShippingInfoChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#F8EDE3] focus:outline-none focus:border-[#8D493A]"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={shippingInfo.city}
                      onChange={handleShippingInfoChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#F8EDE3] focus:outline-none focus:border-[#8D493A]"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State/Province"
                      value={shippingInfo.state}
                      onChange={handleShippingInfoChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#F8EDE3] focus:outline-none focus:border-[#8D493A]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Zip/Postal Code"
                      value={shippingInfo.postalCode}
                      onChange={handleShippingInfoChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#F8EDE3] focus:outline-none focus:border-[#8D493A]"
                    />
                    <select
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleShippingInfoChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#F8EDE3] focus:outline-none focus:border-[#8D493A]"
                    >
                      <option value="">Select Country</option>
                      <option value="US">Jordan</option>
                      {/* <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option> */}
                    </select>
                  </div>
                  <button
                    onClick={handleContinueToPayment}
                    className="w-full bg-[#8D493A] text-white py-3 rounded-lg hover:bg-[#6d3829] transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-[#8D493A] mb-6">Payment Information</h2>
                <div className="space-y-4">
                 {/* ... الكود السابق يبقى كما هو حتى وصولنا إلى قسم Payment Information ... */}

                <div>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number "
                      value={cardInfo.cardNumber}
                      onChange={handleCardInfoChange}
                      maxLength="19"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        cardErrors.cardNumber 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#F8EDE3] focus:border-[#8D493A]'
                      } focus:outline-none`}
                    />
                    {cardErrors.cardNumber && (
                      <p className="mt-1 text-sm text-red-500">{cardErrors.cardNumber}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        value={cardInfo.expiry}
                        onChange={handleCardInfoChange}
                        maxLength="5"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          cardErrors.expiry 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-[#F8EDE3] focus:border-[#8D493A]'
                        } focus:outline-none`}
                      />
                      {cardErrors.expiry && (
                        <p className="mt-1 text-sm text-red-500">{cardErrors.expiry}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={cardInfo.cvv}
                        onChange={handleCardInfoChange}
                        maxLength="4"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          cardErrors.cvv 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-[#F8EDE3] focus:border-[#8D493A]'
                        } focus:outline-none`}
                      />
                      {cardErrors.cvv && (
                        <p className="mt-1 text-sm text-red-500">{cardErrors.cvv}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={handleCardPayment}
                      disabled={Object.values(cardErrors).some(error => error !== '')}
                      className={`w-full py-3 rounded-lg transition-colors ${
                        Object.values(cardErrors).some(error => error !== '')
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-[#8D493A] hover:bg-[#6d3829] text-white'
                      }`}
                    >
                    Complete payment
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;