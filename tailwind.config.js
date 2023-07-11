/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primarybg: "#ffffff",
        secondarybg: "#f1f1f1",
        color1: "#333333",
        color2: "#666666",
        color3: "#999999",
        accent1: "#3c9dcb",
        accent2: "#e07479",
        accent3: "#1a223f",
        accent4: "#333333",
        modalbg: "#f1f1f1",
        modaltext: "#333333",
        dark: {
          primarybg: "#150e1c",
          secondarybg: "#1a223f",
          color1: "#ffffff",
          color2: "#e07479",
          color3: "#fcd988",
          accent1: "#fcd988",
          accent2: "#e07479",
          accent3: "#3c9dcb",
          accent4: "#333333",
          modalbg: "#1a223f",
          modaltext: "#fcd988",
        },
      },
      rotate: {
        30: "30deg",
      },
    },
  },

  plugins: [],
  darkMode: "class",
};
