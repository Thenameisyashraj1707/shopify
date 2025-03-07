
import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "../ui/button-custom";
import { ArrowRight } from "lucide-react";
import { Logo } from "../ui/logo";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] w-full">
      <div className="animate-slide-up opacity-0 flex flex-col items-center text-center max-w-3xl">
        <Logo size="lg" className="mb-8 animate-float" />
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-4">
          <span className="text-gradient">Redefining</span> the Shopping Experience
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
          AI-powered personalization, seamless experience, and curated collections that transform the way you shop.
        </p>
        
        <ButtonCustom 
          variant="primary" 
          size="lg"
          icon={<ArrowRight className="w-5 h-5" />}
          iconPosition="right"
          onClick={() => navigate("/login")}
          className="animate-pulse-subtle"
        >
          Shop Now
        </ButtonCustom>
      </div>

      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent -z-10" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl -z-20" />
    </div>
  );
}
