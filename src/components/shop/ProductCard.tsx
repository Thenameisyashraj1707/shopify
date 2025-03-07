
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Product } from "@/types/product";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col group">
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold px-3 py-1 bg-red-500 rounded-full text-sm">
              Out of Stock
            </span>
          </div>
        )}
        
        {product.inStock && (
          <>
            <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
              <Heart size={18} className="text-gray-700 hover:text-red-500 transition-colors" />
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <ButtonCustom 
                variant="primary" 
                size="sm" 
                className="w-full"
                onClick={handleViewDetails}
                icon={<ShoppingBag size={16} />}
                iconPosition="left"
              >
                Quick View
              </ButtonCustom>
            </div>
          </>
        )}
        
        {/* Discount/New badges if needed */}
        {product.id.startsWith('e') && (
          <Badge className="absolute top-3 left-3 bg-primary hover:bg-primary">New</Badge>
        )}
        
        {product.id.startsWith('m') && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">-20%</Badge>
        )}
      </div>
      
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center space-x-1 mb-1">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.numReviews})</span>
        </div>
        
        <h3 className="font-medium line-clamp-2 mb-1 transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <p className="font-semibold text-primary">${product.price.toFixed(2)}</p>
          {product.id.startsWith('m') && (
            <p className="text-sm line-through text-muted-foreground">${(product.price * 1.2).toFixed(2)}</p>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
          {product.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <ButtonCustom 
          variant={product.inStock ? "primary" : "outline"} 
          size="sm" 
          className="w-full"
          onClick={handleViewDetails}
          icon={<ShoppingBag size={16} />}
          iconPosition="left"
          disabled={!product.inStock}
        >
          {product.inStock ? "View Details" : "Out of Stock"}
        </ButtonCustom>
      </CardFooter>
    </Card>
  );
};
