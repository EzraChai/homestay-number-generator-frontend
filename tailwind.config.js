module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],

  daisyui: {
     themes: [
      'fantasy', // first one will be the default theme
      'dark',
      'lofi',
      'luxury'
    ],
  }
}
