/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   './components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',
  './public/index.html',
  './src/**/*.{html,js}',],
  theme: {
    extend:{
      backgroundImage: {
        'homepage-desktop': "url('./assets/home/background-home-desktop.jpg')",
        'homepage-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'homepage-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'destination-desktop': "url('./assets/home/destination-home-desktop.jpg')",
        'destination-mobile': "url('./assets/home/destination-home-mobile.jpg')",
        'destination-tablet': "url('./assets/home/destination-home-tablet.jpg')",
        'crew-desktop': "url('./assets/home/crew-home-desktop.jpg')",
        'crew-mobile': "url('./assets/home/crew-home-mobile.jpg')",
        'crew-tablet': "url('./assets/home/crew-home-tablet.jpg')",
        'technology-desktop': "url('./assets/home/technology-home-desktop.jpg')",
        'technology-mobile': "url('./assets/home/technology-home-mobile.jpg')",
        'technology-tablet': "url('./assets/home/technology-home-tablet.jpg')",

      },
      colors:{
        black: '#0B0D17',
        'gray':'#979797',
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
