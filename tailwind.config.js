module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('../src/images/home/background-home-desktop.jpg')",
        'home-tablet': "url('../src/images/home/background-home-tablet.jpg')",
        'home-mobile': "url('../src/images/home/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
