/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  safelist: ["bg-amber", "bg-moss", "bg-cyan", "bg-bay"],
  theme: {
    extend: {
      colors: {
        night: "#091114",
        ink: "#0d1b1f",
        panel: "#102328",
        mist: "#dce8df",
        moss: "#8bd49c",
        cyan: "#65d8df",
        bay: "#6e91b9",
        amber: "#eacb8f",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 40px rgba(101, 216, 223, 0.12)",
      },
    },
  },
  plugins: [],
};
