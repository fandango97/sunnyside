/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'underline_y' : 'hsla(51, 100%, 49%, 40%)',
        'underline_p' : 'hsla(7, 99%, 70%, 40%)',
      },

      backgroundColor: {
        'footer-color':'#89D5AF'
      },
      backgroundImage: {
        'landing-image': "url('/images/mobile/image-gallery-orange.jpg')",
      },
      fontFamily: {
        'bar': 'Barlow',
        'fr': 'Fraunces',
      },
      screens : {
        desktop : '1440px',
        mobile : '375px'
      },
    },
  },
  plugins: [],
}
