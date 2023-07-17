/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      scale: {
        '0': '0',
        '50': '.5',
        '100': '1',
        '150': '1.5',
        '200': '2',
      },
    },
  },
  plugins: [require("daisyui")],
}

