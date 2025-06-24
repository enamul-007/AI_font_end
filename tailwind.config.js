/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
darkMode:"class",
  theme: {
    extend: {
      colors: {
        gray_color: "var(--gray_color)",
        black_color: "var(--black_color)",
        white_color: "var(--white_color)",
        whaite_f8f7f6: "var(--whaite_f8f7f6)",
      },

      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
