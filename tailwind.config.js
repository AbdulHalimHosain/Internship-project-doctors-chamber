/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: {
          100: '#EBF8FF',
          200: '#BEE3F8',
          300: '#90CDF4',
          400: '#63B3ED',
          500: '#4299E1',
          600: '#3182CE',
          700: '#2B6CB0',
          800: '#2C5282',
        },
        white: '#FFFFFF',
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        typewriter: 'typing 4s steps(30, end), blink 0.75s step-end infinite', // Combined typing and blinking
        loopTypewriter: 'typing-loop 8s steps(30, end) infinite', // Looping typing effect
      },
      keyframes: {
        typing: {
          'from': { width: '0ch' },
          'to': { width: '22ch' }, // Adjust based on text length
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
          '100%': { 'border-color': '#4299E1' }, // Cursor color
        },
        'typing-loop': {
          '0%, 100%': { width: '0ch' },
          '50%': { width: '22ch' },
        },
      },
    },
  },
  plugins: [],
};
