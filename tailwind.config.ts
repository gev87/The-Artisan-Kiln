import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        kiln: {
          paper: "#f6ecd8",
          panel: "#fff7e6",
          ink: "#16130f",
          line: "#201a14",
          navy: "#25365f",
          teal: "#548e83",
          terracotta: "#c77551",
          gold: "#d4a842",
          clay: "#ead7b9"
        }
      },
      fontFamily: {
        display: ["Arial Narrow", "Impact", "system-ui", "sans-serif"],
        body: ["Trebuchet MS", "Arial", "system-ui", "sans-serif"]
      },
      boxShadow: {
        hand: "4px 4px 0 #201a14"
      }
    }
  },
  plugins: []
};

export default config;
