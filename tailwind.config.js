/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ebony:"#2E323B",
        bruning:"#CC7C64",
        background:"#020F13",
        yellow:"#EEA736",
        dutch:"#F0DFBB",
        raven:"#6C757D",
        whiteSmoke:"#F6F6F6",
        white:"#FFFFFF"
      },
      fontFamily:{
        kontes: ["kontes-Compressed","sans-serif"],
        DMMono: ["DMMono", "sans-serif"],
        DMMonoLight: ["DMMono-Light", "sans-serif"],
      }
    },
  },
  plugins: [],
}

