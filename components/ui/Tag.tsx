import React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "solid" | "press-red";
}

export const Tag: React.FC<TagProps> = ({
  children,
  className,
  variant = "outline",
}) => {
  const variantStyles = {
    outline: "border border-rule/30 text-ink/90 bg-transparent",
    solid: "bg-ink text-paper border border-ink",
    "press-red": "border border-press-red text-press-red bg-press-red/5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-[0.6875rem] font-mono tracking-widest uppercase rounded-[2px] transition-colors select-none",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
