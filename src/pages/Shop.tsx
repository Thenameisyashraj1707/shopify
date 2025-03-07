
import { useState } from "react";
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { Logo } from "@/components/ui/logo";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Settings, ShoppingBag, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/shop/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";

const mockUser = {
  name: "Alex Johnson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const products = selectedCategory 
    ? getProductsByCategory(selectedCategory)
    : [];
    
  // Filter products based on search query if there is one
  const filteredProducts = searchQuery
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <AnimatedLayout withPadding={false}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Logo size="sm" />
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-primary text-[10px]">
                3
              </Badge>
            </button>
            
            <button className="p-2 rounded-full hover:bg-secondary transition-colors">
              <ShoppingBag className="h-5 w-5 text-muted-foreground" />
            </button>
            
            <button className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Settings className="h-5 w-5 text-muted-foreground" />
            </button>
            
            <Avatar>
              <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          {/* Search bar */}
          <div className="relative mb-8 max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="What do you want to shop?" 
              className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="mb-10">
            <h2 className="text-2xl font-display mb-6 text-center">Browse Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all
                    ${selectedCategory === category.id 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-primary/30 hover:bg-primary/5'}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="text-3xl mb-2">{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products or placeholder */}
          {selectedCategory ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                {selectedCategory && (
                  <ButtonCustom 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Clear Selection
                  </ButtonCustom>
                )}
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or browse a different category
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <h3 className="text-xl font-medium mb-2">Select a category to start shopping</h3>
              <p className="text-muted-foreground mb-6">
                Browse through our curated collections or search for specific items
              </p>
              
              <ButtonCustom variant="primary" size="lg">
                Explore Featured Products
              </ButtonCustom>
            </div>
          )}
        </div>
      </main>
    </AnimatedLayout>
  );
};

export default Shop;
