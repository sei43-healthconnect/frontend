import React, { useState } from "react";
import UserContext from "./context/user";
import ChatPage from "./components/ChatPage";
import ChatInput from "./components/ChatInput";
import FamilyPatient from "./components/FamilyPatient";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import HomePage from "./components/HomePage";

function App() {
  // current user's Object
  const [user, setUser] = useState({}); 

  // set on login
  const [role, setRole] = useState(''); // 'staff' or 'contact'

  // for staff - this will be set after Ward+Bed are selected
  // for contact - this will be set after login
  const [patient, setPatient] = useState({});
  const [patientNOK, setPatientNOK] = useState({});

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
          role,
          setRole,
          patient,
          setPatient,
          patientNOK,
          setPatientNOK,
        }}
      >
        <div className="centered">
          <div
            style={{
              width: "420px",
              height: "100vh",
              display: "flex",
              flexFlow: "column",
            }}
          >
          { !role && (
            <Login />
          )
          }

          { role && (
            <>
              <Header />
              <SubHeader />          
              <HomePage />
            </>
          )}

          {/* <FamilyPatient />
          <ChatPage />  */}

          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
