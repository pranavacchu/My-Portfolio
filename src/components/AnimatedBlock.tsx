import { CSSProperties, ReactNode } from "react";

interface AnimatedBlockProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

const getVariantStyles = (variant: AnimatedBlockProps["variant"]) => {
  switch (variant) {
    case "primary":
      return {
        background: "15 23 42",
        border: "6 182 212",
      };
    case "secondary":
      return {
        background: "15 23 42",
        border: "148 163 184",
      };
    default:
      return {
        background: "15 23 42",
        border: "255 255 255",
      };
  }
};

export const AnimatedBlock = ({
  children,
  className = "",
  variant = "default",
}: AnimatedBlockProps) => {
  const colors = getVariantStyles(variant);

  return (
    <div className="relative group">
      <div
        style={
          {
            "--background": colors.background,
            "--border": colors.border,
          } as CSSProperties
        }
        className={`
          relative overflow-hidden rounded-2xl
          bg-[rgb(var(--background))]
          p-6 transition-all duration-300
          hover:scale-[1.02]
          ${className}
        `}
      >
        {/* Content container */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Animated border */}
        <div className="absolute inset-0 -z-10 rounded-2xl transition-opacity duration-300">
          <div
            className="absolute inset-[1px] rounded-2xl"
            style={{
              background: `linear-gradient(90deg, 
                rgb(var(--border)/0.1),
                rgb(var(--border)/0.4) 25%,
                rgb(var(--border)/0.1) 50%,
                rgb(var(--border)/0.4) 75%,
                rgb(var(--border)/0.1)
              )`,
              backgroundSize: "200% 100%",
              animation: "moveGradient 3s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}; 