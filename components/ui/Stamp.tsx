import React from "react";
import { cn } from "@/lib/utils";

interface StampProps {
  children?: React.ReactNode;
  label?: string;
  sublabel?: string;
  variant?: "red" | "ink";
  shape?: "rect" | "circle";
  rotation?: number;
  className?: string;
}

export const Stamp: React.FC<StampProps> = ({
  children,
  label,
  sublabel,
  variant = "red",
  shape = "rect",
  rotation = -3,
  className,
}) => {
  const isRed = variant === "red";
  const colorClass = isRed ? "text-press-red border-press-red" : "text-ink border-ink";

  if (shape === "circle") {
    return (
      <div
        style={{ transform: `rotate(${rotation}deg)` }}
        className={cn(
          "inline-flex flex-col items-center justify-center w-28 h-28 rounded-full border-2 border-dashed p-2 transition-transform duration-200 select-none",
          colorClass,
          className
        )}
      >
        <div className="w-full h-full rounded-full border border-solid flex flex-col items-center justify-center p-1 text-center">
          <span className="text-[0.625rem] font-mono tracking-widest uppercase opacity-80">
            {sublabel || "VERIFIED"}
          </span>
          <span className="text-[0.75rem] font-mono font-bold tracking-tight uppercase leading-tight my-0.5">
            {label || children}
          </span>
          <span className="text-[0.5625rem] font-mono tracking-widest uppercase opacity-75">
            ★ OFFICIAL ★
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={cn(
        "inline-flex flex-col items-center justify-center border-2 border-solid px-3 py-1.5 rounded-[2px] transition-transform duration-200 select-none",
        colorClass,
        className
      )}
    >
      <div className="border border-dashed px-2 py-0.5 text-center flex flex-col items-center">
        {sublabel && (
          <span className="text-[0.5625rem] font-mono tracking-widest uppercase opacity-75">
            {sublabel}
          </span>
        )}
        <span className="text-xs font-mono font-bold tracking-widest uppercase">
          {label || children}
        </span>
      </div>
    </div>
  );
};
