import React from "react";
import styles from "./HomePage.module.css";
import StaffDisplay from "./StaffDisplay";
import UserContext from "../context/user";
import FamilyPatient from "./FamilyPatient";
import { useContext, useState } from "react";
import PatientDetails from "./PatientDetails";
import ChatPage from "./ChatPage";

const HomePage = () => {
  const userCtx = useContext(UserContext);
  const [showPatientDetails, setShowPatientDetails] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className={styles.HomePage}>
      {userCtx.role == "staff" && !showChat && !showPatientDetails && (
        <StaffDisplay
          setShowChat={setShowChat}
          setShowPatientDetails={setShowPatientDetails}
        />
      )}
      {userCtx.role == "contact" && !showChat && !showPatientDetails && (
        <FamilyPatient
          setShowChat={setShowChat}
          setShowPatientDetails={setShowPatientDetails}
        />
      )}
      {userCtx.authorised && showPatientDetails && !showChat && (
        <PatientDetails />
      )}
      {showChat && <ChatPage />}
    </div>
  );
};

export default HomePage;
