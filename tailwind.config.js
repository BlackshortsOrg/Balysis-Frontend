/** @type {import('tailwindcss').Config} */
import Icon from './src/Assets/Icon';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      //New Styling starts here!
      colors:{
        //New Color scheme starts here!
        blue:{
          primary: '#1890FF',
          balysisblue:'#41afff',
        },
        green:{

        },
        gray:{
          buttonSlider: '#FFFFFF80',
          lightGray: '#696969'
        }
        //...etc add any new color in the same format
      },

    fontFamily: {
      //New font starts here!
      montserrat: ['Montserrat','Arial', 'sans-serif']
    }
    }
  },
  plugins: [],
}

