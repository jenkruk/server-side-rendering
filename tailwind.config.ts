import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: "rgb(var(--darkest))",
        lightest: "rgb(var(--lightest))",
        transparent: "rgb(var(--lightest), 0.5)",
        prehover: "rgb(var(--lightest), 0)",
        amex: "rgb(var(--amex))",
        accent: "rgb(var(--accent))",
        hover: "rgb(var(--hover))",
        gray: "rgb(var(--gray))",
        line: "rgb(var(--line))",
      },
      boxShadow: {
        "shadow-bottom": "0 4px 6px rgb(var(--darkest))",
        "shadow-top": "0 -4px 6px rgb(var(--darkest))",
        hover: "0 4px 6px rgb(var(--hover))",
      },
      textShadow: {
        sm: "0 1px 1px rgb(var(--hover))",
        md: "0 2px 4px rgb(var(--hover))",
        lg: "0 8px 16px rgb(var(--hover))",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["hover"],
      borderOpacity: ["hover"],
      textColor: ["hover"],
      backgroundColor: ["hover", "group-hover"],
      boxShadow: ["hover"],
      opacity: ["hover"],
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: Function;
      theme: Function;
    }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
export default config;
