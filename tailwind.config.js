/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#FFFFFF",
        onPrimary: "#3620FF",
        Background: "#070B1D",
        'custom-blue': "rgba(54, 32, 255, 0.15)",
      },
      borderRadius: {
        '10': '10px',
      },
      blur: {
        '155': "155px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans"],
      },
    },
  },
  plugins: [],
};

