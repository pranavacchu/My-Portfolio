import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-first": "moveVertical 20s ease infinite",
        "gradient-second": "moveInCircle 30s reverse infinite",
        "gradient-third": "moveInCircle 25s linear infinite",
        "gradient-fourth": "moveHorizontal 40s ease infinite",
        "gradient-flow": "moveGradient 3s linear infinite",
        "border-flow": "borderFlow 3s ease infinite",
        'gradient-x': 'moveGradient 3s linear infinite',
      },
      keyframes: {
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) scale(1.5)" },
          "50%": { transform: "translateX(50%) scale(1)" },
          "100%": { transform: "translateX(-50%) scale(1.5)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg) translate(50px) rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) translate(50px) rotate(-180deg) scale(1.2)" },
          "100%": { transform: "rotate(360deg) translate(50px) rotate(-360deg) scale(1)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%) scale(1)" },
          "50%": { transform: "translateY(50%) scale(1.2)" },
          "100%": { transform: "translateY(-50%) scale(1)" },
        },
        moveGradient: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        borderFlow: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "25%": {
            backgroundPosition: "100% 50%",
          },
          "50%": {
            backgroundPosition: "100% 100%",
          },
          "75%": {
            backgroundPosition: "0% 100%",
          }
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
        'heading': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
