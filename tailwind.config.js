/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your file extensions
  ],
  theme: {
    extend: {
      colors: {
        dark: "#37383C",
        green: "#7CFC0A",
        blue: "#73FAF9",
      },
    },
  },
  plugins: [],
}
