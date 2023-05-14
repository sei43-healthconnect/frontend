import React, { useState } from "react";
import UserContext from './context/user'
import ChatPage from "./components/ChatPage";
import ChatInput from "./components/ChatInput";
import HomePage from "./components/HomePage";
import FamilyPatient from "./components/FamilyPatient";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";


function App() {
  // current user's unique ID in db
  const [userID, setUserID] = useState('')

  // staff or contact
  const [role, setRole] = useState('')

  // for staff - this will be set after Ward+Bed are selected
  // for contact - this will be set after login
  const [patientNRIC, setPatientNRIC] = useState('')

  return (
    <>
      <UserContext.Provider value={({userID, setUserID, role, setRole, patientNRIC, setPatientNRIC})}>
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
      </UserContext.Provider>
    </>
  );
}

export default App;
