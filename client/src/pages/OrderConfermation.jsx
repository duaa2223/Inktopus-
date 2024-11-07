// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { BookOpen, Download, CheckCircle, Package, CreditCard, Calendar } from 'lucide-react';
// import axios from 'axios';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Alert, AlertDescription } from '@/components/ui/alert';

// const OrderConfirmationPage = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { orderId } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchOrderDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/payment/orders/${orderId}`, {
//           withCredentials: true
//         });
//         setOrderDetails(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     if (orderId) {
//       fetchOrderDetails();
//     }
//   }, [orderId]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
//         <Alert variant="destructive">
//           <AlertDescription>
//             Error loading order details: {error}
//           </AlertDescription>
//         </Alert>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto mt-[6rem]">
//         <div className="text-center mb-8">
//           <div className="inline-block p-4 rounded-full bg-green-100 mb-4">
//             <CheckCircle className="h-12 w-12 text-green-500" />
//           </div>
//           <h1 className="text-3xl font-bold text-[#8D493A]">Order Confirmed!</h1>
//           <p className="text-[#D0B8A8] mt-2">Thank you for your purchase</p>
//         </div>

//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle className="text-[#8D493A] flex items-center gap-2">
//               <Package className="h-5 w-5" /> Order Details
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-[#D0B8A8]">Order ID</p>
//                 <p className="font-medium">{orderDetails?._id}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-[#D0B8A8]">Date</p>
//                 <p className="font-medium flex items-center gap-1">
//                   <Calendar className="h-4 w-4" />
//                   {new Date(orderDetails?.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-[#D0B8A8]">Payment Method</p>
//                 <p className="font-medium flex items-center gap-1">
//                   <CreditCard className="h-4 w-4" />
//                   {orderDetails?.paymentMethod}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-[#D0B8A8]">Total Amount</p>
//                 <p className="font-medium text-[#8D493A]">${orderDetails?.total.toFixed(2)}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <div className="space-y-4">
//           {orderDetails?.items.map((item, index) => (
//             <Card key={index} className="overflow-hidden">
//               <CardContent className="p-6">
//                 <div className="flex items-center gap-6">
//                   <div className="flex-shrink-0">
//                     <BookOpen className="h-12 w-12 text-[#8D493A]" />
//                   </div>
//                   <div className="flex-grow">
//                     <h3 className="font-semibold text-[#8D493A]">{item.content.title}</h3>
//                     <p className="text-sm text-[#D0B8A8]">Quantity: {item.quantity}</p>
//                     <p className="text-sm font-medium text-[#8D493A]">${item.price.toFixed(2)}</p>
//                   </div>
//                   <a
//                     href={item.content.file_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//                   >
//                     <Download className="h-4 w-4" />
//                     Download
//                   </a>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-8">
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-[#8D493A]">Shipping Address</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-2">
//                 <p className="font-medium">{orderDetails?.shippingAddress.name}</p>
//                 <p>{orderDetails?.shippingAddress.address}</p>
//                 <p>{orderDetails?.shippingAddress.city}, {orderDetails?.shippingAddress.state} {orderDetails?.shippingAddress.postalCode}</p>
//                 <p>{orderDetails?.shippingAddress.country}</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="mt-8 text-center">
//           <button
//             onClick={() => navigate('/')}
//             className="px-6 py-3 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmationPage;
/////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, Download, CheckCircle, Package, CreditCard, Calendar } from 'lucide-react';
import axios from 'axios';

const OrderConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { orderId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!orderId) {
          throw new Error('Order ID is missing');
        }

        const response = await axios.get(`http://localhost:5000/api/payment/orders/${orderId}`, {
          withCredentials: true,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (!response.data) {
          throw new Error('No data received from server');
        }

        console.log('Response received:', response.data);

        if (isMounted) {
          setOrderDetails(response.data);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error details:', {
          message: err.message,
          response: err.response,
          status: err.response?.status
        });

        if (isMounted) {
          setError(
            err.response?.data?.message || 
            err.message || 
            'Failed to load order details'
          );
          setLoading(false);
        }
      }
    };

    fetchOrderDetails();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [orderId]);

  // التحقق من عدم وجود orderId
  if (!orderId) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
        <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          No order ID provided
        </div>
      </div>
    );
  }

  // حالة التحميل
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8D493A]"></div>
        <p className="mt-4 text-[#8D493A]">Loading order details...</p>
      </div>
    );
  }

  // حالة الخطأ
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
        <div className="max-w-4xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="font-bold mb-2">Error loading order details:</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // التحقق من وجود البيانات
  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white p-8">
        <div className="max-w-4xl mx-auto p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          No order details found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-24">
        <div className="text-center mb-8">
          <div className="inline-block p-4 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-[#8D493A]">Order Confirmed!</h1>
          <p className="text-[#D0B8A8] mt-2">Thank you for your purchase</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-[#8D493A]">
              <Package className="h-5 w-5" /> Order Details
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#D0B8A8]">Order ID</p>
                <p className="font-medium">{orderDetails._id}</p>
              </div>
              <div>
                <p className="text-sm text-[#D0B8A8]">Date</p>
                <p className="font-medium flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(orderDetails.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#D0B8A8]">Payment Method</p>
                <p className="font-medium flex items-center gap-1">
                  <CreditCard className="h-4 w-4" />
                  {orderDetails.paymentMethod}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#D0B8A8]">Total Amount</p>
                <p className="font-medium text-[#8D493A]">
                  ${orderDetails.total?.toFixed(2) || '0.00'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {Array.isArray(orderDetails.items) && orderDetails.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-12 w-12 text-[#8D493A]" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-[#8D493A]">
                      {item?.content?.title || 'Untitled Item'}
                    </h3>
                    <p className="text-sm text-[#D0B8A8]">
                      Quantity: {item?.quantity || 0}
                    </p>
                    <p className="text-sm font-medium text-[#8D493A]">
                      ${item?.price?.toFixed(2) || '0.00'}
                    </p>
                  </div>
                  {item?.content?.file_url && (
                    <a
                      href={item.content.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
                    >
                      <Download className="h-4 w-4" />
                     Your Book
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {orderDetails.shippingAddress && (
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow-md">
              <div className="border-b p-6">
                <div className="text-xl font-semibold text-[#8D493A]">
                  Shipping Address
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  <p className="font-medium">{orderDetails.shippingAddress.name}</p>
                  <p>{orderDetails.shippingAddress.address}</p>
                  <p>
                    {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.postalCode}
                  </p>
                  <p>{orderDetails.shippingAddress.country}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#8D493A] text-white rounded-lg hover:bg-[#6d3829] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;