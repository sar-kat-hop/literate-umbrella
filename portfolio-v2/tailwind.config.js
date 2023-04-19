/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/styles/*.{css, js, html}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')
  ],
}

