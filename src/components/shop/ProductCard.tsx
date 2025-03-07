
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Product } from "@/types/product";
import { ShoppingBag, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold px-3 py-1 bg-red-500 rounded-full text-sm">
              Out of Stock
            </span>
          </div>
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
        
        <h3 className="font-medium line-clamp-2 mb-1">{product.name}</h3>
        
        <p className="font-semibold text-primary">${product.price.toFixed(2)}</p>
        
        <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
          {product.description}
        </p>
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
          View Details
        </ButtonCustom>
      </CardFooter>
    </Card>
  );
};
