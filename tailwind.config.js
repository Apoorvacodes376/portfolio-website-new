/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: '#0f0f0f',
        light: '#ffffff',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
