module.exports = {
  content: [
    "./components//*.{js,vue,ts}",
    "./layouts//.vue",
    "./pages/**/.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["sans-serif", "Droid Sans"],
        kai: ["STKaiti", "DFKai-SB"],
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
};
