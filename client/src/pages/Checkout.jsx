import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard } from 'lucide-react';

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState('shipping');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [shippingInfo, setShippingInfo] = useState({
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: ''
  });

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setActiveStep('payment');
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8EDE3] to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[6rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#8D493A] text-white p-6">
            <h1 className="text-2xl font-bold text-center">Eco-Friendly Checkout</h1>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center items-center p-6 bg-[#F8EDE3]">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeStep === 'shipping' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
              }`}>1</div>
              <span className={activeStep === 'shipping' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
                Shipping
              </span>
              <div className="w-16 h-0.5 bg-[#DFD3C3]" />
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeStep === 'payment' ? 'bg-[#8D493A] text-white' : 'bg-[#D0B8A8] text-white'
              }`}>2</div>
              <span className={activeStep === 'payment' ? 'text-[#8D493A] font-semibold' : 'text-[#D0B8A8]'}>
                Payment
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeStep === 'shipping' ? (
                <motion.form
                  key="shipping"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleShippingSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#8D493A] mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                        value={shippingInfo.street}
                        onChange={(e) => setShippingInfo({...shippingInfo, street: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#8D493A] mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#8D493A] mb-2">
                        State/Province
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#8D493A] mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                        value={shippingInfo.country}
                        onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[#8D493A] mb-2">
                        Zip/Postal Code
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                        value={shippingInfo.zipCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.form
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handlePaymentSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        id="credit"
                        name="payment"
                        value="credit"
                        checked={paymentMethod === 'credit'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#8D493A] border-[#DFD3C3] focus:ring-[#8D493A]"
                      />
                      <label htmlFor="credit" className="flex items-center space-x-2">
                        <CreditCard className="text-[#8D493A]" />
                        <span className="text-[#8D493A] font-medium">Credit Card</span>
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        id="paypal"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-[#8D493A] border-[#DFD3C3] focus:ring-[#8D493A]"
                      />
                      <label htmlFor="paypal" className="flex items-center space-x-2">
                        <span className="text-[#8D493A] font-medium">PayPal</span>
                      </label>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {paymentMethod === 'credit' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                      >
                        <div>
                          <label className="block text-sm font-medium text-[#8D493A] mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#8D493A] mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="MM/YY"
                              className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#8D493A] mb-2">
                              CVC
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full p-3 border border-[#DFD3C3] rounded-lg focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {paymentMethod === 'paypal' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-[#F8EDE3] p-6 rounded-lg"
                      >
                        <p className="text-[#8D493A]">
                          You will be redirected to PayPal to complete your payment securely.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveStep('shipping')}
                      className="text-[#8D493A] hover:text-opacity-80 transition duration-300"
                    >
                      Back to Shipping
                    </button>
                    <button
                      type="submit"
                      className="bg-[#8D493A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
                    >
                      Complete Purchase
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;