/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CustomFont: ['Overlock SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

