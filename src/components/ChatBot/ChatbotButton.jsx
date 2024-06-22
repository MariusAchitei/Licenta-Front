import React from "react";
import { FiMessageSquare } from "react-icons/fi";

const ChatbotButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 inline-flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-black p-0 text-sm font-medium leading-5 hover:bg-gray-700 hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
    >
      <FiMessageSquare className="h-8 w-8 text-white" />
    </button>
  );
};

export default ChatbotButton;
