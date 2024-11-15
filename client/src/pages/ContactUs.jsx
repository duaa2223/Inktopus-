import { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, X } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    let timeoutId;
    if (showAlert) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 7000); // Alert will stay for 5 seconds
    }
    return () => clearTimeout(timeoutId);
  }, [showAlert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      const response = await fetch('http://localhost:5000/api/contact/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include',
        body: JSON.stringify({
          ...formData,
          isVisitor: true
        }),
      });

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for reaching out! We\'ve received your message and will get back to you via email soon. Please keep an eye on your inbox.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setShowAlert(true);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error.message || 'Failed to send message. Please try again.' 
      });
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8EDE3] via-[#DFD3C3] to-[#D0B8A8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Custom Alert Notification */}
        {showAlert && (
          <div className="fixed top-4 right-4 z-50 max-w-md animate-[slideDown_0.5s_ease-out]">
            <div className={`
              relative flex items-center gap-3 p-4 rounded-lg shadow-lg
              ${submitStatus.type === 'success' 
                ? 'bg-[#F8EDE3] border border-[#8D493A]/20' 
                : 'bg-red-50 border border-red-200'
              }
            `}>
              <div className={`
                flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                ${submitStatus.type === 'success' ? 'bg-[#DFD3C3]' : 'bg-red-100'}
              `}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-6 h-6 text-[#8D493A]" />
                ) : (
                  <X className="w-6 h-6 text-red-600" />
                )}
              </div>
              
              <div className="flex-1">
                <p className={`text-sm ${
                  submitStatus.type === 'success' ? 'text-[#8D493A]' : 'text-red-800'
                }`}>
                  {submitStatus.message}
                </p>
              </div>

              <button
                onClick={() => setShowAlert(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#8D493A] mb-4">Get in Touch</h1>
          <p className="text-[#8D493A]/80">We'd love to hear from you. Let's start a conversation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              { icon: Phone, title: 'Call Us', content: '+123 456 789' },
              { icon: Mail, title: 'Email', content: 'info@example.com' },
              { icon: MapPin, title: 'Visit Us', content: '123 Business Avenue' }
            ].map((item, index) => (
              <div key={index} className="bg-[#F8EDE3]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#DFD3C3] p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-[#8D493A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#8D493A]">{item.title}</h3>
                    <p className="text-[#8D493A]/80">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-[#F8EDE3]/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#8D493A] font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#D0B8A8] focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent bg-white/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#8D493A] font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#D0B8A8] focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent bg-white/50"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-[#8D493A] font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-[#D0B8A8] focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent bg-white/50"
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block text-[#8D493A] font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg border border-[#D0B8A8] focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent bg-white/50"
                  required
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#8D493A] to-[#D0B8A8] text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;