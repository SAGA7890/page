module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif", "serif"],     // 👈 heading
        mont: ["Montserrat", "sans-serif"] // 👈 description
      },
    },
  },
  plugins: [],
};
