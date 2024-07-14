/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          color: "var(--bg-color)",
        },
        hover: {
          color: "var(--hover-color)",
        },
      },
      textColor: {
        skin: {
          color: "var(--bg-text)",
        },
        hover:{
          color:"var(--text-primary-color)"
        }
      },
    },
  },
  plugins: [],
};
