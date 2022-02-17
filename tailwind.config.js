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
        1: 'rgb(145, 120, 255)',
        2: 'rgb(130, 105, 240)',
        3: 'rgb(115, 90, 230)',
        4: 'rgb(100, 75, 210)',
        5: 'rgb(85, 60, 190)',
      }
      
    },
    minHeight: {
      '1/2': '50%',
      '1/3': '33.33%',
    }
  },
  plugins: [],
}
