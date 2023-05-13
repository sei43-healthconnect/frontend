import React from "react";
import ChatPage from "./components/ChatPage";
import ChatInput from "./components/ChatInput";
import HomePage from "./components/HomePage";
import FamilyPatient from "./components/FamilyPatient";

function App() {
  return (
    <div className="centered">
      <div>
        {/* <ChatPage /> */}
        <HomePage />
        {/* <FamilyPatient /> */}
      </div>
    </div>
  );
}

export default App;
