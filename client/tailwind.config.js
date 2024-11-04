/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontSize: {
        h1: '2.25rem', // حجم الخط لـ h1
        h2: '1.875rem', // حجم الخط لـ h2
        h3: '1.5rem', // حجم الخط لـ h3
        h4: '1.25rem', // حجم الخط لـ h4
        h5: '1.125rem', // حجم الخط لـ h5
        h6: '1rem', // حجم الخط لـ h6
      },
    }
  }
}
