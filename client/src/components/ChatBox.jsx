import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader";
import InputBox from "./InputBox";

const ChatBox = () => {
  const { messages, loading, error } = useSelector((state) => state.chat);

  const chatContainerRef = useRef(null);
  const bottomRef = useRef(null); 

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }, [messages, loading]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getStatusColor = () => {
    if (error) return "#ef4444";     
    if (loading) return "#f59e0b";   
    return "#22c55e";               
  };

  const getStatusText = () => {
    if (error) return "Server Error";
    if (loading) return "AI Thinking...";
    return "Online";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: isMobile ? "10px" : "20px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: isMobile
          ? "#f8fafc"
          : "linear-gradient(135deg, #dbeafe, #eef2ff)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : "900px",
          height: isMobile ? "100vh" : "calc(100vh - 40px)",
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          borderRadius: isMobile ? "12px" : "24px",
          overflow: "hidden",
          boxShadow: isMobile
            ? "0 4px 12px rgba(0,0,0,0.08)"
            : "0 20px 60px rgba(0,0,0,0.12)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: isMobile ? "10px 14px" : "20px 28px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "linear-gradient(to right, #ffffff, #f8fafc)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: isMobile ? "32px" : "40px",
                height: isMobile ? "32px" : "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #4f46e5, #2563eb)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: isMobile ? "16px" : "20px",
                fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(79,70,229,0.4)",
              }}
            >
              🤖
            </div>

            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: isMobile ? "18px" : "26px",
                  fontWeight: "700",
                  color: "#0f172a",
                }}
              >
                ChatBox AI
              </h2>

              {!isMobile && (
                <p
                  style={{
                    margin: "4px 0 0",
                    color: "#64748b",
                    fontSize: "13px",
                  }}
                >
                  {/* Smart conversation powered by AI */}
                </p>
              )}
            </div>
          </div>

          <div
            title={getStatusText()} 
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: getStatusColor(),
              boxShadow: `0 0 10px ${getStatusColor()}`,
              transition: "all 0.3s ease",
            }}
          />
        </div>

        <div
          ref={chatContainerRef}
          style={{
            flex: 1,
            overflowY: "auto",
            padding: isMobile ? "10px" : "24px",
          }}
        >
          {messages.length === 0 && (
            <div
              style={{
                textAlign: "center",
                marginTop: isMobile ? "60px" : "80px",
                color: "#94a3b8",
              }}
            >
              <h3>👋 Welcome</h3>
              <p>Start chatting below 🚀</p>
            </div>
          )}

          {messages.map((msg, index) => (
            <Message key={index} message={msg} isMobile={isMobile} isLatest={index === messages.length - 1} />
          ))}

          {loading && <Loader />}

          {error && (
            <div
              style={{
                marginTop: "14px",
                padding: "12px",
                borderRadius: "12px",
                background: "#fee2e2",
                color: "#dc2626",
                border: "1px solid #fecaca",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "10px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              ⚠ {error}

              <button
                style={{
                  width: isMobile ? "100%" : "auto",
                  background: "#ef4444",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Retry
              </button>
            </div>
          )}

          {/* ✅ IMPORTANT FOR AUTO SCROLL */}
          <div ref={bottomRef} />
        </div>

        {/* INPUT */}
        <div
          style={{
            padding: isMobile ? "10px" : "16px",
            borderTop: "1px solid #e2e8f0",
            background: "#fff",
          }}
        >
          <InputBox isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;