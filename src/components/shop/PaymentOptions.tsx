
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ButtonCustom } from "@/components/ui/button-custom";
import { CreditCard, Wallet, Truck, BanknoteIcon, Check, AlertCircle } from "lucide-react";

interface PaymentOptionsProps {
  total: number;
  onCancel: () => void;
  onComplete: (paymentMethod: string) => void;
}

const PaymentOptions = ({ total, onCancel, onComplete }: PaymentOptionsProps) => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const validateCreditCard = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!cardNumber.trim()) newErrors.cardNumber = "Card number is required";
    else if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) 
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
      
    if (!cardHolder.trim()) newErrors.cardHolder = "Card holder name is required";
    
    if (!expiryDate.trim()) newErrors.expiryDate = "Expiry date is required";
    else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) 
      newErrors.expiryDate = "Please use MM/YY format";
      
    if (!cvc.trim()) newErrors.cvc = "CVC is required";
    else if (!/^\d{3,4}$/.test(cvc)) 
      newErrors.cvc = "CVC must be 3 or 4 digits";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handlePayment = () => {
    if (paymentMethod === "credit-card" && !validateCreditCard()) {
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      const methodNames = {
        "credit-card": "Credit Card",
        "digital-wallet": "Digital Wallet",
        "cash-on-delivery": "Cash on Delivery"
      };
      onComplete(methodNames[paymentMethod as keyof typeof methodNames]);
    }, 2000);
  };
  
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };
  
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    
    setExpiryDate(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/30">
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <RadioGroup 
            value={paymentMethod} 
            onValueChange={setPaymentMethod}
            className="grid gap-4"
          >
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card" className="flex items-center cursor-pointer">
                  <CreditCard size={18} className="mr-2 text-primary" />
                  Credit or Debit Card
                </Label>
              </div>
              
              {paymentMethod === "credit-card" && (
                <div className="pl-6 mt-4 space-y-4">
                  <div>
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input 
                      id="card-number" 
                      placeholder="1234 5678 9012 3456" 
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength={19}
                      className={errors.cardNumber ? "border-destructive" : ""}
                    />
                    {errors.cardNumber && (
                      <p className="text-destructive text-xs mt-1">{errors.cardNumber}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="card-holder">Card Holder Name</Label>
                    <Input 
                      id="card-holder" 
                      placeholder="John Doe" 
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      className={errors.cardHolder ? "border-destructive" : ""}
                    />
                    {errors.cardHolder && (
                      <p className="text-destructive text-xs mt-1">{errors.cardHolder}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input 
                        id="expiry" 
                        placeholder="MM/YY" 
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        maxLength={5}
                        className={errors.expiryDate ? "border-destructive" : ""}
                      />
                      {errors.expiryDate && (
                        <p className="text-destructive text-xs mt-1">{errors.expiryDate}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input 
                        id="cvc" 
                        placeholder="123" 
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                        maxLength={4}
                        className={errors.cvc ? "border-destructive" : ""}
                      />
                      {errors.cvc && (
                        <p className="text-destructive text-xs mt-1">{errors.cvc}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Separator />
            
            <div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="digital-wallet" id="digital-wallet" />
                <Label htmlFor="digital-wallet" className="flex items-center cursor-pointer">
                  <Wallet size={18} className="mr-2 text-primary" />
                  Digital Wallet
                </Label>
              </div>
              
              {paymentMethod === "digital-wallet" && (
                <div className="pl-6 mt-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="border rounded-md p-3 flex flex-col items-center justify-center hover:border-primary cursor-pointer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/124px-PayPal.svg.png" 
                        alt="PayPal" className="h-8 mb-1" />
                      <span className="text-xs">PayPal</span>
                    </div>
                    <div className="border rounded-md p-3 flex flex-col items-center justify-center hover:border-primary cursor-pointer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Gpay_logo.svg/1200px-Gpay_logo.svg.png" 
                        alt="Google Pay" className="h-8 mb-1" />
                      <span className="text-xs">Google Pay</span>
                    </div>
                    <div className="border rounded-md p-3 flex flex-col items-center justify-center hover:border-primary cursor-pointer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png" 
                        alt="Apple Pay" className="h-8 mb-1" />
                      <span className="text-xs">Apple Pay</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Separator />
            
            <div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
                <Label htmlFor="cash-on-delivery" className="flex items-center cursor-pointer">
                  <BanknoteIcon size={18} className="mr-2 text-primary" />
                  Cash on Delivery
                </Label>
              </div>
              
              {paymentMethod === "cash-on-delivery" && (
                <div className="pl-6 mt-4">
                  <div className="flex items-start gap-2 bg-muted/50 p-3 rounded-md">
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-amber-500" />
                    <p className="text-sm text-muted-foreground">
                      Pay with cash upon delivery. Please ensure you have the exact amount ready.
                      A small fee may be applied for cash on delivery orders.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
      
      {/* Order Summary */}
      <div>
        <Card>
          <CardHeader className="bg-muted/30">
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="bg-primary/10 text-primary rounded-md p-3 mb-6 flex items-start gap-2 text-sm">
              <Truck size={18} className="shrink-0 mt-0.5" />
              <p>Your order will be processed immediately and shipped within 1-2 business days.</p>
            </div>
            
            <ButtonCustom 
              variant="primary" 
              className="w-full mb-3"
              size="lg"
              onClick={handlePayment}
              icon={isProcessing ? undefined : <Check />}
              isLoading={isProcessing}
            >
              {isProcessing ? "Processing..." : "Complete Payment"}
            </ButtonCustom>
            
            <ButtonCustom 
              variant="outline" 
              className="w-full"
              onClick={onCancel}
            >
              Cancel
            </ButtonCustom>
            
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
              <img src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png" className="h-4" alt="Secure" />
              <span>All payments are secure and encrypted</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentOptions;
