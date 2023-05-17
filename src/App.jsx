import React, { useState } from "react";
import UserContext from "./context/user";
import PageContext from "./context/page"

import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

function App() {
  // current user's Object
  const [user, setUser] = useState({});

  // set on login
  const [role, setRole] = useState(""); // 'staff' or 'contact'

  // for staff - this will be set after Ward+Bed are selected
  // for contact - this will be set after login
  const [patient, setPatient] = useState({});
  const [patientNOK, setPatientNOK] = useState({});
  const [authorised, setAuthorised] = useState(false);


  // 
  const [showPatientDetails, setShowPatientDetails] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showWards, setShowWards] = useState(true);
  const [showBeds, setShowBeds] = useState(false);
  const [showPatient, setShowPatient] = useState(false);

  return (
    <>
      <PageContext.Provider
        value={{
          showPatientDetails,
          setShowPatientDetails,
          showChat,
          setShowChat,
          showWards,
          setShowWards,
          showBeds,
          setShowBeds,
          showPatient,
          setShowPatient
        }}>
        <UserContext.Provider
          value={{
            authorised,
            setAuthorised,
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
              {!role && <LoginPage />}

              {role && (
                <>
                  <Header />
                  <SubHeader />
                  <HomePage />
                </>
              )}

            </div>
          </div>
        </UserContext.Provider>
      </PageContext.Provider>
    </>
  );
}

export default App;
