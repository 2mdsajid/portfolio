/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primarybg: '#150e1c',
        secondarybg: '#3c9dcb',
        bgcolor1: '#fcd988',
        bgcolor2: '#e07479',
        bgcolor3: '#181e34',
        bgcolor4: '#181e34',
      },
      colors: {
        color1: '#fcd988',
        color2: '#e07479',
        color3: '#181e34',
        color4: '#181e34',
        color5: '#1a223f',
        color6: '#241a2e',
      },
      rotate: {
        '30': '30deg',
      },
    },
  },
  
  plugins: [],
}
