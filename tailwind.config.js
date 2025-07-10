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
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'gray-50': '#f9fafb',
        'gray-100': '#f3f4f6',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-400': '#9ca3af',
        'gray-500': '#6b7280',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}

