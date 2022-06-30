module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hansief: ["Hansief", "sans-serif"],

      },
      colors: {
        'barrel-green': '#0E3A43'

      }
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
