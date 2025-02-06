/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    screens: {
      'xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }
      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }
      'md': {'max': '900px'},
      // => @media (max-width: 900px) { ... }
      'base': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'sm': {'max': '412px'},
      // => @media (max-width: 412px) { ... }
      'xs': {'max': '356px'},
      // => @media (max-width: 356px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

