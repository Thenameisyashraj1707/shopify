
import React, { useState } from "react";
import { Bot, X } from "lucide-react";
import { ChatBot } from "./ChatBot";
import { Badge } from "@/components/ui/badge";

export const ChatBotButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 md:right-8 z-50 h-14 w-14 rounded-full bg-primary shadow-lg flex items-center justify-center text-white transition-all hover:bg-primary/90 hover:scale-105"
        aria-label="Chat with AI Assistant"
      >
        {isChatOpen ? <X size={24} /> : <Bot size={24} />}
        {!isChatOpen && (
          <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600">New</Badge>
        )}
      </button>
      
      {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
    </>
  );
};
