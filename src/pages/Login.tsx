
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Logo } from "@/components/ui/logo";
import { ArrowLeft, Mail, Phone, User } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    otp: ""
  });
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate OTP sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOtpSent(true);
    setIsLoading(false);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate OTP verification
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    navigate("/shop");
  };

  return (
    <AnimatedLayout className="flex items-center justify-center bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute top-4 left-4">
        <ButtonCustom 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate("/")}
          icon={<ArrowLeft className="w-4 h-4" />}
          iconPosition="left"
        >
          Back
        </ButtonCustom>
      </div>
      
      <Card className="w-full max-w-md glass-morphism animate-scale-up">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-2">
            <Logo size="md" />
          </div>
          <CardTitle className="text-2xl font-display">Welcome</CardTitle>
          <CardDescription>
            {activeTab === "login" ? "Sign in to your account" : "Create a new account"}
          </CardDescription>
        </CardHeader>
        <Tabs defaultValue="login" className="w-full" onValueChange={(v) => setActiveTab(v as "login" | "signup")}>
          <TabsList className="grid w-full grid-cols-2 mb-4 mx-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <CardContent>
            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                {activeTab === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Enter your full name" 
                        className="pl-10"
                        value={formData.name}
                        onChange={handleChange}
                        required={activeTab === "signup"}
                      />
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="pl-10"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="Enter your phone number" 
                      className="pl-10"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <ButtonCustom 
                  type="submit" 
                  variant="primary" 
                  isLoading={isLoading} 
                  className="w-full mt-6"
                >
                  Send OTP
                </ButtonCustom>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">Verification Code</Label>
                  <Input 
                    id="otp" 
                    name="otp" 
                    placeholder="Enter 6-digit OTP" 
                    value={formData.otp}
                    onChange={handleChange}
                    required
                    className="text-center tracking-wider text-lg"
                    maxLength={6}
                  />
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    We've sent a verification code to {formData.phone}
                  </p>
                </div>
                
                <ButtonCustom 
                  type="submit" 
                  variant="primary" 
                  isLoading={isLoading} 
                  className="w-full mt-6"
                >
                  Verify & Continue
                </ButtonCustom>
                
                <div className="text-center">
                  <button 
                    type="button" 
                    className="text-sm text-primary hover:underline"
                    onClick={() => setOtpSent(false)}
                  >
                    Change phone number
                  </button>
                </div>
              </form>
            )}
          </CardContent>
        </Tabs>
        
        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="text-center text-sm text-muted-foreground mt-2">
            By continuing, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </div>
        </CardFooter>
      </Card>
    </AnimatedLayout>
  );
};

export default Login;
