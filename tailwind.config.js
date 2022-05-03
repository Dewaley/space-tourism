module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('../src/images/home/background-home-desktop.jpg')",
        'home-tablet': "url('../src/images/home/background-home-tablet.jpg')",
        'home-mobile': "url('../src/images/home/background-home-mobile.jpg')",
        'destination-desktop':
          "url('../src/images/destination/background-destination-desktop.jpg')",
        'destination-tablet':
          "url('../src/images/destination/background-destination-desktop.jpg')",
        'destination-mobile':
          "url('../src/images/destination/background-destination-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
