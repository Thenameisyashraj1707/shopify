
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "ghost" | "outline" | "subtle" | "link";
  size?: "default" | "sm" | "lg" | "icon" | "xl";
  isLoading?: boolean;
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  mobileFull?: boolean;
}

const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonCustomProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    isLoading = false, 
    asChild = false, 
    children, 
    icon, 
    iconPosition = "left",
    mobileFull = false,
    ...props 
  }, ref) => {
    const variantClasses = {
      primary: "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300 ease-out active:scale-[0.98]",
      default: "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 ease-out active:scale-[0.98]",
      outline: "border border-input bg-background shadow-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 ease-out active:scale-[0.98]",
      ghost: "hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 ease-out active:scale-[0.98]",
      subtle: "bg-muted/50 text-muted-foreground hover:bg-muted transition-all duration-300 ease-out active:scale-[0.98]",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-8 text-lg",
      xl: "h-14 px-10 text-xl",
      icon: "h-10 w-10 p-0",
    };

    const buttonContent = (
      <>
        {isLoading && (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {icon && iconPosition === "left" && !isLoading && <span className={cn("mr-2", isLoading && "hidden")}>{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      </>
    );

    return (
      <Button
        ref={ref}
        className={cn(
          "rounded-xl font-medium tracking-tight transition-all",
          variantClasses[variant],
          sizeClasses[size],
          mobileFull && "sm:w-auto w-full",
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {buttonContent}
      </Button>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };
