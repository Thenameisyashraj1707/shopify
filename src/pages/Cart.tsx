
import { useState } from "react";
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2, CreditCard, Truck, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import { Product } from "@/types/product";
import { useToast } from "@/hooks/use-toast";
import PaymentOptions from "@/components/shop/PaymentOptions";

type CartItem = {
  product: Product;
  quantity: number;
};

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Initialize with some sample cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: getProductById("e1")!, quantity: 1 },
    { product: getProductById("m1")!, quantity: 2 },
    { product: getProductById("h1")!, quantity: 1 },
  ]);
  
  const [showPayment, setShowPayment] = useState(false);
  
  const handleQuantityChange = (productId: string, change: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };
  
  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart.",
      variant: "default",
    });
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // Assuming 8% tax
  };
  
  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 100 ? 0 : 10.99; // Free shipping over $100
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };
  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }
    
    setShowPayment(true);
  };
  
  const completeOrder = (paymentMethod: string) => {
    toast({
      title: "Order Placed Successfully!",
      description: `Your order has been placed using ${paymentMethod}.`,
      variant: "default",
    });
    setTimeout(() => {
      setCartItems([]);
      setShowPayment(false);
      navigate('/shop');
    }, 1500);
  };
  
  return (
    <AnimatedLayout>
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back
        </button>
        <h1 className="text-3xl font-display font-semibold mb-2">Your Shopping Cart</h1>
        <p className="text-muted-foreground">You have {cartItems.length} items in your cart</p>
      </div>
      
      {!showPayment ? (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Card key={item.product.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-32 h-32 bg-muted">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h3 className="font-medium mb-1">{item.product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </p>
                          <p className="font-semibold">${item.product.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="flex items-center border rounded-md">
                            <button 
                              className="px-3 py-1 hover:bg-muted"
                              onClick={() => handleQuantityChange(item.product.id, -1)}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button 
                              className="px-3 py-1 hover:bg-muted"
                              onClick={() => handleQuantityChange(item.product.id, 1)}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          <button 
                            className="text-muted-foreground hover:text-destructive transition-colors"
                            onClick={() => handleRemoveItem(item.product.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                <ShoppingBag size={64} className="text-muted-foreground mb-4" />
                <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
                <ButtonCustom 
                  variant="primary" 
                  onClick={() => navigate('/shop')}
                >
                  Start Shopping
                </ButtonCustom>
              </div>
            )}
            
            {cartItems.length > 0 && (
              <div className="flex justify-between mt-6">
                <ButtonCustom 
                  variant="outline" 
                  onClick={() => navigate('/shop')}
                >
                  Continue Shopping
                </ButtonCustom>
                
                <ButtonCustom 
                  variant="subtle" 
                  onClick={() => setCartItems([])}
                  className="text-muted-foreground"
                >
                  Clear Cart
                </ButtonCustom>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span>${calculateTax().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>
                        {calculateShipping() === 0 
                          ? "Free" 
                          : `$${calculateShipping().toFixed(2)}`}
                      </span>
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {calculateSubtotal() < 100 && (
                    <div className="bg-primary/10 text-primary rounded-md p-3 mb-6 flex items-start gap-2 text-sm">
                      <Truck size={18} className="shrink-0 mt-0.5" />
                      <p>Add ${(100 - calculateSubtotal()).toFixed(2)} more to get free shipping!</p>
                    </div>
                  )}
                  
                  <ButtonCustom 
                    variant="primary" 
                    className="w-full mb-3"
                    size="lg"
                    onClick={handleCheckout}
                    icon={<CreditCard />}
                  >
                    Proceed to Checkout
                  </ButtonCustom>
                  
                  <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                    <span>Secure Checkout</span>
                    <span>•</span>
                    <span>Fast Shipping</span>
                    <span>•</span>
                    <span>Easy Returns</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      ) : (
        <PaymentOptions 
          total={calculateTotal()}
          onCancel={() => setShowPayment(false)}
          onComplete={completeOrder}
        />
      )}
    </AnimatedLayout>
  );
};

export default Cart;
