import React from "react";
import ChatPage from "./components/ChatPage";
import ChatInput from "./components/ChatInput";
import HomePage from "./components/HomePage";
import FamilyPatient from "./components/FamilyPatient";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <div className="centered">
      <div style={{
        width: '420px',
        height: '100vh',
        display: 'flex',
        flexFlow: 'column'
      }}>
        <Header />
        <SubHeader />
        <HomePage />
        {/* <FamilyPatient />
        <ChatPage />  */}


      </div>
    </div>
  );
}

export default App;
