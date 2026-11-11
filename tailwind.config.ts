import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F33",
        brand: "#064A70",
        gold: { DEFAULT: "#B08D3C", dark: "#8F7230", soft: "#F3ECDA" },
        mist: "#F4F6F8",
        line: "#E1E6EB",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        urdu: ["var(--font-urdu)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
