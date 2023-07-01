/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#F3A427",
        secondary: "#6BCAD0",
        accent: "#7B61FF",
        dMode: "#13151F"
      }
    },
    screens: {
      "2xl": { "max": "1535px" },
      // => @media (max-width: 1535px) { ... }

      "xl": { "max": "1280px" },
      // => @media (max-width: 1280px) { ... }

      "lg": { "max": "1024px" },
      // => @media (max-width: 1024px) { ... }

      "md": { "max": "900px" },
      // => @media (max-width: 900px) { ... }

      "base": { "max": "639px" },
      // => @media (max-width: 639px) { ... }

      "sm": { "max": "412px" },
      // => @media (max-width: 412px) { ... }

      "xs": { "max": "280px" },
      // => @media (max-width: 280px) { ... }
    },
  },
  plugins: [
  ],
};
