import React, { useState, useContext } from "react";
import { Grid } from "@mui/material";
import styles from "./Bed.module.css";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import PatientDetails from "./PatientDetails";
import BedPatientHeader from "./BedPatientHeader";

const Bed = (props) => {
  const userCtx = useContext(UserContext);
  const [showPatientMenu, setShowPatientMenu] = useState(true);
  const [showPatientDetails, setShowPatientDetails] = useState(false);

  const handleClickPatientDetails = () => {
    setShowPatientMenu(false);
    setShowPatientDetails(true);
  };

  const getPatientNOK = async () => {
    const { ok, data } = await fetchData("/api/contacts/nric", "POST", {
      contact_patientNric: userCtx.patient.patient_nric,
    });

    if (ok) {
      userCtx.setPatientNOK(data);
    } else {
      console.log(data);
    }
  };

  const handleSendMsgClick = () => {
    getPatientNOK();
    props.setShowChat(true);
  };

  return (
    <>
      {showPatientMenu && (
        <div>
          <BedPatientHeader
            setShowChat={props.setShowChat}
            setShowPatientDetails={props.setShowPatientDetails}
            selectedWard={props.selectedWard}
            selectedBed={props.selectedBed}
          />
          <div className={styles.patientMenu}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <button
                  className={styles.AddButton}
                  onClick={() => handleSendMsgClick()}
                >
                  Send Message
                </button>
              </Grid>
              {/* <Grid item xs={12}>
              <button className={styles.AddButtonLight}>Add Team Member</button>
            </Grid> */}
              <Grid item xs={12}>
                <button
                  className={styles.AddButtonLight}
                  onClick={() => handleClickPatientDetails()}
                >
                  Patient's Details
                </button>
              </Grid>
            </Grid>
          </div>
        </div>
      )}

      {showPatientDetails && <PatientDetails></PatientDetails>}
    </>
  );
};

export default Bed;
