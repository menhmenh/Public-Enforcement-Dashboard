/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      navy: '#001f3f',
      'navy-light': '#1a3a52',
      teal: '#00bcd4',
      'teal-light': '#4dd0e1',
      grey: '#f5f5f5',
      'grey-dark': '#757575',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
