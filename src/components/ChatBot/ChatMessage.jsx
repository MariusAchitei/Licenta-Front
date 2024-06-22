import React from "react";
import { FiUser, FiZap } from "react-icons/fi";
import TypingMessage from "./TypingMessage";

const ChatMessage = ({ isAi, message }) => {
  return (
    <div
      className={`my-4 flex gap-3 text-sm text-gray-600 ${isAi ? "flex-row" : "flex-row-reverse"}`}
    >
      <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <div className="rounded-full border bg-gray-100 p-1">
          {isAi ? (
            <FiZap className="h-6 w-6" />
          ) : (
            <FiUser className="h-6 w-6" />
          )}
        </div>
      </span>
      <div className="rounded-lg bg-gray-100 p-3 shadow-sm">
        <TypingMessage message={message} isAi={isAi} />
      </div>
    </div>
  );
};

export default ChatMessage;
