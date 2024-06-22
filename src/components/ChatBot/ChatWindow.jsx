import React, { useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { FiX } from "react-icons/fi";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatWindow = ({ isOpen, messages, onSendMessage, onClose }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Transition.Child
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-full opacity-0"
      >
        <div
          style={{
            boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          }}
          className="fixed bottom-4 right-4 flex h-[634px] w-[440px] flex-col space-y-3 rounded-lg border border-[#e5e7eb] bg-white p-3"
        >
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-lg font-semibold tracking-tight">Chatbot</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
          <div
            className="h-[90%] overflow-auto p-2"
            style={{ minWidth: "100%" }}
          >
            {messages.map((msg, index) => (
              <ChatMessage key={index} isAi={msg.isAi} message={msg.message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          <ChatInput onSendMessage={onSendMessage} />
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default ChatWindow;
