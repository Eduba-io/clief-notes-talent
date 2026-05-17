import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F1E8",
        creamDeep: "#EFE9D8",
        oxblood: "#5D2424",
        oxbloodDark: "#4A1C1C",
        charcoal: "#2A2A2A",
        warmGray: "#D9D1BE",
        warmGrayDark: "#7A725E",
        ink: "#1A1A1A",
        muted: "#2A2A2A",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "-apple-system", "Helvetica", "Arial", "sans-serif"],
        serif: ['"IBM Plex Serif"', "Georgia", '"Times New Roman"', "serif"],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', '"Courier New"', "Courier", "monospace"],
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
      },
      maxWidth: {
        prose: "68ch",
        wide: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
