import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserMessage, sendMessage } from "../redux/chatslice";

const InputBox = ({ isMobile }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (!text.trim()) return;

    dispatch(addUserMessage(text));
    dispatch(sendMessage(text));
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", 
        gap: "10px",
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message..."
        style={{
          flex: 1,
          padding: isMobile ? "12px" : "10px",
          borderRadius: "10px",
          border: "1px solid #cbd5f5",
          fontSize: "14px",
        }}
      />

      <button
        onClick={handleSend}
        style={{
          width: isMobile ? "100%" : "auto", 
          padding: isMobile ? "12px" : "10px 16px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg, #4f46e5, #2563eb)",
          color: "#fff",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
};

export default InputBox;