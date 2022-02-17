module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'gray-eli': {
        1: 'rgb(41, 41, 46)',
        2: 'rgb(32, 32, 36)',
      },
      'purple-eli': {
        1: 'rgb(140, 95, 250)',
        2: 'rgb(130, 87, 230)',
        3: 'rgb(125, 80, 200)',
        4: 'rgb(120, 70, 150)',
        5: 'rgb(100, 50, 100)',
      }
      
    },
    minHeight: {
      '1/2': '50%',
      '1/3': '33.33%',
    }
  },
  plugins: [],
}
