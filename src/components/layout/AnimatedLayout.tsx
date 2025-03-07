
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AnimatedLayoutProps {
  children: React.ReactNode;
  className?: string;
  withPadding?: boolean;
}

export function AnimatedLayout({ 
  children, 
  className,
  withPadding = true 
}: AnimatedLayoutProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("animate-fade-in");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("animate-fade-out");
    }
  }, [location, displayLocation]);

  return (
    <div
      className={cn(
        "min-h-screen w-full",
        withPadding && "px-4 pt-10 md:px-8 lg:px-12",
        transitionStage,
        className
      )}
      onAnimationEnd={() => {
        if (transitionStage === "animate-fade-out") {
          setTransitionStage("animate-fade-in");
          setDisplayLocation(location);
        }
      }}
    >
      {displayLocation.pathname === location.pathname && children}
    </div>
  );
}
