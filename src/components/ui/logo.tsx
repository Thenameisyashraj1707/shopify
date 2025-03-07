
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <svg
        className={cn("text-primary", sizeClasses[size])}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="6" width="20" height="20" rx="10" fill="currentColor" />
        <path
          d="M16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6ZM13.5 19.5L10 16L11.5 14.5L13.5 16.5L19.5 10.5L21 12L13.5 19.5Z"
          fill="white"
        />
      </svg>
      <span className="ml-2 font-display font-medium text-lg tracking-tight">Elegance</span>
    </div>
  );
}
