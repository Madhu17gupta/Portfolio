import React from "react";
import { cn } from "@/lib/utils";

interface RuleProps {
  className?: string;
  variant?: "single" | "double" | "thick" | "dotted";
}

export const Rule: React.FC<RuleProps> = ({ className, variant = "single" }) => {
  if (variant === "double") {
    return (
      <div className={cn("w-full py-1", className)}>
        <hr className="w-full border-t border-rule opacity-90 mb-[2px]" />
        <hr className="w-full border-t border-rule opacity-90" />
      </div>
    );
  }

  if (variant === "thick") {
    return (
      <hr
        className={cn(
          "w-full border-t-2 sm:border-t-3 border-rule opacity-100",
          className
        )}
      />
    );
  }

  if (variant === "dotted") {
    return (
      <hr
        className={cn(
          "w-full border-t border-dotted border-rule opacity-60",
          className
        )}
      />
    );
  }

  return (
    <hr
      className={cn("w-full border-t border-rule opacity-80", className)}
    />
  );
};
