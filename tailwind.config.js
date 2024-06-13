import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'lime': '#DAFF7D',
      'blueElectric': '#4056F4',
      'blueMidnight': '#171738',
      'orange': '#FF4A1C',
      'pink': '#FFAFC5',
      'white': '#FFFFFF',
      'grey': '#F4F4F4',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}
