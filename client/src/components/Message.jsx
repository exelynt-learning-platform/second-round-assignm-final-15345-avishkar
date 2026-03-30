import React, { useEffect, useState } from "react";

const Message = ({ message, isMobile, isLatest }) => {
  const isUser = message.role === "user";

  const [displayedText, setDisplayedText] = useState(
    isUser ? message.content : ""
  );

  useEffect(() => {
    if (isUser || !isLatest) return;

    let i = 0;
    const text = message.content;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

      if (i >= text.length) clearInterval(interval);
    }, 12);

    return () => clearInterval(interval);
  }, [message.content, isUser, isLatest]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-start" : "flex-end",
        marginBottom: "12px",
      }}
    >
      <div style={{ maxWidth: isMobile ? "85%" : "65%" }}>
        <div
          style={{
            fontSize: "11px",
            marginBottom: "4px",
            color: "#64748b",
            textAlign: isUser ? "left" : "right",
          }}
        >
          {isUser ? "You" : "AI"}
        </div>

        <div
          style={{
            padding: isMobile ? "10px 12px" : "14px 18px",
            borderRadius: "16px",
            background: isUser
              ? "#f1f5f9"
              : "linear-gradient(135deg, #2563eb, #4f46e5)",
            color: isUser ? "#0f172a" : "#fff",
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
          }}
        >
          {isUser ? message.content : displayedText}

          {!isUser && displayedText.length < message.content.length && (
            <span style={{ marginLeft: "4px" }}>|</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;