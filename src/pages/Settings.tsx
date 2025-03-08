
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, BellRing, Globe, Lock, User, CreditCard, Moon, Sun, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const Settings = () => {
  const navigate = useNavigate();
  
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    toast.success(`${!darkMode ? 'Dark' : 'Light'} mode enabled`);
  };
  
  const handleLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => navigate('/login'), 1000);
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
        <h1 className="text-3xl font-display font-semibold">Settings</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        <Card className="h-fit">
          <CardContent className="p-4">
            <nav className="space-y-1 py-2">
              <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
                <User size={18} />
                <span>Account</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors cursor-pointer">
                <BellRing size={18} />
                <span>Notifications</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors cursor-pointer">
                <CreditCard size={18} />
                <span>Payment Methods</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors cursor-pointer">
                <Lock size={18} />
                <span>Privacy & Security</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors cursor-pointer">
                <Globe size={18} />
                <span>Language & Region</span>
              </div>
              <Separator className="my-2" />
              <div onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-destructive/10 text-destructive transition-colors cursor-pointer">
                <LogOut size={18} />
                <span>Sign Out</span>
              </div>
            </nav>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <input 
                    type="text" 
                    value="Alex" 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <input 
                    type="text" 
                    value="Johnson" 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    value="alex.johnson@example.com" 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input 
                    type="tel" 
                    value="+1 (555) 123-4567" 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md"
                  />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-3">Appearance</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {darkMode ? <Moon size={18} /> : <Sun size={18} />}
                    <span>Dark Mode</span>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={handleDarkModeToggle} />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-3">Notification Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Email Notifications</label>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Push Notifications</label>
                    <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Marketing Emails</label>
                    <Switch checked={marketingEmails} onCheckedChange={setMarketingEmails} />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <ButtonCustom variant="primary">Save Changes</ButtonCustom>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default Settings;
