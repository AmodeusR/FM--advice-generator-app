/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily:{
        sans: "Manrope, sans-serif"
      },
      colors: {
        grayblue: {
          200: "hsl(217, 19%, 38%)",
          400: "hsl(217, 19%, 24%)",
          700: "hsl(218, 23%, 16%)"
        },
        cyan: {
          100: "hsl(193, 38%, 86%)"
        },
        neogreen: {
          300: "hsl(150, 100%, 66%)"
        }
      },
      letterSpacing: {
        widest: ".5em"
      },
      boxShadow: {
        hoverShadow: "0 0 45px 0 rgba(0, 0, 0, 0.3)"
      }
    },
  },
  plugins: [],
}
