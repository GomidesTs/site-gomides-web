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
      black: {
        500: '#060E14'
      },
      blue: {
        500: '#0E1C43',
        400: '#314D9F',
        300: '#2E53C1',
        100: '#BEC2CF'
      },
      gray: {
        500: '#23252C',
        300: '#4C5257'
      },
      red: {
        500: '#DE2B1B'
      },
      white: {
        300: '#EFF1F4',
        100: '#DFE1E3'
      }
    }
  },
  plugins: []
};
