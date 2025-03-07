
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { Logo } from "@/components/ui/logo";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronLeft, Search, Settings, ShoppingBag, User, Filter, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/shop/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";
import { Product } from "@/types/product";

const mockUser = {
  name: "Alex Johnson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState(categories.find(c => c.id === id));
  
  useEffect(() => {
    if (id) {
      const categoryProducts = getProductsByCategory(id);
      setProducts(categoryProducts);
      setCategory(categories.find(c => c.id === id));
    }
  }, [id]);
  
  // Filter products based on search query
  const filteredProducts = searchQuery
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <AnimatedLayout withPadding={false}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/shop')}
              className="mr-3 p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <Logo size="sm" />
          </div>
          
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
          {/* Category Header */}
          {category && (
            <div className="relative rounded-xl overflow-hidden mb-8 h-40 md:h-60">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8">
                <h1 className="text-3xl md:text-4xl font-display text-white mb-2">{category.name}</h1>
                <p className="text-white/80 max-w-md">Explore our collection of premium {category.name.toLowerCase()}</p>
              </div>
            </div>
          )}
          
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text" 
                placeholder={`Search in ${category?.name || 'products'}...`}
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <ButtonCustom 
              variant="outline"
              className="h-12 gap-2"
              icon={<SlidersHorizontal className="h-4 w-4" />}
            >
              Filter
            </ButtonCustom>
            
            <ButtonCustom 
              variant="outline"
              className="h-12 gap-2"
              icon={<Filter className="h-4 w-4" />}
            >
              Sort
            </ButtonCustom>
          </div>

          {/* Products */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
              </h2>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="No products found" 
                  className="w-40 h-40 object-cover rounded-full mb-6 opacity-50"
                />
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or browse a different category
                </p>
                <ButtonCustom 
                  variant="primary" 
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </ButtonCustom>
              </div>
            )}
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
};

export default CategoryPage;
