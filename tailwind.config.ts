import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 40%, rgba(217, 217, 217, 0.2) 20%)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#FFD700", // Gold (Example, replace with extracted colors)
        secondary: "#FF4500", // Orange-Red
        background: "#1A1A1A", // Dark Gray
        accent: "#00BFFF", // Deep Sky Blue
      },
      fontSize: {
        xs: "5px",
        sm: "19px",
        base: "28px",
        lg: "39px",
        xl: "53px",
        "2xl": "87px",
        "3xl": "178px",
        "4xl": "482px",
      },
    },
  },
  plugins: [],
} satisfies Config;
