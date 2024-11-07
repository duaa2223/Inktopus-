// import React from 'react';

// // Form Input Container - تقليل المسافة السفلية
// export const FormGroup = ({ children, className = '' }) => (
//   <div className={`mb-3 ${className}`}>
//     {children}
//   </div>
// );

// // Form Label - تقليل حجم الخط والمسافة السفلية
// export const FormLabel = ({ children, required }) => (
//   <label className="block text-xs font-medium text-[#8D493A] mb-1">
//     {children}
//     {required && <span className="text-red-500 ml-1">*</span>}
//   </label>
// );

// // Text Input - تقليل الحشو الداخلي
// export const FormInput = ({ 
//   type = 'text', 
//   disabled = false, 
//   error,
//   ...props 
// }) => (
//   <input
//     type={type}
//     disabled={disabled}
//     className={`
//       w-full px-3 py-1.5 
//       bg-white/70 backdrop-blur-sm
//       border border-[#DFD3C3] 
//       rounded-md
//       text-sm
//       focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A]/20
//       disabled:bg-gray-100 disabled:cursor-not-allowed
//       transition duration-200
//       ${error ? 'border-red-500' : ''}
//     `}
//     {...props}
//   />
// );

// // Select Input - تقليل الحشو الداخلي
// export const FormSelect = ({ 
//   children, 
//   disabled = false,
//   error,
//   ...props 
// }) => (
//   <select
//     disabled={disabled}
//     className={`
//       w-full px-3 py-1.5
//       bg-white/70 backdrop-blur-sm
//       border border-[#DFD3C3]
//       rounded-md
//       text-sm
//       focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A]/20
//       disabled:bg-gray-100 disabled:cursor-not-allowed
//       transition duration-200
//       ${error ? 'border-red-500' : ''}
//     `}
//     {...props}
//   >
//     {children}
//   </select>
// );

// // Textarea - تقليل الحشو الداخلي
// export const FormTextarea = ({ 
//   disabled = false,
//   error,
//   ...props 
// }) => (
//   <textarea
//     disabled={disabled}
//     className={`
//       w-full px-3 py-1.5
//       bg-white/70 backdrop-blur-sm
//       border border-[#DFD3C3]
//       rounded-md
//       text-sm
//       focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A]/20
//       disabled:bg-gray-100 disabled:cursor-not-allowed
//       transition duration-200
//       resize-none
//       ${error ? 'border-red-500' : ''}
//     `}
//     {...props}
//   />
// );

// // Form Modal Container - تقليل الحجم الأقصى والحشو
// export const FormModal = ({ children, onClose }) => (
//   <div className="fixed inset-0 flex items-center justify-center bg-[#8D493A]/20 backdrop-blur-sm">
//     <div className="bg-gradient-to-br from-[#F8EDE3]/95 to-white/95 backdrop-blur-sm rounded-lg shadow-lg p-5 w-full max-w-md mx-4 border border-[#DFD3C3]">
//       {children}
//     </div>
//   </div>
// );

// // Button - تقليل الحشو وحجم الخط
// export const Button = ({ 
//   variant = 'primary', 
//   className = '', 
//   children, 
//   ...props 
// }) => {
//   const baseStyles = `
//     px-4 py-1.5 
//     rounded-md 
//     text-sm
//     font-medium 
//     transition-all 
//     duration-200 
//     disabled:opacity-50 
//     disabled:cursor-not-allowed
//   `;

//   const variants = {
//     primary: `
//       bg-[#8D493A] 
//       text-white 
//       hover:bg-[#8D493A]/90 
//       active:bg-[#8D493A]/80
//     `,
//     secondary: `
//       bg-[#DFD3C3] 
//       text-[#8D493A] 
//       hover:bg-[#DFD3C3]/80 
//       active:bg-[#DFD3C3]/70
//     `,
//   };

//   return (
//     <button 
//       className={`${baseStyles} ${variants[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };
///////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';

// // Form Input Container - موحد المسافة السفلية
// export const FormGroup = ({ children, className = '' }) => (
//   <div className={`mb-4 ${className}`}>
//     {children}
//   </div>
// );

// // Form Label - موحد الحجم والمسافة
// export const FormLabel = ({ children, required }) => (
//   <label className="block text-sm font-medium text-[#8D493A] mb-1.5">
//     {children}
//     {required && <span className="text-red-500 ml-1">*</span>}
//   </label>
// );

// // Text Input - حجم موحد
// export const FormInput = ({
//   type = 'text',
//   disabled = false,
//   error,
//   ...props
// }) => (
//   <input
//     type={type}
//     disabled={disabled}
//     className={`
//       w-full h-10
//       px-3
//       bg-white/70 backdrop-blur-sm
//       border border-[#DFD3C3]
//       rounded-md
//       text-sm
//       focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A]/20
//       disabled:bg-gray-100 disabled:cursor-not-allowed
//       transition duration-200
//       ${error ? 'border-red-500' : ''}
//     `}
//     {...props}
//   />
// );

// // Select Input - حجم موحد
// export const FormSelect = ({
//   children,
//   disabled = false,
//   error,
//   ...props
// }) => (
//   <select
//     disabled={disabled}
//     className={`
//       w-full h-10
//       px-3
//       bg-white/70 backdrop-blur-sm
//       border border-[#DFD3C3]
//       rounded-md
//       text-sm
//       focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A]/20
//       disabled:bg-gray-100 disabled:cursor-not-allowed
//       transition duration-200
//       ${error ? 'border-red-500' : ''}
//     `}
//     {...props}
//   >
//     {children}
//   </select>
// );

