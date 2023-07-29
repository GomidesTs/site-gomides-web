/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      blue: {
        500: '#0E1C43'
      },
      white: {
        300: '#EFF1F4',
        100: '#DFE1E3'
      }
    }
  },
  plugins: []
};
