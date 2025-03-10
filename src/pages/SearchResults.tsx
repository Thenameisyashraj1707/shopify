
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { Input } from "@/components/ui/input";
import { ButtonCustom } from "@/components/ui/button-custom";
import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { Search, ArrowLeft } from "lucide-react";

// Category-specific placeholder images - same as in other components for consistency
const categoryPlaceholders = {
  "electronics": "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=600&auto=format&fit=crop",
  "men-fashion": "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop",
  "women-fashion": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop",
  "home-kitchen": "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=600&auto=format&fit=crop",
  "beauty-personal-care": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop",
  "toys-games": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop",
};

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Get the search query from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    setSearchQuery(query);
  }, [location.search]);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <AnimatedLayout>
      <div className="flex items-center gap-4 mb-6">
        <ButtonCustom 
          variant="outline" 
          size="icon"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
        </ButtonCustom>
        <h1 className="text-3xl font-display">Search Results</h1>
      </div>

      <form onSubmit={handleSearch} className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          type="text" 
          placeholder="Search for products" 
          className="w-full pl-10 pr-4 h-12 bg-white/80 border-border"
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

      {filteredProducts.length > 0 ? (
        <>
          <p className="mb-4 text-muted-foreground">Found {filteredProducts.length} results for "{searchQuery}"</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">No products found for "{searchQuery}"</p>
          <ButtonCustom onClick={() => navigate('/shop')}>
            Browse All Products
          </ButtonCustom>
        </div>
      )}
    </AnimatedLayout>
  );
};

export default SearchResults;
