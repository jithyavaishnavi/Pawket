import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E99C1A",
          50: "#FDF6E8",
          100: "#FBECD1",
          200: "#F7D9A3",
          300: "#F3C675",
          400: "#EFB347",
          500: "#E99C1A",
          600: "#D4841A",
          700: "#A66815",
          800: "#784C10",
          900: "#4A300A",
          950: "#2E1E06",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#F4B942",
          50: "#FEF9ED",
          100: "#FDF2DB",
          200: "#FBE5B7",
          300: "#F9D893",
          400: "#F7CB6F",
          500: "#F4B942",
          600: "#E99C1A",
          700: "#B87815",
          800: "#875910",
          900: "#563A0A",
          950: "#342306",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#D4841A",
          50: "#F9F0E6",
          100: "#F3E1CD",
          200: "#E7C39B",
          300: "#DBA569",
          400: "#CF8737",
          500: "#D4841A",
          600: "#B06F15",
          700: "#8C5A11",
          800: "#68440D",
          900: "#442F09",
          950: "#2A1D05",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
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
