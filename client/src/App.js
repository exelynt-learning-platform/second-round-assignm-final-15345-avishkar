import React, { useEffect } from "react";
import ChatBox from "./components/ChatBox";

function App(){
  useEffect(() => {
  document.title = "ChatBox";
}, []);
  return(
    <div>
      <ChatBox/>
    </div>
  );
}
export default App;