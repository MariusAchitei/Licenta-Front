import React, { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatWindow from "./ChatWindow";

const ChatBotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { isAi: true, message: "Hi, how can I help you today?" },
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { isAi: false, message }]);
    // Simulate AI response for demonstration purposes
    setMessages((prev) => [
      ...prev,
      //   { isAi: false, message },
      {
        isAi: true,
        message:
          "Sorry, I couldn't find any information in the documentation about that.",
      },
    ]);
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
      />
    </div>
  );
};

export { ChatBotComponent };
