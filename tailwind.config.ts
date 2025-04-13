
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#23C7C2',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
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
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "0.3",
            filter: "brightness(1)"
          },
          "50%": { 
            opacity: "0.6",
            filter: "brightness(1.5)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "first": {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(5%, -5%) scale(1.05)" },
          "66%": { transform: "translate(-5%, 5%) scale(0.95)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
        "second": {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(-5%, 5%) scale(1.05)" },
          "66%": { transform: "translate(5%, -5%) scale(0.95)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
        "third": {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(-5%, -5%) scale(1.05)" },
          "66%": { transform: "translate(5%, 5%) scale(0.95)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
        "fourth": {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(5%, 5%) scale(1.05)" },
          "66%": { transform: "translate(-5%, -5%) scale(0.95)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
        "fifth": {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(5%, 0%) scale(1.05)" },
          "66%": { transform: "translate(-5%, 0%) scale(0.95)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "first": "first 8s ease-in-out infinite",
        "second": "second 8s ease-in-out infinite",
        "third": "third 8s ease-in-out infinite",
        "fourth": "fourth 8s ease-in-out infinite",
        "fifth": "fifth 8s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/lovable-uploads/516bfe45-fbb1-4695-a85e-145d023377f2.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
