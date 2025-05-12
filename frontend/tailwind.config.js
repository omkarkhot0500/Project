/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gdsc-blue": "#4884ed",
        "gdsc-red": "#db3236",
        "gdsc-green": "#0F9D58",
        "gdsc-yellow": "#f4c20c",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      spacing: {
        gap: "2rem",
      },
    },
  },
  plugins: [],
};
