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
  const [userID, setUserID] = useState('') // this is a string of the user's _id in the db

  // set on login
  const [role, setRole] = useState('') // 'staff' or 'contact'

  // for staff - these will be set after Ward+Bed are selected
  // for contact - these will be set after login
  const [patient, setPatient] = useState({}) // contains full data object of selected patient
  const [patientNOK, setPatientNOK] = useState({}) // contains full data object of selected patient's NOK 



  return (
    <>
      <UserContext.Provider value={({userID, setUserID, role, setRole, patient, setPatient, patientNOK, setPatientNOK})}>
      <div className="centered">
        <div style={{
          width: '420px',
          height: '100vh',
          display: 'flex',
          flexFlow: 'column'
        }}>
          <Header />
          <SubHeader />
          {/* <HomePage /> */}
          {/* <FamilyPatient /> */}
          <ChatPage /> 

        </div>
      </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
