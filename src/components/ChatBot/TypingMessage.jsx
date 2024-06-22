import React, { useEffect, useState } from "react";
import "./TypingMessage.css"; // Import the CSS file for the pulsating circle

const TypingMessage = ({ message, isAi }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let wordIndex = 0;
    const words = message.split(" ");

    if (isAi) {
      const typingInterval = setInterval(() => {
        if (wordIndex < words.length) {
          setDisplayedText(
            (prev) => prev + (prev ? " " : "") + words[wordIndex],
          );
          wordIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    } else {
      setDisplayedText(message);
    }
  }, [message, isAi]);

  return (
    <p className="leading-relaxed">
      <span className="block font-bold text-gray-700">
        {isAi ? "AI" : "You"}
      </span>
      {displayedText}
      {isAi && !isTypingComplete && (
        <span className="pulsating-circle ml-2"></span>
      )}
    </p>
  );
};

export default TypingMessage;
