import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
      
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px"
    },
    fontFamily:{
      primary: "var(--font-jetbrainsMono)"
    },
    extend: {
      colors:{
        primary: '#000',
        accent:{
          DEFAULT: "#ff74f1",
          hover: "#00e187"
        }
      },
      keyframes: {
        "border-animation": {
          "0%": { borderColor: "rgba(255, 116, 241, 1)", borderWidth: "2px" },
          "25%": { borderColor: "rgba(0, 225, 135, 1)", borderWidth: "4px" },
          "50%": { borderColor: "rgba(255, 116, 241, 1)", borderWidth: "2px" },
          "75%": { borderColor: "rgba(0, 225, 135, 1)", borderWidth: "4px" },
          "100%": { borderColor: "rgba(255, 116, 241, 1)", borderWidth: "2px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config