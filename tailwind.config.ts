import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          950: "#0e130c",
          900: "#141a12",
          850: "#1b2118",
          800: "#222a1f",
          700: "#2d3729",
          600: "#3d4b38",
          500: "#55674e",
          400: "#758d6c",
          300: "#9ec297",
          200: "#c7dfc2",
          100: "#eaf3e7",
          50: "#f4f7f0",
        },
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        editorial: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Instrument Sans'", "system-ui", "-apple-system", "sans-serif"],
        serif: ["'Fraunces'", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest: "0.2em",
        ultra: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
