/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      gray: {
        ...colors.gray,
        'primary-gray': '#2c465b',
        'secondary-gray': '#e9ecf3',
        'option-gray': '#677294',
      },
      blue: {
        ...colors.blue,
        'secondary-bg-color': '#f2f9ff',
        'primary-blue': '#2c83fb',
        'secondary-blue': '#385bff',
      },
    },
    fontFamily: {
      'DM': 'DM Sans, sans-serif',
      'PJ': 'Plus Jakarta Sans, sans-serif',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