// // Textarea - حجم موحد مع إمكانية التمرير
// export const FormTextarea = ({
//   disabled = false,
//   error,
//   rows = 4,
//   ...props
// }) => (
//   <div className="w-full h-40 relative">
//     <textarea
//       disabled={disabled}
//       rows={rows}
//       className={`
//         absolute w-full h-full
//         px-3 py-2
//         bg-white/70 backdrop-blur-sm
//         border border-[#DFD3C3]
//         rounded-md
//         text-sm
//         focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A]/20
//         disabled:bg-gray-100 disabled:cursor-not-allowed
//         transition duration-200
//         resize-none
//         overflow-y-auto
//         ${error ? 'border-red-500' : ''}
//       `}
//       {...props}
//     />
//   </div>
// );

// // Form Modal Container - حجم موحد مع تمرير
// export const FormModal = ({ children, onClose }) => (
//   <div className="fixed inset-0 flex items-center justify-center bg-[#8D493A]/20 backdrop-blur-sm">
//     <div className="bg-gradient-to-br from-[#F8EDE3]/95 to-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 w-full max-w-md mx-4 border border-[#DFD3C3] max-h-[90vh] overflow-y-auto">
//       {children}
//     </div>
//   </div>
// );

// // Button - حجم موحد
// export const Button = ({
//   variant = 'primary',
//   className = '',
//   children,
//   ...props
// }) => {
//   const baseStyles = `
//     h-10 px-4
//     rounded-md
//     text-sm
//     font-medium
//     transition-all
//     duration-200
//     disabled:opacity-50
//     disabled:cursor-not-allowed
//   `;

//   const variants = {
//     primary: `
//       bg-[#8D493A]
//       text-white
//       hover:bg-[#8D493A]/90
//       active:bg-[#8D493A]/80
//     `,
//     secondary: `
//       bg-[#DFD3C3]
//       text-[#8D493A]
//       hover:bg-[#DFD3C3]/80
//       active:bg-[#DFD3C3]/70
//     `,
//   };

//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default {
//   FormGroup,
//   FormLabel,
//   FormInput,
//   FormSelect,
//   FormTextarea,
//   FormModal,
//   Button
// };
//////////////////////////////////////////////////////////////////////////////
import Swal from 'sweetalert2';

// Form Input Container - موحد المسافة السفلية
export const FormGroup = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

// Form Label - موحد الحجم والمسافة
export const FormLabel = ({ children, required }) => (
  <label className="block text-sm font-medium text-[#8D493A] mb-1.5">
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

// Text Input - حجم موحد
export const FormInput = ({
  type = 'text',
  disabled = false,
  error,
  ...props
}) => (
  <input
    type={type}
    disabled={disabled}
    className={`
      w-full h-10
      px-3
      bg-white/70 backdrop-blur-sm
      border border-[#DFD3C3]
      rounded-md
      text-sm
      focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A]/20
      disabled:bg-gray-100 disabled:cursor-not-allowed
      transition duration-200
      ${error ? 'border-red-500' : ''}
    `}
    {...props}
  />
);

// Select Input - حجم موحد
export const FormSelect = ({
  children,
  disabled = false,
  error,
  ...props
}) => (
  <select
    disabled={disabled}
    className={`
      w-full h-10
      px-3
      bg-white/70 backdrop-blur-sm
      border border-[#DFD3C3]
      rounded-md
      text-sm
      focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A]/20
      disabled:bg-gray-100 disabled:cursor-not-allowed
      transition duration-200
      ${error ? 'border-red-500' : ''}
    `}
    {...props}
  >
    {children}
  </select>
);

// Textarea - حجم موحد مع إمكانية التمرير
export const FormTextarea = ({
  disabled = false,
  error,
  rows = 4,
  ...props
}) => (
  <div className="w-full h-40 relative">
    <textarea
      disabled={disabled}
      rows={rows}
      className={`
        absolute w-full h-full
        px-3 py-2
        bg-white/70 backdrop-blur-sm
        border border-[#DFD3C3]
        rounded-md
        text-sm
        focus:outline-none focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A]/20
        disabled:bg-gray-100 disabled:cursor-not-allowed
        transition duration-200
        resize-none
        overflow-y-auto
        ${error ? 'border-red-500' : ''}
      `}
      {...props}
    />
  </div>
);

// Form Modal Container - حجم موحد مع تمرير
export const FormModal = ({ children, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#8D493A]/20 backdrop-blur-sm">
    <div className="bg-gradient-to-br from-[#F8EDE3]/95 to-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 w-full max-w-md mx-4 border border-[#DFD3C3] max-h-[90vh] overflow-y-auto">
      {children}
    </div>
  </div>
);

// Button - حجم موحد
export const Button = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = `
    h-10 px-4
    rounded-md
    text-sm
    font-medium
    transition-all
    duration-200
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[#8D493A]
      text-white
      hover:bg-[#8D493A]/90
      active:bg-[#8D493A]/80
    `,
    secondary: `
      bg-[#DFD3C3]
      text-[#8D493A]
      hover:bg-[#DFD3C3]/80
      active:bg-[#DFD3C3]/70
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Form Alert Utilities - وظائف مساعدة للتنبيهات
export const FormAlert = {
  success: (message = 'Successfully submitted!') => {
    return Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      confirmButtonColor: '#8D493A',
    });
  },

  error: (message = 'An error occurred.') => {
    return Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      confirmButtonColor: '#8D493A',
    });
  },

  confirm: (message = 'Are you sure?') => {
    return Swal.fire({
      title: 'Confirm',
      text: message,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#8D493A',
      cancelButtonColor: '#DFD3C3',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    });
  },

  loading: () => {
    Swal.fire({
      title: 'Processing...',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  },

  close: () => {
    Swal.close();
  }
};

export default {
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  FormModal,
  Button,
  FormAlert
};