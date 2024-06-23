import React, { useState } from "react";
import axios from "axios";
import ChatbotButton from "./ChatbotButton";
import ChatWindow from "./ChatWindow";

const ChatBotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { isAi: true, message: "Hi, how can I help you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (message) => {
    setMessages([...messages, { isAi: false, message }]);
    fetchBotResponse(message);
  };

  const fetchBotResponse = async (message) => {
    setIsTyping(true);
    try {
      const response = await axios.post("YOUR_API_ENDPOINT", { message });
      setMessages((prev) => [
        ...prev,
        { isAi: true, message: response.data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          isAi: true,
          message: "Something went wrong, please try again.",
          isError: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && <ChatbotButton onClick={handleButtonClick} />}
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        onSendMessage={handleSendMessage}
        onClose={handleClose}
        isTyping={isTyping}
      />
    </div>
  );
};

export { ChatBotComponent };
