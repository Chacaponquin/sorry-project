import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        grayLight: "#b2bec3",
        grayStrong: "#636e72",
        grayExtraLight: "rgba(255, 255, 255, 0.125)",
        darkStrong: "#2e3141",
        darkLight: "#353849",
      },
      backgroundImage: {},
      fontFamily: {
        fontRegular: "Space Mono Regular",
        fontBold: "Space Mono Bold",
        fontItalic: "Space Mono Italic",
      },
      screens: {
        exsm: { max: "400px" },
        esm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
export default config;
