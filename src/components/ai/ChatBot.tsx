
import React, { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Bot, User, Send, X, Maximize2, Minimize2, ShoppingBag, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { toast } from "sonner";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  isProductSuggestion?: boolean;
  products?: any[];
}

interface ChatBotProps {
  onClose: () => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I'm your shopping assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const response = generateResponse(inputValue);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query: string): ChatMessage => {
    const lowercaseQuery = query.toLowerCase();
    
    // Product search
    if (lowercaseQuery.includes("find") || 
        lowercaseQuery.includes("search") || 
        lowercaseQuery.includes("looking for") ||
        lowercaseQuery.includes("where") ||
        lowercaseQuery.includes("product") ||
        lowercaseQuery.includes("show me")) {
      
      // Simple keyword extraction from user query
      const keywords = lowercaseQuery.split(" ")
        .filter(word => word.length > 3 && !["find", "search", "looking", "where", "product", "show", "have", "want", "need", "items"].includes(word));
      
      if (keywords.length > 0) {
        // Find matching products based on keywords
        const matchingProducts = products
          .filter(product => 
            keywords.some(keyword => 
              product.name.toLowerCase().includes(keyword) || 
              product.description.toLowerCase().includes(keyword) ||
              product.category.toLowerCase().includes(keyword)
            )
          )
          .slice(0, 3); // Limit to 3 products
        
        if (matchingProducts.length > 0) {
          return {
            id: Date.now().toString(),
            sender: "bot",
            text: `I found these products that might interest you:`,
            timestamp: new Date(),
            isProductSuggestion: true,
            products: matchingProducts
          };
        }
      }
      
      return {
        id: Date.now().toString(),
        sender: "bot",
        text: `I couldn't find specific products matching your query. Please try using our search bar with more specific terms or browse our categories.`,
        timestamp: new Date(),
      };
    }
    
    // Order status
    if (lowercaseQuery.includes("order") && 
        (lowercaseQuery.includes("status") || lowercaseQuery.includes("track"))) {
      return {
        id: Date.now().toString(),
        sender: "bot",
        text: "To check your order status, please go to 'My Account' > 'Orders' or provide your order number here and I can look it up for you.",
        timestamp: new Date(),
      };
    }
    
    // Shipping and delivery
    if (lowercaseQuery.includes("shipping") || 
        lowercaseQuery.includes("delivery") || 
        lowercaseQuery.includes("arrive")) {
      return {
        id: Date.now().toString(),
        sender: "bot",
        text: "We typically process orders within 1-2 business days. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. You can check specific delivery estimates on each product page.",
        timestamp: new Date(),
      };
    }
    
    // Returns & refunds
    if (lowercaseQuery.includes("return") || 
        lowercaseQuery.includes("refund") || 
        lowercaseQuery.includes("exchange")) {
      return {
        id: Date.now().toString(),
        sender: "bot",
        text: "Our return policy allows returns within 30 days of purchase. To initiate a return, go to 'My Account' > 'Orders' and select the order you wish to return. For more assistance, you can contact our customer service team.",
        timestamp: new Date(),
      };
    }
    
    // Recommendations
    if (lowercaseQuery.includes("recommend") || 
        lowercaseQuery.includes("suggestion") || 
        lowercaseQuery.includes("best seller")) {
      
      // Get random products from different categories
      const recommendations = [
        products.find(p => p.id === "e1"), // Electronics
        products.find(p => p.id === "m1"), // Men's Fashion
        products.find(p => p.id === "h1")  // Home & Kitchen
      ].filter(Boolean);
      
      return {
        id: Date.now().toString(),
        sender: "bot",
        text: "Here are some of our best-selling products you might like:",
        timestamp: new Date(),
        isProductSuggestion: true,
        products: recommendations
      };
    }
    
    // Default response
    return {
      id: Date.now().toString(),
      sender: "bot",
      text: "I'm here to help with product information, order status, shipping details, returns, and recommendations. How else can I assist you with your shopping experience?",
      timestamp: new Date(),
    };
  };

  const handleProductClick = (productId: string) => {
    toast.success("Navigating to product details...");
    window.location.href = `/product/${productId}`;
  };

  return (
    <Card className={`fixed bottom-20 right-4 md:right-8 shadow-lg z-50 transition-all duration-300 ${
      isMinimized ? 'w-auto h-auto' : 'w-[350px] h-[500px] max-h-[80vh]'
    }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-3 bg-primary text-white rounded-t-lg flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot size={18} />
            <span className="font-medium">AI Shopping Assistant</span>
          </div>
          <div className="flex items-center gap-1">
            {isMinimized ? (
              <button onClick={() => setIsMinimized(false)} className="p-1 hover:bg-primary-dark rounded-full">
                <Maximize2 size={16} />
              </button>
            ) : (
              <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-primary-dark rounded-full">
                <Minimize2 size={16} />
              </button>
            )}
            <button onClick={onClose} className="p-1 hover:bg-primary-dark rounded-full">
              <X size={16} />
            </button>
          </div>
        </div>
        
        {!isMinimized && (
          <>
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback className="bg-primary text-white">AI</AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-white border shadow-sm"
                    }`}
                  >
                    <p>{message.text}</p>
                    
                    {message.isProductSuggestion && message.products && (
                      <div className="mt-3 space-y-2">
                        {message.products.map(product => (
                          <div 
                            key={product.id}
                            className="flex items-center bg-gray-50 p-2 rounded-md cursor-pointer hover:bg-gray-100 transition-colors"
                            onClick={() => handleProductClick(product.id)}
                          >
                            <div className="h-12 w-12 bg-gray-200 rounded overflow-hidden mr-2">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = `https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&auto=format&fit=crop`;
                                }}
                              />
                            </div>
                            <div className="flex-1 overflow-hidden">
                              <p className="text-xs font-medium text-gray-900 truncate">{product.name}</p>
                              <p className="text-xs text-gray-500">${product.price.toFixed(2)}</p>
                            </div>
                            <ShoppingBag size={14} className="text-primary ml-2" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8 ml-2">
                      <AvatarFallback className="bg-gray-300">U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-center mb-4">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback className="bg-primary text-white">AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-white border p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick Actions */}
            <div className="px-3 py-2 bg-gray-50 border-t flex gap-1 overflow-x-auto whitespace-nowrap">
              <Badge 
                className="cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200 px-3"
                onClick={() => setInputValue("Show me best sellers")}
              >
                Best Sellers
              </Badge>
              <Badge 
                className="cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200 px-3"
                onClick={() => setInputValue("How do I track my order?")}
              >
                Track Order
              </Badge>
              <Badge 
                className="cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200 px-3"
                onClick={() => setInputValue("Return policy?")}
              >
                Returns
              </Badge>
              <Badge 
                className="cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200 px-3"
                onClick={() => setInputValue("Shipping time?")}
              >
                Shipping
              </Badge>
            </div>
            
            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
              />
              <ButtonCustom type="submit" size="sm" variant="primary">
                <Send size={16} />
              </ButtonCustom>
            </form>
          </>
        )}
      </div>
    </Card>
  );
};
