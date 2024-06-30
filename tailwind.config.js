/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        border: "var(--border)",
        borderNav: "var(--borderNav)",
        title: "var(--title)",
        subtitle: "var(--subtitle)",
        bgHeader: "var(--bgHeader)",
        mainColor: "var(--mainColor)",
        mainButtonColor: "var(--mainButtonColor)",
        borderCard: "var(--borderCard)",
      },
      spacing: {
        containerPadding: "var(--containerPadding)",
        containerPaddingMaxWidth_1000: "var(--containerPaddingMaxWidth_1000)",
        containerPaddingMaxWidth_600: "var(--containerPaddingMaxWidth_600)",
      },
      animation: {
        popup: "animePopup 0.77s 1",
      },
      keyframes: {
        animePopup: {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
