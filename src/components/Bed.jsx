import React, { useState, useEffect, useContext } from "react";
import { Stack } from "@mui/system";
import { Avatar, Grid } from "@mui/material";
import styles from "./Bed.module.css";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import PatientDetails from "./PatientDetails";

const Bed = (props) => {
  const userCtx = useContext(UserContext);
  const [showPatientMenu, setShowPatientMenu] = useState(true);
  const [showPatientDetails, setShowPatientDetails] = useState(false);

  const handleClickPatientDetails = () => {
    setShowPatientMenu(false);
    setShowPatientDetails(true);
  };

  return (
    <>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className={styles["wardHeader"]}>
              Ward {props.selectedWard}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles["bedHeader"]}>Bed {props.selectedBed}</div>
          </Grid>

          <Grid item xs={12}>
            <div className={styles["patientHeader"]}>
              <div className={styles.Avatar}>
                <Avatar
                  // key={item._id}
                  alt="Patient Photo"
                  src={userCtx.patient.patient_photo}
                  sx={{ width: 72, height: 72 }}
                />
              </div>
              <div className={styles["patientHeaderName"]}>
                {userCtx.patient.patient_firstName}{" "}
                {userCtx.patient.patient_lastName}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      {showPatientMenu && (
        <div className={styles.patientMenu}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <button className={styles.AddButton}>Send Message</button>
            </Grid>
            <Grid item xs={12}>
              <button className={styles.AddButtonLight}>Add Team Member</button>
            </Grid>
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
      )}

      {showPatientDetails && <PatientDetails></PatientDetails>}
    </>
  );
};

export default Bed;
