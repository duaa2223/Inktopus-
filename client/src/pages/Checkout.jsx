
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
        <h1 className="text-center text-2xl font-semibold text-[#8D493A] mb-8">✧ Inktopus Checkout</h1>
        
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