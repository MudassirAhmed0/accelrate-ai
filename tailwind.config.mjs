/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "var(--deep-blue)", // Deep Blue
          teal: "var(--electric-teal)", // Electric Teal
          bg: "var(--primary-bg)", // Charcoal Gray or Black
        },
        secondary: {
          gray: "var(--charcoal-gray)", // Charcoal Gray
          light: "var(--light-gray)", // Light Gray
          white: "var(--white)", // White
          bg: "var(--secondary-bg)", // Light Gray (for content-heavy sections)
        },
      },
    },
  },
  plugins: [],
};
