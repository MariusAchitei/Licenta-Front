import React from "react";
import { FiUser, FiZap, FiAlertCircle } from "react-icons/fi";
import TypingMessage from "./TypingMessage";

const ChatMessage = ({ isAi, message, isError, isTyping }) => {
  return (
    <div
      className={`my-4 flex gap-3 text-sm text-gray-600 ${isAi ? "flex-row" : "flex-row-reverse"}`}
    >
      <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <div className="rounded-full border bg-gray-100 p-1">
          {isAi ? (
            isError ? (
              <FiAlertCircle className="h-6 w-6 text-red-500" />
            ) : (
              <FiZap className="h-6 w-6" />
            )
          ) : (
            <FiUser className="h-6 w-6" />
          )}
        </div>
      </span>
      <div className="rounded-lg bg-gray-100 p-3 shadow-sm">
        {isTyping ? (
          <TypingMessage message={message} isAi={isAi} />
        ) : (
          <p className="leading-relaxed">
            <span className="block font-bold text-gray-700">
              {isAi ? "Assistant" : "You"}
            </span>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
