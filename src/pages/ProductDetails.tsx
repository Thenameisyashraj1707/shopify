
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { getProductById, getProductsByCategory } from "@/data/products";
import { ButtonCustom } from "@/components/ui/button-custom";
import { ShoppingBag, Star, Truck, Shield, ArrowLeft, Heart, Share2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/shop/ProductCard";
import PaymentOptions from "@/components/shop/PaymentOptions";

// Category-specific placeholder images
const categoryPlaceholders = {
  "electronics": "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop",
  "men-fashion": "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop",
  "women-fashion": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
  "home-kitchen": "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=800&auto=format&fit=crop",
  "beauty-personal-care": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop",
  "toys-games": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop",
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const product = id ? getProductById(id) : undefined;
  const [quantity, setQuantity] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);
  
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
    setShowPayment(true);
  };
  
  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} (Qty: ${quantity}) has been added to your cart.`,
      variant: "default",
    });
  };
  
  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from Wishlist" : "Added to Wishlist",
      description: isFavorite 
        ? `${product.name} has been removed from your wishlist.` 
        : `${product.name} has been added to your wishlist.`,
      variant: "default",
    });
  };
  
  const handleShareClick = () => {
    toast({
      title: "Share Link Copied",
      description: "Product link has been copied to clipboard.",
      variant: "default",
    });
  };
  
  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };
  
  const completeOrder = (paymentMethod: string) => {
    toast({
      title: "Order Placed Successfully!",
      description: `Your order has been placed using ${paymentMethod}.`,
      variant: "default",
    });
    setTimeout(() => {
      setShowPayment(false);
      navigate('/shop');
    }, 1500);
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  // Get related products based on category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const getPlaceholderImage = (categoryId: string) => {
    return categoryPlaceholders[categoryId as keyof typeof categoryPlaceholders] || 
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  };
  
  return (
    <AnimatedLayout>
      {!showPayment ? (
        <>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Shopping
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image with enhanced gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-md">
                <img 
                  src={imageError ? getPlaceholderImage(product.category) : product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square rounded-md overflow-hidden border-2 border-primary">
                  <img 
                    src={imageError ? getPlaceholderImage(product.category) : product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover cursor-pointer"
                    onError={handleImageError}
                  />
                </div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-md overflow-hidden border border-muted">
                    <img 
                      src={imageError ? getPlaceholderImage(product.category) : product.image} 
                      alt={`${product.name} view ${i+2}`} 
                      className="w-full h-full object-cover cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                      onError={handleImageError}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info with enhanced UI */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-primary/10 text-primary border-none">
                  {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Badge>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleFavoriteToggle}
                    className={`p-2 rounded-full ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-muted hover:bg-muted/80'}`}
                  >
                    <Heart size={18} className={isFavorite ? 'fill-red-500' : ''} />
                  </button>
                  <button 
                    onClick={handleShareClick}
                    className="p-2 rounded-full bg-muted hover:bg-muted/80"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
              
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
              
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <div className="flex items-center w-32 border rounded-md">
                  <button 
                    className="px-3 py-1 hover:bg-muted"
                    onClick={() => handleQuantityChange(-1)}
                  >-</button>
                  <span className="px-3 py-1 flex-1 text-center">{quantity}</span>
                  <button 
                    className="px-3 py-1 hover:bg-muted"
                    onClick={() => handleQuantityChange(1)}
                  >+</button>
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
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </ButtonCustom>
              </div>
              
              <Card className="bg-muted/30 border-none shadow-none">
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
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
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
                  
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <div className="text-5xl font-semibold">{product.rating.toFixed(1)}</div>
                      <div className="flex mt-2">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{product.numReviews} reviews</div>
                    </div>
                    
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center mb-1">
                          <span className="text-sm w-8">{star} star</span>
                          <div className="flex-1 h-2 mx-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="bg-amber-400 h-full rounded-full" 
                              style={{ width: `${Math.random() * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-8">{Math.floor(Math.random() * product.numReviews)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <ButtonCustom variant="outline" className="w-full">
                    Write a Review
                  </ButtonCustom>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shipping">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Delivery</h4>
                      <p className="text-muted-foreground text-sm">
                        We offer standard shipping with delivery estimates of {product.deliveryEstimate}. 
                        Orders over $100 qualify for free shipping.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium mb-2">Returns & Exchanges</h4>
                      <p className="text-muted-foreground text-sm">
                        If you're not completely satisfied with your purchase, you can return it within 30 days 
                        for a full refund or exchange. Items must be in original condition with tags attached.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium mb-2">International Shipping</h4>
                      <p className="text-muted-foreground text-sm">
                        We ship to most countries worldwide. International shipping rates and delivery times 
                        vary by location.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          <div className="mb-12">
            <h2 className="text-2xl font-display mb-6">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <button 
            onClick={() => setShowPayment(false)}
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Product
          </button>
          
          <div className="mb-8">
            <h1 className="text-2xl font-display font-semibold mb-2">Complete Your Purchase</h1>
            <p className="text-muted-foreground">
              You're purchasing {quantity} {quantity > 1 ? 'units' : 'unit'} of {product.name}
            </p>
          </div>
          
          <PaymentOptions 
            total={product.price * quantity}
            onCancel={() => setShowPayment(false)}
            onComplete={completeOrder}
          />
        </>
      )}
    </AnimatedLayout>
  );
};

export default ProductDetails;
