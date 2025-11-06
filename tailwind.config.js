export default {
  files: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "font-handelson",
  ],
  theme: {
    extend: {
      fontFamily: {
        handelson: ["Handelson", "sans-serif"],
        donau: ["Donau", "sans-serif"],
      },
    },
  },
};
