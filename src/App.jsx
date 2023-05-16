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
  const [patient, setPatient] = useState({
    "_id": {
      "$oid": "6454e1b39d39467f4d224a1a"
    },
    "patient_id": "patient000",
    "patient_firstName": "Patient",
    "patient_lastName": "Patient",
    "patient_gender": "Male",
    "patient_nric": "s0000001x",
    "patient_phoneNumber": 11111111,
    "patient_dateOfBirth": {
      "$date": "2000-12-31T16:00:00.000Z"
    },
    "patient_dateAdmitted": {
      "$date": "2022-12-31T16:00:00.000Z"
    },
    "patient_diet": "Regular diet",
    "patient_language": "Cantonese",
    "patient_attention": "test patient",
    "patient_doctorRemark": "test patient",
    "patient_photo": "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
    "patient_ward": 1,
    "patient_bed": 1
  }) // contains full data object of selected patient
  const [patientNOK, setPatientNOK] = useState({
    "_id": {
      "$oid": "645675b9a6dd86f41a94b159"
    },
    "contact_firstName": "Bob",
    "contact_lastName": "Doe",
    "contact_gender": "Male",
    "contact_phoneNumber": 33333333,
    "contact_order": 1,
    "contact_password": "password",
    "contact_patientNric": "s0000001x",
    "contact_relationship": "Son"
  }) // contains full data object of selected patient's NOK 



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
