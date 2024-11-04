// components/UIComponents.js

export const Input = ({ placeholder, value, onChange, className }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent ${className}`}
  />
);

export const Select = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={onChange}
    className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8D493A] focus:border-transparent"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export const Button = ({ children, onClick, variant = 'default', className }) => (
  <button
    className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      variant === 'destructive'
        ? 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
        : 'bg-[#8D493A] text-white hover:bg-[#7A3E32] focus:ring-[#8D493A]'
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

// UIComponents.jsx
export const Card = ({ title, description, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      {description && <p className="text-sm text-gray-500">{description}</p>}
      <div className="mt-4">{children}</div>
    </div>
  );
};
