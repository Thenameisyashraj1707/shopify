
import { useParams } from "react-router-dom";
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { getProductById } from "@/data/products";
import { ButtonCustom } from "@/components/ui/button-custom";
import { ShoppingBag, Star, Truck, Shield, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <AnimatedLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
          <ButtonCustom 
            variant="primary" 
            onClick={() => navigate('/shop')}
            icon={<ArrowLeft />}
          >
            Back to Shop
          </ButtonCustom>
        </div>
      </AnimatedLayout>
    );
  }
  
  const handleBuyNow = () => {
    // Here you would typically handle the checkout process
    toast({
      title: "Order Placed!",
      description: "Hurray! Your order is placed.",
      variant: "default",
    });
  };
  
  return (
    <AnimatedLayout>
      <button 
        onClick={() => navigate('/shop')}
        className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Shopping
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-display font-semibold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-3">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating.toFixed(1)} ({product.numReviews} reviews)
            </span>
          </div>
          
          <p className="text-2xl font-semibold text-primary mb-4">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          <div className="mb-6">
            <Badge className="bg-green-100 hover:bg-green-100 text-green-800 mb-2">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Truck size={16} className="mr-2" />
              <span>
                Delivery in {product.deliveryEstimate} 
                {product.deliveryCharge === 0 
                  ? " · Free Shipping" 
                  : ` · $${product.deliveryCharge.toFixed(2)} Shipping`}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <ButtonCustom 
              variant="primary" 
              size="lg" 
              icon={<ShoppingBag />}
              mobileFull
              onClick={handleBuyNow}
            >
              Buy Now
            </ButtonCustom>
            
            <ButtonCustom 
              variant="outline" 
              size="lg"
              mobileFull
            >
              Add to Cart
            </ButtonCustom>
          </div>
          
          <Card className="bg-muted/30">
            <CardContent className="p-4">
              <div className="flex items-start">
                <Shield className="w-5 h-5 mr-2 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">Secure Purchase</h4>
                  <p className="text-xs text-muted-foreground">
                    Your purchase is protected by our satisfaction guarantee.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <Tabs defaultValue="specifications" className="mb-12">
        <TabsList className="w-full justify-start mb-4">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="specifications">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Product Specifications</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <p className="text-sm font-medium capitalize">{key}</p>
                    <p className="text-sm text-muted-foreground">
                      {Array.isArray(value) ? value.join(', ') : value.toString()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reviews">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Customer Reviews</h3>
              
              <div className="text-center py-8">
                <p className="text-muted-foreground">Customer reviews will be implemented in the next phase.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AnimatedLayout>
  );
};

export default ProductDetails;
