
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Product, Category } from "@/types/product";
import { ShoppingBag, Star, Heart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product | Category;
  isCategory?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isCategory = false }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleViewDetails = () => {
    if (isCategory) {
      navigate(`/category/${product.id}`);
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isCategory) {
      navigate(`/product/${product.id}`);
    }
  };

  // For category cards
  if (isCategory) {
    return (
      <Card 
        className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col group cursor-pointer"
        onClick={handleViewDetails}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <ButtonCustom 
              variant="primary" 
              size="sm" 
              className="bg-white/90 text-primary hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                handleViewDetails();
              }}
              icon={<Eye size={16} />}
              iconPosition="left"
            >
              View Category
            </ButtonCustom>
          </div>
        </div>
        
        <CardContent className="p-4 flex-grow">
          <h3 className="font-medium text-center">{product.name}</h3>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <ButtonCustom 
            variant="primary" 
            size="sm" 
            className="w-full"
            onClick={handleViewDetails}
            icon={<ShoppingBag size={16} />}
            iconPosition="left"
          >
            Explore Products
          </ButtonCustom>
        </CardFooter>
      </Card>
    );
  }

  // For product cards (original implementation)
  const productItem = product as Product;
  
  return (
    <Card 
      className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col group cursor-pointer"
      onClick={handleViewDetails}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={productItem.image} 
          alt={productItem.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {!productItem.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold px-3 py-1 bg-red-500 rounded-full text-sm">
              Out of Stock
            </span>
          </div>
        )}
        
        {productItem.inStock && (
          <>
            <button 
              className={`absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} hover:bg-white z-10`}
              onClick={handleAddToFavorites}
            >
              <Heart 
                size={18} 
                className={isFavorite ? "text-red-500 fill-red-500" : "text-gray-700 hover:text-red-500 transition-colors"} 
              />
            </button>
            
            <div className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} z-10`}>
              <div className="flex gap-2">
                <ButtonCustom 
                  variant="primary" 
                  size="sm" 
                  className="w-full bg-white/90 text-primary hover:bg-white"
                  onClick={handleQuickView}
                  icon={<Eye size={16} />}
                  iconPosition="left"
                >
                  Quick View
                </ButtonCustom>
                <ButtonCustom 
                  variant="primary" 
                  size="sm" 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.success(`${productItem.name} added to cart!`);
                  }}
                  icon={<ShoppingBag size={16} />}
                  iconPosition="left"
                >
                  Add to Cart
                </ButtonCustom>
              </div>
            </div>
          </>
        )}
        
        {/* Discount/New badges if needed */}
        {productItem.id.startsWith('e') && (
          <Badge className="absolute top-3 left-3 bg-primary hover:bg-primary">New</Badge>
        )}
        
        {productItem.id.startsWith('m') && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">-20%</Badge>
        )}
      </div>
      
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center space-x-1 mb-1">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < Math.floor(productItem.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({productItem.numReviews})</span>
        </div>
        
        <h3 className="font-medium line-clamp-2 mb-1 transition-colors group-hover:text-primary">
          {productItem.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <p className="font-semibold text-primary">${productItem.price.toFixed(2)}</p>
          {productItem.id.startsWith('m') && (
            <p className="text-sm line-through text-muted-foreground">${(productItem.price * 1.2).toFixed(2)}</p>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
          {productItem.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <ButtonCustom 
          variant={productItem.inStock ? "primary" : "outline"} 
          size="sm" 
          className="w-full"
          onClick={handleViewDetails}
          icon={<ShoppingBag size={16} />}
          iconPosition="left"
          disabled={!productItem.inStock}
        >
          {productItem.inStock ? "View Details" : "Out of Stock"}
        </ButtonCustom>
      </CardFooter>
    </Card>
  );
};
