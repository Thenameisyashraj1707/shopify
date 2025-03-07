
import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "../ui/button-custom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Logo } from "../ui/logo";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] w-full relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      {/* Floating product images */}
      <div className="absolute -top-10 right-[10%] w-40 h-40 rounded-lg shadow-xl transform rotate-12 animate-float opacity-60 hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Product" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="absolute top-[30%] left-[5%] w-32 h-32 rounded-lg shadow-xl transform -rotate-6 animate-float opacity-70 animation-delay-200 hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Product" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="absolute bottom-[15%] right-[15%] w-36 h-36 rounded-lg shadow-xl transform rotate-3 animate-float opacity-80 animation-delay-400 hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Product" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="animate-slide-up opacity-0 flex flex-col items-center text-center max-w-3xl z-10 px-6">
        <Logo size="lg" className="mb-8 animate-float" />
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-6">
          <span className="text-gradient">Redefining</span> the Shopping Experience
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
          AI-powered personalization, seamless experience, and curated collections that transform the way you shop.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <ButtonCustom 
            variant="primary" 
            size="lg"
            icon={<ShoppingBag className="w-5 h-5" />}
            iconPosition="left"
            onClick={() => navigate("/shop")}
            className="animate-pulse-subtle w-full sm:w-auto"
          >
            Shop Now
          </ButtonCustom>
          
          <ButtonCustom 
            variant="outline" 
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
            onClick={() => navigate("/login")}
            className="w-full sm:w-auto"
          >
            Learn More
          </ButtonCustom>
        </div>
        
        {/* Floating brands */}
        <div className="flex items-center justify-center gap-8 mt-16 text-muted-foreground/50">
          <p className="text-sm uppercase tracking-wider font-medium">Trusted by:</p>
          <div className="flex gap-8">
            <span className="text-lg font-semibold">Company A</span>
            <span className="text-lg font-semibold">Company B</span>
            <span className="text-lg font-semibold">Company C</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent -z-10" />
    </div>
  );
}
