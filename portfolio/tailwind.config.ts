import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: '#eff0ee',
        green: "#0a1975",
        lightgreen: "#617dd2",
        yellow: "#EDDa01"
      }
    },
  },
  plugins: [],
} satisfies Config;
