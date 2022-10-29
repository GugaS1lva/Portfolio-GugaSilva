/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        quicksand: "'Quicksand', sans-serif"
      },
    },
  },
  plugins: [],
}

// Cxperimental color palette
// #191522 | #202A3C | #32264F | #8257E6 | #2C1D51 | #46307D | #8C52FF | #CB6CE6 | #5E17EB
// #19152234 | #202A3C34 | #32264F34 | #8257E634 | #2C1D5134 | #46307D34 | #8C52FF34 | #cc6ce634 | #5e17eb34