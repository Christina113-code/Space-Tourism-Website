/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   './components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',
  './public/index.html',
  './src/**/*.{html,js}',],
  theme: {
    extend:{
      colors:{
        black: '#0B0D17',
        'gray':'rgba(255, 255, 255, 0.04)',
         'light-gray': '#D0D6F9',
      },
     
      fontFamily: {
        'barlow':['Barlow', 'sans-serif'],
        'bellefair':['Bellefair','sans-serif'],
        'condensed':['Barlow Condensed','sans-serif'],
      }
    },
   
  },
  plugins: [],
}
