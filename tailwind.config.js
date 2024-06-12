/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
        '21/10': ' 21 / 10',
        '18/5': ' 18 / 5',
      },
      fontFamily: {
        apple: ['San Francisco'],
        proxima: ['Proxima Nova'],
        poppins: ['Poppins'],
        neue: ['Neue'],
        neuenormal: ['Neue Normal']
      },
      colors: {
        'bg': '#F5F5F5',
      },
      screens: {
        'mobile': { 'min': '100px', 'max': '500px' },
        'tablet': { 'min': '500px', 'max': '750px' },
        'mini-laptop': { 'min': '750px', 'max': '874px' },
        'laptop': { 'min': '874px', 'max': '1900px' },
        'c-laptop': { 'min': '880px', 'max': '1080px' },

      },
      borderWidth: {
        DEFAULT: '0.5px',
        '0': '0.5px'
  
      },
    },
  },
  plugins: [],
}

