import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showText?: boolean;
}

export function Logo({ className, variant = "gold", showText = true }: LogoProps) {
  const colorMap = {
    light: "text-white stroke-white",
    dark: "text-foreground stroke-foreground",
    gold: "text-primary stroke-primary",
  };

  const textColor = variant === "light" ? "text-white" : variant === "gold" ? "text-primary" : "text-foreground";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Skyline Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("flex-shrink-0", colorMap[variant])}
      >
        <path
          d="M10 35V10H16V35M16 35V20H24V35M24 35V25H30V35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="miter"
        />
        <line x1="5" y1="35" x2="35" y2="35" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-heading text-xl leading-none tracking-widest uppercase", textColor)}>
            Danielle Corrêa
          </span>
          <span className={cn("text-[10px] tracking-widest mt-1 uppercase", textColor, "opacity-80")}>
            Creci 12194
          </span>
        </div>
      )}
    </div>
  );
}
