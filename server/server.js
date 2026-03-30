import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    console.log("🔥 API HIT");

    const { message } = req.body;
    console.log("📩 User Message:", message);

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/free", 
       messages: [
  {
    role: "system",
    content:
      "Reply in simple readable paragraphs with short sentences, bullet points where needed, and clean formatting.",
  },
  {
    role: "user",
    content: message,
  },
],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiReply = response.data.choices[0].message.content;

    console.log("🤖 AI Reply:", aiReply);

    res.status(200).json(aiReply);
  } catch (error) {
    console.log(
      "❌ Backend Error:",
      error.response?.data || error.message
    );

    res.status(500).json("Failed to get AI response");
  }
});

app.listen(5000, () => {
  console.log("✅ OpenRouter server running on port 5000");
});