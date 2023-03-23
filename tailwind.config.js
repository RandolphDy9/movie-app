/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"]
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(12rem, 1fr))'
      },
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        gradient1: 'var(--gradient1)',
        gradient2: 'var(--gradient2)',
      }
    },
  },
  plugins: [],
}
