module.exports = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
       },
       textColor: {
        "purple": "#371a45",
        "red": '#df0606',
      },
      screens: {
        'xs': '420px',
      }
    },
  },
  plugins: [],
}
