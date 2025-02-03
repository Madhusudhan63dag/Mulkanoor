/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/homebanner.webp')",
      }
    },
  },
  // For Tailwind CSS v3.3+, you don't need the line-clamp plugin
  // as it's included by default. You can remove the plugins section entirely
  // plugins: []
}
