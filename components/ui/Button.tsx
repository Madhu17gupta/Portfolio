import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "press-red" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      type = "button",
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "px-3 py-1.5 text-xs font-mono tracking-wider",
      md: "px-4 py-2.5 text-xs sm:text-sm font-mono tracking-widest",
      lg: "px-6 py-3.5 text-sm font-mono tracking-widest",
    };

    const variantStyles = {
      primary:
        "bg-ink text-paper border border-ink hover:bg-paper hover:text-ink active:translate-y-[1px]",
      outline:
        "bg-transparent text-ink border border-rule hover:bg-ink hover:text-paper active:translate-y-[1px]",
      "press-red":
        "bg-press-red text-paper border border-press-red hover:bg-transparent hover:text-press-red active:translate-y-[1px]",
      ghost:
        "bg-transparent text-ink hover:bg-ink/5 border border-transparent",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center font-mono uppercase rounded-[2px] transition-all duration-150 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
