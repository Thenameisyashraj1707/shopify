
import { useState } from "react";
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { Logo } from "@/components/ui/logo";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Settings, ShoppingBag, User, ArrowRight, LogIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/shop/ProductCard";
import { categories, getProductById } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const mockUser = {
  name: "Alex Johnson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};

const Shop = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for: ${searchQuery}`);
      // In a real app, we would navigate to search results page
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleNotificationsClick = () => {
    toast.info("Notifications page coming soon!");
    // navigate('/notifications');
  };

  const handleCartClick = () => {
    toast.info("Shopping cart page coming soon!");
    // navigate('/cart');
  };

  const handleSettingsClick = () => {
    toast.info("Settings page coming soon!");
    // navigate('/settings');
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      toast.info("Profile page coming soon!");
      // navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <AnimatedLayout withPadding={false}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo size="sm" onClick={() => navigate('/')} className="cursor-pointer" />
          
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full hover:bg-secondary transition-colors relative"
              onClick={handleNotificationsClick}
            >
              <Bell className="h-5 w-5 text-muted-foreground" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-primary text-[10px]">
                3
              </Badge>
            </button>
            
            <button 
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              onClick={handleCartClick}
            >
              <ShoppingBag className="h-5 w-5 text-muted-foreground" />
            </button>
            
            <button 
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              onClick={handleSettingsClick}
            >
              <Settings className="h-5 w-5 text-muted-foreground" />
            </button>
            
            {isLoggedIn ? (
              <Avatar className="cursor-pointer" onClick={handleProfileClick}>
                <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            ) : (
              <button 
                className="flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full hover:bg-secondary transition-colors"
                onClick={() => navigate('/login')}
              >
                <LogIn className="h-4 w-4" />
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          {/* Search bar */}
          <form onSubmit={handleSearch} className="relative mb-8 max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="What do you want to shop?" 
              className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary/80 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>

          {/* Categories */}
          <div className="mb-10">
            <h2 className="text-2xl font-display mb-6 text-center">Browse Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex flex-col items-center rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02] h-full"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="w-full aspect-square overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="w-full bg-white p-4 text-center">
                    <h3 className="font-medium">{category.name}</h3>
                    <span className="inline-flex items-center text-xs text-primary mt-1">
                      Explore <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display">Featured Products</h2>
              <ButtonCustom 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/shop')}
              >
                View All
              </ButtonCustom>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
              {/* Get actual products from the data for featured section */}
              {[
                getProductById("e1"), 
                getProductById("m1"), 
                getProductById("w1"), 
                getProductById("h1")
              ].map(product => (
                product && (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                  />
                )
              ))}
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="rounded-xl overflow-hidden relative mb-10 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
              alt="Special Offer" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent flex flex-col justify-center pl-10">
              <h3 className="text-white text-3xl font-display mb-2">Summer Collection</h3>
              <p className="text-white/90 mb-4 max-w-md">Discover our latest arrivals and enjoy exclusive discounts on selected items.</p>
              <ButtonCustom 
                variant="primary" 
                className="bg-white text-primary hover:bg-white/90 w-auto inline-flex"
                onClick={() => navigate('/shop')}
              >
                Shop Now
              </ButtonCustom>
            </div>
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
};

export default Shop;
