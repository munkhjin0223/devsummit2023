/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          container: {
              center: true,
              padding: {
                  DEFAULT: "1rem",
                  md: "1.5rem",
                  lg: "2rem",
              },
          },
      },
  },
  plugins: [],
};
