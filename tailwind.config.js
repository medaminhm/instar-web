/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

  
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryBlue: 'hsl(210, 49.40%, 31.00%)',
        hoverPrimaryBlue: 'rgb(57, 99, 141)',
        secondaryBlue: 'hsla(220, 90%, 68%, 1)',
        back: 'hsla(0, 0%, 0%, 1)',
        extraLightBlue: 'hsla(230, 100%, 95%, 1)',
        grey: 'rgb(153, 153, 153)',
        white: 'rgb(255, 255, 255)',
        lightGrey: 'hsla(0, 0%, 95%, 1)',
        transparent: 'hsla(9, 100%, 64%, 0)'
      },
      fontFamily:{
        fontFamily: {
          orbitron: ['Orbitron', 'sans-serif'],
        }
      }
    },
  },
  plugins: [],
}