import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        beige: '#eff0ee',
        green: "#0a1975",
        lightgreen: "#617dd2",
        yellow: "#EDDa01",
      },
    },
  },
  plugins: [],
};

export default config;