
import { AnimatedLayout } from "@/components/layout/AnimatedLayout";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  
  const notifications = [
    {
      id: 1,
      title: "New Arrival: Summer Collection",
      description: "Check out our latest summer collection with exclusive discounts!",
      date: "Today, 10:30 AM",
      isNew: true,
    },
    {
      id: 2,
      title: "Your order has been shipped",
      description: "Order #EL-38291 has been shipped and will arrive in 2-3 business days.",
      date: "Yesterday, 5:15 PM",
      isNew: true,
    },
    {
      id: 3,
      title: "Special Offer: 25% Off",
      description: "Limited time offer: Get 25% off on all electronics products!",
      date: "2 days ago",
      isNew: false,
    },
    {
      id: 4,
      title: "Your wishlist item is on sale",
      description: "The Premium Smartphone X12 from your wishlist is now on sale!",
      date: "3 days ago",
      isNew: false,
    },
    {
      id: 5,
      title: "Account verification successful",
      description: "Your account has been successfully verified. Enjoy shopping!",
      date: "5 days ago",
      isNew: false,
    }
  ];

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
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-display font-semibold">Notifications</h1>
          <ButtonCustom 
            variant="outline" 
            size="sm"
            className="flex items-center gap-1"
          >
            <Check size={14} />
            Mark all as read
          </ButtonCustom>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={`hover:shadow-md transition-shadow ${notification.isNew ? 'border-l-4 border-l-primary' : ''}`}>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${notification.isNew ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  <Bell size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-base">{notification.title}</h3>
                    {notification.isNew && (
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                  <span className="text-xs text-muted-foreground">{notification.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedLayout>
  );
};

export default Notifications;
