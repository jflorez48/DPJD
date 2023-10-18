/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {'color-pastor': '#233487', 'color-titulo2': '#0F1E83', 'color-btn1':'#2E46B9','color-btn2':'#233487'},
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
