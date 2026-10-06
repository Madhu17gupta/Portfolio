import React from "react";
import { cn } from "@/lib/utils";

interface KickerProps {
  children: React.ReactNode;
  number?: string;
  className?: string;
}

export const Kicker: React.FC<KickerProps> = ({
  children,
  number,
  className,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.6875rem] sm:text-xs tracking-[0.2em] uppercase text-graphite",
        className
      )}
    >
      {number && (
        <>
          <span className="font-semibold text-press-red">{number}</span>
          <span className="opacity-40">/</span>
        </>
      )}
      <span>{children}</span>
    </div>
  );
};
