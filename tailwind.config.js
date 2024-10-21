/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
          opensans: ["Open Sans", "sans-serif"],
          nunito: ["Nunito", "sans-serif"],
          arima: ["Arima", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          merriweather: ["Merriweather", "sans-serif"],
          robot: ["Roboto", "sans-serif"],
          nunitosans: ["Nunito Sans", "sans-serif"],
          worksans: ["Work Sans", "sans-serif"],
          schnebelsanspro: ["Schnebel Sans Pro", "sans-serif"],
      },
      colors: {
          'custom': {
              'blue': {
                  100: '#70ACE0',
                  101: '#0074AF',
                  102: '#3350B9',
                  103: '#E5F1FF',
                  104: '#4F8AD7',
                  105: '#263C8B',
                  106: '#BFDBFF',
            },
              'black': {
                 100: '#343434',
                 101: '#575757',
                 102: '#040D12',
            },
              'red': {
                 100: '#F53636',
                 101: '#960000',  
                 102: '#F64343',            }
          }
      }
  },
  },
  plugins: [],
}

