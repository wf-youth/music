module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      fontFamily: {
        blimone: ["Blimone", "Impact", "Helvetica Neue", "sans-serif"]
      },
      colors: {
        'theme-color': '#ee0a24',
        gold: '#ddaa71',
        'theme-dark': '#1a1a1a', //大背景颜色
        'theme-dark-box': '#242424'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
