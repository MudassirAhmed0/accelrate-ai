/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include src/components
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // If using both app and src
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        deepblue: "var(--deep-blue)",
        royalblue: "var(--royal-blue)",
        lighterblue: "var(--lighter-blue)",

        // Secondary Colors
        charcoalgray: "var(--charcoal-gray)",
        lightgray: "var(--light-gray)",
      },
    },
  },
  plugins: [],
};
