# 🤖 AI Chatbox Application (Redux + OpenRouter API)

## 📌 Assignment Overview

This project is a Chatbox Application built as part of the assignment to integrate an AI API with proper state management using Redux.

The application allows users to send messages and receive AI-generated responses in real time, while efficiently managing application state and handling asynchronous API calls.

---

## 🚀 Features

### 💬 User Interaction

* Users can type and send messages
* AI responds in real-time
* Chat interface updates dynamically

### 🧠 State Management (Redux Toolkit)

* Messages stored in global state
* Loading state handled during API calls
* Error state handled for API failures
* Async API calls managed using **createAsyncThunk**

### 🔗 API Integration

* Integrated with **OpenRouter (ChatGPT-compatible API)**
* Secure API handling via environment variables
* Sends user messages and receives AI responses

### 🎨 UI/UX

* User messages aligned left
* AI responses aligned right
* Typing animation effect for AI responses
* Loading indicator ("Typing...")
* Error message display
* Fully responsive design (Mobile + Desktop)

### ⚡ Performance

* Optimistic UI updates for faster interaction
* Smooth rendering with no UI lag
* Efficient state updates using Redux

### 🔐 Security

* API key stored securely using `.env`
* Backend acts as a secure middleware

### 🧪 Testing

* Unit test implemented for Redux reducer using Jest

---

## 🛠 Tech Stack

* Frontend: React.js
* State Management: Redux Toolkit (createSlice, createAsyncThunk)
* Backend: Node.js, Express.js
* API: OpenRouter (ChatGPT compatible)
* HTTP Client: Axios
* Testing: Jest

---

## 🔄 Application Flow

User Input → Redux Action → Async API Call → Backend → OpenRouter API → Response → Redux Store → UI Update

---

## 📁 Project Structure

```
client/
  ├── src/
  │   ├── components/
  │   ├── redux/
  │   └── App.js
  ├── public/
  └── package.json

server/
  ├── server.js
  ├── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
```

---

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd client
npm install
npm start
```

#### Backend

```bash
cd server
npm install
node server.js
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder:

```
OPENROUTER_API_KEY=your_api_key_here
```

---

## ⚠️ Note

This project requires an API key to function.

Please generate your own API key from OpenRouter (or any supported AI provider) and add it to the `.env` file.

The API key is not included in this repository for security reasons.

---

## 📊 Evaluation Criteria Covered

✔ Redux State Management (Messages, Loading, Error)
✔ Async API Handling using Redux Thunk
✔ API Integration with AI Model
✔ Clean and Responsive UI
✔ Error Handling & Loading Indicators
✔ Optimized Performance
✔ Clean Code Structure
✔ Basic Unit Testing

---

## 👨‍💻 Author

**Avishkar Kesarkar**
