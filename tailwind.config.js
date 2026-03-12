/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        navy: '#1a2d5a',
        'navy-dark': '#111e3c',
        blue: {
          DEFAULT: '#2b7de9',
          light: '#4fc3f7',
          bright: '#3b8ef0',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}