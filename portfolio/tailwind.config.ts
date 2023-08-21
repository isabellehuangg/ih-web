import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: '#F7F7F1',
        green: "#00a144",
        lightgreen: "#B5D881",
        yellow: "#EDDa01"
      }
    },
  },
  plugins: [],
} satisfies Config;
